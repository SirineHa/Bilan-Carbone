const express = require("express");
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
})