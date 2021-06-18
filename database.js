const express = require('express');
const mysql = require('mysql');

// Create Connection
const db = mysql.createConnection({    
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'glucosedb'
});

// // Connection
db.connect((err) => {
    if (err) {
        throw err;
    } 
    console.log('MySQL Connected ...');
});

const app = express();

// // Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE glucosedb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database Created...');
    });
});

app.listen('3000', () => {
    console.log('Server is running on Port 3000');
});

// // Create Table
app.get('/createlevelstable', (req, res) => {
    let sql = 'CREATE TABLE levels(id int AUTO_INCREMENT, sugarlevel int, mealtype VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Levels Table Created...');
    });
});

// // Add Data Levels
app.get('/datalevels', (req, res) => {
    let levels = {sugarlevel: '75', mealtype: 'fasting', body: 'Fasting Levels'};
    let sql = 'INSERT INTO levels SET ?';
    let query = db.query(sql, levels, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Sugar Levels Added...');
    });
});

// // Select Levels
app.get('/getlevels', (req, res) => {
    let sql = 'SELECT * FROM levels';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('Levels Fetched...');
    });
});