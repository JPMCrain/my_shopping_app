const express = require('express');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3002

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res)=> {
	console.log(req.body)
});


app.listen(PORT, ()=>{
	console.log(`Server listening on ${PORT}`)
});