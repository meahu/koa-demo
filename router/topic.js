const Topic = require('../lib/core').Topic;
const User = require('../lib/core').User;
const Comment = require('../lib/core').Comment;

exports.create = async (ctx) => {
    const userInfo = await User.getUserByName(ctx.cookies.get("username"))
    await ctx.render('../views/topic/create', {userInfo: userInfo});
}

exports.createTopic = async (ctx) => {
    let params = ctx.request.body;
    params.user = {
        name: ctx.cookies.get("username"),
        email: ctx.cookies.get("email")
    }
    const res = await Topic.createTopic(params);
    if (res) {
        ctx.redirect('/topic/' + res._id);
    } else {
        ctx.body = '创建失败';
    }
}

exports.getTopicDeail = async (ctx) => {
    let urlArr = ctx.request.url.split('/');
    let id = urlArr[urlArr.length - 1];
    const topic = await Topic.getTopicById(id);
    const userInfo = await User.getUserByName(ctx.cookies.get("username"));
    const noReplyTopics = await Topic.getNoReplyTopics();
    const comments = await Comment.getCommentsByTopicId(id);
    await ctx.render('../views/topic/topic', {topic, userInfo, noReplyTopics, comments});
}