const Comment = require('../models').Comment;

exports.getCommentsByTopicId = (id) => {
    return Comment.find({topic_id: id}).sort('updated_at').exec();
}

exports.create = (data) => {
    return Comment.create(data);
}