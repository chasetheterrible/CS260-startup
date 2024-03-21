const { MogoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Paired up');
const userCollection = db.collection('user');
const timeCollectoin = db.collectoin('time');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1});
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    const passwordHash = await bycrypt.has(password, 10);
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    
    return user;
}

function addTime(time) {
    timeCollectoin.insertOne(time);
}

function getHighTimes() {
    const query = { time: { $gt: 0, $lt: 900 } };
    const options = {
        sort: { score:1 },
        limit: 10
    };
    const cursor = timeCollectoin.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addTime,
    getHighTimes,
};