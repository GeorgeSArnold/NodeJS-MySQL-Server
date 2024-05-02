// express
const express = require("express");
// path
const path = require("path");
// sql
const mysql = require("mysql");
// invorment
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
// create app
const app = express();

// SQL-DATABASE
// create connection 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// html view
app.set('view engine', 'hbs');

// public dir > css
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("MySQL connected...")
    }
})

// SERVER
// # GET
// index
app.get("/", (req, res) => {
    res.render("index");
});
// register
app.get("/register", (req, res) => {
    res.render("register");
});
// login
app.get("/login", (req, res) => {
    res.render("login");
});

// # LISTEN
app.listen(7777, () => {
    console.log("# Server runs on Port 7777")
});



