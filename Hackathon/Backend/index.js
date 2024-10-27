const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;
const userRoutes = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'https://hackathon-website-8uyk.vercel.app/', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoutes);

// Connect to Express Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
