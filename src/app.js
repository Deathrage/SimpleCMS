// @ts-check

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const WebPage = require("./model/WebPage.js");
const PageType = require("./model/PageType.js")


mongoose.connect('mongodb+srv://mongouser:mongouser123@cluster0-rw65h.mongodb.net/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    app.listen(3000);
    
});
app.get("/type", (req, res)=>{
    PageType.find({}, (err, type)=>{
        res.send(type);
    });
});
app.get("/pages", (req, res)=>{
    WebPage.find({}, (err, page)=>{
        res.send(page);
    });
});

//universal router
app.get('*', function (req, res ) {
    WebPage.findOne({"pagePath": req.url}, (err, page) => {
        if (err) {
            res.send(err);
        } else if (page == null) {
            res.status(404).send("Not found");
        } else {
            res.send(page);
        }
    });
}) 