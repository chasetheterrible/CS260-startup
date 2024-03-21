const cookieParser = require('cookie-parser');
const bycrypt = require('bycrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');



const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

app.set('trust proxy', true);

var apiRouter = express.Router();
app.use('/api', apiRouter);


apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bycrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id});
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});


apiRouter.get('/times', (_req, res) => {
    res.send(times);
});

apiRouter.post('/time', (req, res) => {
    times = updateTimes(req.body, times)
    res.send(times);
});

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let times = [];
function updateTimes(newTime, times) {
    let found = false;
    for (const [i, prevTime] of times.entries()) {
        if (newTime.time < prevTime.time) {
            times.splice(i, 0, newTime);
            found = true;
            break;
        }
    }

    if (!found) {
        times.push(newTime);
    }

    if (times.length > 10) {
        times.length = 10;
    }

    return times;
}