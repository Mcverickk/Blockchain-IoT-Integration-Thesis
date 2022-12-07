const mongoose = require('mongoose');

module.exports = async () => {
    const DB_URL = `mongodb+srv://twitter-api:${process.env.PASSWORD}@cluster0.p0mv2s5.mongodb.net/?retryWrites=true&w=majority`
    try{
        console.log(DB_URL);
        await mongoose.connect(DB_URL, {useNewUrlParser:true});
        console.log("Database is chill...");
    }
    catch (error) {
        console.log("Database error!", error);
        throw new Error(error);
    }
}