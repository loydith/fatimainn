
// chunck => 1
const express = require ('express');
const nodemailer = require('nodemailer');
const path = require('path');

const log = console.log;
const app = express();
const PORT = 8080;

//chunk => 2
//data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.jsom());

app.post('/email', (req, res) => {
//send email here
console.log('Data: ', req.body);
res.json({ message: 'Message received!!!'})
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(PORT, () => log('Server is starting on PORT, ', 8080));
