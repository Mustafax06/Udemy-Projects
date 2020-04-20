const mongoose = require('mongoose');

const connectionUri = 'mongodb://localhost:27017/blog';

exports.connect = (callback) => mongoose.connect(connectionUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, callback);