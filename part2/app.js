const express = require('express');
const path = require('path');
const session = require('express-session'); // Import session
require('dotenv').config();

const app = express();

// Setup session middleware
app.use(session({
  secret: 'dog-walk-secret',
  resave: false,
  saveUninitialized: false,
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;