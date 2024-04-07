var express = require('express'); 
var bodyParser = require('body-parser'); 
var request = require('request-promise'); 
const cors = require('cors');

 
var app = express(); 
  // Enable CORS for all requests
app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.get('/postdata', function(req, res) {
  request('http://127.0.0.1:5000/flask', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

app.get('/postdatatoFlask', async function (req, res) { 
    var data = { // this variable contains the data you want to send 
        data1: "foo", 
        data2: "bar" 
    } 
 
    var options = { 
        method: 'POST', 
        uri: 'http://localhost:5000/postdata', 
        body: data, 
        json: true // Automatically stringifies the body to JSON 
    }; 
     
    var returndata; 
    var sendrequest = await request(options) 
    .then(function (parsedBody) { 
        console.log(parsedBody); // parsedBody contains the data sent back from the Flask server 
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable. 
    }) 
    .catch(function (err) { 
        console.log(err); 
    }); 
     
    res.send(returndata); 
}); 

app.post('/result/calculate', function(req, res) {
  console.log(req.body);
 res.send({
   result: [
     {
       label: "Transport",
       value: 200,
       color: "rgb(255, 99, 132)",
     },
     {
       label: "Grand deplacements",
       value: 100,
       color: "rgb(54, 162, 235)",
     },
     {
       label: "Logement",
       value: 500,
       color: "red",
     },
   ],
 });
});

app.post('/result/send-email', function(req, res) {
  console.log(req.body);
  res.send({
   success: true,
   mail: req.body.email
  });
 });
  
app.listen(4000); 


/*const express = require('express')
const request = require('request');

app = express();
const PORT = 3000;



app.listen(PORT, function (){ 
    console.log('Listening on Port 3000');
});*/




/*const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'./public')));



// database
const db = require("./models");

db.sequelize.sync();
//force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//console.log('Drop and Resync Database with { force: true }');
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BC application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/admin.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})*/