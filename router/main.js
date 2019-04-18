const User = require('../lib/core').User;
const Topic = require('../lib/core').Topic;

exports.get = async (ctx) => {
    const userInfo = await User.getUserByName(ctx.cookies.get("username"));
    const noReplyTopics = await Topic.getNoReplyTopics();

    const tab = ctx.request.query.tab
    const p = ctx.request.query.p || 1;
    const topics = await Topic.getTopicsByTab(tab, p);
    await ctx.render('../views/index', {userInfo, noReplyTopics, this: ctx, topics})
}