// Controlador 

//Importing necessary libraries
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


//Crea BD
const db = firebase.firestore();
//Equivalente a una tabla en DB
const userData = db.collection('userdata')
//Creating express app
const app = express();
const apiPort = process.env.API_PORT || 3003;

//Setting up express app
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

