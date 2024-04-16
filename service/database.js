const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db("Paired_up");
const userCollection = db.collection("user");
const timeCollection = db.collection("time");

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(
    `Unable to connect to database with ${url} because ${ex.message}`
  );
  process.exit(1);
});

function getUser(name) {
  return userCollection.findOne({ name: name });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(name, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    name: name,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addTime(time) {
  timeCollection.insertOne(time);
}

function getHighTimes() {
  const query = { time: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { time: 1 },
    limit: 10,
  };
  const cursor = timeCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addTime,
  getHighTimes,
};
