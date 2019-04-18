const User = require('../lib/core').$User
const Topic = require('../lib/core').Topic

exports.get = async (ctx) => {
    console.log('用户中心');
    const userInfo = await User.getUserByName(ctx.cookies.get("username"));
    const noReplyTopics = await Topic.getNoReplyTopics();
    const topics = await Topic.getTopicsByName(ctx.cookies.get("username"));
    await ctx.render('../views/user', {userInfo, noReplyTopics, topics})
}