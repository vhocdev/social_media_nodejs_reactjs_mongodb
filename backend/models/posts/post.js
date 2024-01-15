const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    title : { type: String, trim: true, required: true },
    description : { type: String, trim: true, required: true }
});

module.exports = {Post};
