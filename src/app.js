const express = require('express');
const app = express();
const db = require('./config/firebaseConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);
db;

module.exports = app;