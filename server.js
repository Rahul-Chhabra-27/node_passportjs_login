const express = require('express');
const dotenv = require('dotenv').config();
const color = require('cli-color');

const app = express();

app.use('/',require('./route/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(color.underline.cyan(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)));