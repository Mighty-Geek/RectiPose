const express = require('express');
const path = require('path');

var port = process.env.PORT || 3000;
var app = express();

const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

console.log(`app running on port ${port}`);

app.get("/page-1", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page-1.html'));
});

app.get("/page-2", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page-2.html'));
});

app.get("/page-3", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page-3.html'));
});

app.get("/ppt", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ppt.html'));
});


app.listen(port);
console.log(`app running on port ${port}`);