const Topic = require('../lib/core').$Topic;

exports.create = async (ctx) => {
    await ctx.render('../views/topic/create');
}

exports.createTopic = async (ctx, data) => {
    let params = ctx.request.body;
    params.user = {
        name: ctx.cookies.get("username"),
        email: ctx.cookies.get("email")
    }
    console.log(params);
    const res = await Topic.createTopic(params);
    console.log(res);
    ctx.body = '1'
}