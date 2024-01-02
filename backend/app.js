const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')
const path = require('path')
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});


app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )

const products = require('./routes/product')
const auth = require('./routes/auth')
const sales = require('./routes/sale')

app.use('/api/v1/',products);
app.use('/api/v1/',auth);
app.use('/api/v1/',sales);

app.use(errorMiddleware)

module.exports = app;