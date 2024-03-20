const { MogoClient } = require('mongodb');
const bycrypt = require('bycrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;