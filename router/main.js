const Topic = require('../lib/core').Topic;
const User = require('../lib/core').$User;

exports.get = async (ctx) => {
    const userInfo = await User.getUserByName(ctx.cookies.get("username"));
    ctx.render('index', {userInfo})
}