// backend/server.js
const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const registerModel = require('./models/register');



// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());

// Routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
