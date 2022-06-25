const express = require('express');
const app = express();
const path = require('path');

const port = 3030; 
const start = () => console.log('Starting server...');

app.listen(port,start());

app.get('/', (req,res)=>{
    const file = path.join(__dirname, './views/index.html');
    res.sendFile(file);
});

app.get('/Home', (req,res)=>{
    const file = path.join(__dirname, './views/index.html');
    res.sendFile(file);
});

app.get('/babbage', (req,res)=>{
    const file = path.join(__dirname, './views/babbage.html');
    res.sendFile(file);
});

app.get('/berners-lee', (req,res)=>{
    const file = path.join(__dirname, './views/berners-lee.html');
    res.sendFile(file);
});

app.get('/clarke', (req,res)=>{
    const file = path.join(__dirname, './views/clarke.html');
    res.sendFile(file);
});

app.get('/hamilton', (req,res)=>{
    const file = path.join(__dirname, './views/hamilton.html');
    res.sendFile(file);
});

app.get('/hopper', (req,res)=>{
    const file = path.join(__dirname, './views/hopper.html');
    res.sendFile(file);
});

app.get('/lovelace', (req,res)=>{
    const file = path.join(__dirname, './views/lovelace.html');
    res.sendFile(file);
});

app.get('/turing', (req,res)=>{
    const file = path.join(__dirname, './views/turing.html');
    res.sendFile(file);
});

app.use(express.static('public'));

