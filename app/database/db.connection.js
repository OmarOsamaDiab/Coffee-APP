require("dotenv").config()
const mongoose = require('mongoose')
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'coffee_app';

const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const database = mongoose.connection
database.on('error', console.error.bind(console, 'connection error:'))
module.exports = mongoose