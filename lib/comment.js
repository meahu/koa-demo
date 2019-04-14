const Comment = require('../models').Comment;

exports.getCommentById = () => {
    return Comment.findById();
}
exports.saveComment = (data) => {
    return Comment.create();
}