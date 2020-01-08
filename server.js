const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const getPosts = require('./controllers/getPosts');

app.get('/', getPosts.getData);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000")
});