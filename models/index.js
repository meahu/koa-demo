var mongoose = require('mongoose');
var config = {
  url: 'mongodb://127.0.0.1:27017/school'
}

mongoose.connect(config.url, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.url, err.message);
    process.exit(1);
  }
});

exports.User = require('./user');
exports.Topic = require('./topic');
exports.Comment = require('./comment');




