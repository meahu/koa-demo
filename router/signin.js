const util = require('../util/util');
var Models = require('../lib/core');
var User = Models.User;

exports.get = async (ctx) => {
    console.log('注册');
    await ctx.render('../views/signin');
};

exports.post = async (ctx) => {
    console.log('注册提交');
    let params = ctx.request.body;

    res = await User.getUserByName(params.name);

    if (res && res.password === params.password) {
        ctx.cookies.set("username", params.name, {
            maxAge:1000*60*60
        })

        ctx.cookies.set("email", res.email, {
            maxAge:1000*60*60
        })

        ctx.state.cookie.userName = params.name;
        ctx.state.cookie.email = params.email;

        ctx.body = util.resData('登录成功');
    } else {
        ctx.body = util.resData('用户名或密码错误', 1, '用户名或密码错误');
    }
};