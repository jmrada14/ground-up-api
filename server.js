//print:
const print = (arg) => console.log(arg);
// DEPENDENCIES:
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// ROUTES:
const routes = require('./routes/api');

// APP:
const app = express();

// BODYPARSER:
app.use(
  bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

// DATABASE:
const db = require("./keys/db");
mongoose.connect(
    db,{ useNewUrlParser: true }
).then( () => print("CONNECTED TO DB")
).catch(err => print(err) );

// ROUTES:
app.use("/api", routes);

// PORT & LISTEN:
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port:  ${port} !`));
