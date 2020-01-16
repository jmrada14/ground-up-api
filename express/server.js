//print:
const print = (arg) => console.log(arg);
// DEPENDENCIES:
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' });

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
mongoose
    .connect(
         "mongodb://localhost:27017/ground-up-api"
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// ROUTES:
app.use("/api", routes);

// PORT & LISTEN:
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port:  ${port} !`));
