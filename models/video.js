const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;