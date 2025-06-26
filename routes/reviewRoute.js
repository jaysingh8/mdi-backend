const express = require('express');
const router = express.Router();
const Review = require('../models/Review');


router.post('/', async (req, res) => {
  try {
    const { productId, userId, name, rating, message } = req.body;
    const newReview = new Review({ productId, userId, name, rating, message });
    await newReview.save();
    res.status(201).json({ message: 'Your review is added', review: newReview });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
});


router.get('/', async (req, res) => {
  try {
    const { productId } = req.query;
    if (!productId) {
      return res.status(400).json({ message: 'productId query parameter is required' });
    }

    const reviews = await Review.find({ productId });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
});

module.exports = router;
