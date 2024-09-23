// routes/tierListRoutes.js
const express = require('express');
const TierList = require('../models/TierList');
const router = express.Router();


// Route to get posts with pagination
router.get('/tierlists', async (req, res) => {
    try {
      // Get the page number and limit from the query string (or use defaults)
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10; // Number of posts per page
  
      // Calculate the starting index of the posts to fetch
      const skip = (page - 1) * limit;
  
      // Fetch the posts with pagination
      const tierLists = await TierList.find().skip(skip).limit(limit);
  
      res.json(tierLists);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tier lists' });
    }
  });

// Route to post a new tier list
router.post('/tierlists', async (req, res) => {
  try {
    const newTierList = new TierList(req.body);
    const savedTierList = await newTierList.save();
    res.json(savedTierList);
  } catch (error) {
    res.status(500).json({ message: 'Error saving tier list' });
  }
});

// Route to update likes (increment by 1)
router.put('/tierlists/:id/like', async (req, res) => {
    try {
      const updatedTierList = await TierList.findByIdAndUpdate(
        req.params.id,
        { $inc: { likes: 1 } }, // Increment the likes field by 1
        { new: true } // Return the updated document
      );
      res.json(updatedTierList);
    } catch (error) {
      res.status(500).json({ message: 'Error updating likes' });
    }
  });
  

module.exports = router;
