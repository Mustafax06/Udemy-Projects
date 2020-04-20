const mongoose = require('mongoose');

const postSchema = {
    title: String,
    content: String
};

const model = mongoose.model('Post', postSchema);

const seedingPost = {
    title: 'Example post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

exports.model = model;


/* Seeding */
exports.seedDb = function () {
    model.find({}, (err, foundPosts) => {
        if (foundPosts.length === 0) {
            model.create(seedingPost);
        };
    });
};