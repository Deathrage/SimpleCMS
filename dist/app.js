"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.connect('mongodb+srv://mongouser:mongouser123@cluster0-rw65h.mongodb.net/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
app.get('/', function (req, res) {
});
