const User = require('./user');
const Comment = require('./comment');
const Topic = require('./topic');

module.exports = {
  get $User () {
    return User;
  },
  get Comment () {
    return Comment;
  },
  get Topic () {
    return Topic;
  }
};