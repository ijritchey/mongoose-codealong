const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    // embbeded
    // comments: [commentSchema],
    // reference
    Comments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Post', postSchema);