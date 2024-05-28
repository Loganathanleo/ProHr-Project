const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configs/db");

// Load environment variables
dotenv.config();
// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// middleware
app.use(express.json());

// Routes
app.post("/api/register", require("./controllers/register"));
app.post("/api/login", require("./controllers/login"));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
