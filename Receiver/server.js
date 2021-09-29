const express = require('express');
const { text } = require('body-parser');

const app = express();
// app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/version', (req, res) => {
    res.send({ msg:"0.0.1 - Initialized Receiver"});
    //31.220.54.182/verison
});

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send({data:"WE ARE LOGGED IN"});
});



app.listen(process.env.PORT || 3000);
console.log("Running on http://localhost:3000/")