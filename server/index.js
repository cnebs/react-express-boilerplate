const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require("axios");
const db = require("../database")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('./client/dist'));

app.listen(3000, () => { console.log('Server eavesdropping at port 3000')});