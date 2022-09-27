const express = require('express');
const dotenv = require('dotenv').config();
const color = require('cli-color');
const expressLayout = require('express-ejs-layouts');
const connectdb = require('./config/db');
const app = express();

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressLayout);
app.set('view engine', 'ejs');

//Routes 
app.use('/',require('./route/index'));
app.use('/users',require('./route/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(color.underline.cyan(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)));