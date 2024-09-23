// models/TierList.js
const mongoose = require('mongoose');

const TierListSchema = new mongoose.Schema({
  tiers: {
    type: Map,
    of: [String], // A map of arrays (e.g., { S: ['item1', 'item2'] })
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const TierList = mongoose.model('TierList', TierListSchema);
module.exports = TierList;
