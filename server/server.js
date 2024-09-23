// Middleware
const express = require('express');
const mongoose = require('mongoose');
//const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/tierlistdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example Route to fix "Cannot GET /" issue
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Your API routes here
const tierListRoutes = require('./routes/tierListRoutes');
app.use('/api', tierListRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api',authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
