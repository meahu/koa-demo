const Comment = require('../lib/core').$Comment;

exports.get = async (id) => {
    Comment.getCommentById();
    await ctx.render('../views/comment');
}