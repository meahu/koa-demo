const Topic = require('../../lib/core').$Topic;
const User = require('../../lib/core').User;

exports.get = async (ctx) => {
    console.log(ctx.body);
    await ctx.render('../../views/topic/topic');
}