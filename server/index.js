
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = '8c36c7f08f1dc10932e854072d434711d15f65f96852e90aa385e0e3af1c59a3';
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(API_KEY);

// ---------- MIDDLEWARES ----------
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended:false })); 

// ---------- ROUTE ----------
app.post("/", async (req, res) => {

    const { term } = req.body;

    const handleData = async (req, res) => {
        return new Promise((resolve) => {
          const params = {
            q: term,
            gl: "us",
            google_domain: "google.com",
          };
      
          const callback = function(data) {
              resolve(data);
          };
      
          search.json(params, callback);
        });
    };

    const response = await handleData();
    res.json(response);
});

app.post("/images", async (req, res) => {

  const { term } = req.body;

  const handleData = async (req, res) => {
      return new Promise((resolve) => {
        const params = {
          engine: "google_images",
          q: term,
        };
    
        const callback = function(data) {
            resolve(data);
        };
    
        search.json(params, callback);
      });
    };

  const response = await handleData();
  res.json(response);
});

app.post("/videos", async (req, res) => {

  const { term } = req.body;

  const handleData = async (req, res) => {
      return new Promise((resolve) => {
        const params = {
          engine: "youtube",
          search_query: term,
        };
    
        const callback = function(data) {
            resolve(data);
        };
    
        search.json(params, callback);
      });
    };

  const response = await handleData();
  res.json(response);
});

// ---------- SERVER ----------
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});