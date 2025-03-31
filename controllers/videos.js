const Video = require('../models/video.js');
const express = require('express');
const router = express.Router();

// write your routes/controller functions here

// CREATE - POST - /videos
  router.post('/', async (req, res) => {
    try {
        const createdVideo = await Video.create(req.body);
        res.status(201).json(createdVideo);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// READ - GET - /videos
router.get('/', async (req, res) => {
    res.json({ message: 'Index Route' });
});




// Export the router at the bottom of the file
module.exports = router;