const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const DB = require("./database.js");
const { peerProxy } = require("./peerProxy.js");

const authCookieName = "token";
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static("public"));

app.set("trust proxy", true);

var apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.post("/auth/create", async (req, res) => {
  if (await DB.getUser(req.body.name)) {
    res.status(409).send({ msg: "Existing user" });
  } else {
    const user = await DB.createUser(req.body.name, req.body.password);
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

apiRouter.post("/auth/login", async (req, res) => {
  const user = await DB.getUser(req.body.name);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: "Unauthorized" });
});

apiRouter.delete("/auth/logout", (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get("/user/:name", async (req, res) => {
  const user = await DB.getUser(req.params.name);
  if (user) {
    const token = req?.cookies.token;
    res.send({ name: user.name, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: "Unknown" });
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

secureApiRouter.get("/times", async (req, res) => {
  const times = await DB.getHighTimes();
  res.send(times);
});

secureApiRouter.post("/time", async (req, res) => {
  const time = { ...req.body, ip: req.ip };
  await DB.addTime(time);
  const times = await DB.getHighTimes();
  res.send(times);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
