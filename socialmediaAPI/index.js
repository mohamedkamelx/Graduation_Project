const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

const myroute = require("./router");
app.use("/", myroute);

mongoose.connect(MONGO_URI)
  .then(client => {
    // const db = client.db("social");
    // const productsCollection = db.collection("sicial");
    console.log('connected to Mongo');
    app.listen(PORT, '127.0.0.1', () => {
      console.log(`server running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
  });
