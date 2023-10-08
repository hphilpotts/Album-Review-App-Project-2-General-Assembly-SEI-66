const mongoose = require('mongoose');
require('dotenv').config();

const makeDBConnection = () => {
    mongoose.set('strictQuery', true); // this and second param in mongoose.connect() below are there to prevent deprecation warnings
    const mongoDBURL = process.env.MONGODB_ATLAS_URL;

    if (mongoDBURL === undefined) throw new Error('Environment variable `MONGODB_ATLAS_URL` is undefined.');

    try {
        mongoose.connect(
            mongoDBURL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => {
                if (mongoose.connection.name === undefined) {
                    console.error('Mongoose connection with MongoDB not established!');
                } else {
                    console.log('Connected to MongoDB! Database:', mongoose.connection.name, ', PORT:', mongoose.connection.port,'\n');
                }
            }
        )
    } catch {
        console.error(Error);
    }
}

const checkDBConnectionStatus = () => {
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open!');
    })
    mongoose.connection.on('error', function (err) {
        console.error('Mongoose connection error:', err);
    })
    mongoose.connection.on('disconnected', function () {
        console.warn('\nMongoose connection disconnected!');
    })
}

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('** Disconnected through app termination **\n');
        process.exit(0);
    })
})

module.exports = { makeDBConnection, checkDBConnectionStatus };