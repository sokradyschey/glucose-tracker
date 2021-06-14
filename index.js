const express = require('express');
const mysql = require('mysql');
const http = require('http');
const path = require('path');
const fs = require('fs');

// Create Connection
const db = mysql.createConnection({    
    host     : 'localhost',
    user     : 'Sok',
    password : '123456',
});

// Connection
db.connect(() => {
    if (err) {
        throw err;
    } 
    console.log('MySQL Connected ...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE glucosedb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database Created...');
    })
})

const server = http.createServer((req, res) => {
    // Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of File
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf-8');
                })
            } else {
                // Server Error 500
                res.writeHead(500);
                res.end(content, `${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));