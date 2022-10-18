const mongoose = require("mongoose");
const { commentSchema } = require('./comment');

// Define a schema
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//     header: String,
//     content: String,
//     date: Date
// });

const postSchema = new Schema({
    title: String,
    body: String,
    comment: [commentSchema],
    refComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

const Post = mongoose.model('Post', postSchema);

// make this available to our other files
module.exports = Post;
