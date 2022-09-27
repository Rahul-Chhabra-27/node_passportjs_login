const mongoose = require('mongoose');
const color = require('cli-color');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(color.underline.yellowBright(`Mongodb connected : ${connect.connection.host}`));   
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connectDB;