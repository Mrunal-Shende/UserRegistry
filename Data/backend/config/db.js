const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myUserDB');
        console.log("MongoDB connect!");
    } catch (error) {
        console.log("Connection fail:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
