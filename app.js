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
// public dir > css
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// parsing > url > encoded bodys send > html forms 
app.use(express.urlencoded({ extended: false }));
// parsing > json > sent by API clients
app.use(express.json());

app.set('view engine', 'hbs');

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("MySQL connected...")
    }
})

// # DEFINE ROUTES
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

// # LISTEN
app.listen(7777, () => {
    console.log("# Server runs on Port 7777")
});