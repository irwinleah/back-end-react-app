const Video = require('../models/video.js');
const express = require('express');
const router = express.Router();

// write your routes/controller functions here

// router.post('/', async (req, res) => {
//     // Add a message to test the route
//     res.json({ message: 'Create Route' });
//   });
  router.post('/', async (req, res) => {
    try {
        const createdVideo = await Video.create(req.body);
        res.status(201).json(createdVideo);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});



// Export the router at the bottom of the file
module.exports = router;