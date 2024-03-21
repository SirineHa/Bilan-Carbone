////////***************CONNEXION FLASK ***************** */
/*var express = require('express'); 
var bodyParser = require('body-parser'); 
var request = require('request-promise'); 
 
var app = express(); 
  
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
  
app.listen(3000); 
*/

/*const express = require('express')
const request = require('request');

app = express();
const PORT = 3000;



app.listen(PORT, function (){ 
    console.log('Listening on Port 3000');
});*/




