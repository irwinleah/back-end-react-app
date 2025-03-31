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
    try {
        const featuredVideos = await Video.find();
        res.status(200).json(featuredVideos);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// READ - GET - /videos/:videoId
router.get('/:videoId', async (req, res) => {
    try {
        const featuredVideo = await Video.findById(req.params.videoId);
        if (!featuredVideo) {
            res.status(404);
            throw new Error('Pet not found.');
        }
        res.status(200).json(featuredVideo);
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
});




// Export the router at the bottom of the file
module.exports = router;