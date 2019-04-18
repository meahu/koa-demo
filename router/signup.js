const util = require('../util/util');
var Models = require('../lib/core');
var User = Models.User;

exports.get = async (ctx) => {
    console.log('登录');
    await ctx.render('../views/signup');
};

exports.post = async (ctx, next) => {
    console.log('登录提交');
    let params = ctx.request.body;

    let userInfo = await User.getUserByName(params.name);

    if (userInfo) {
        ctx.body = util.resData('用户名已存在', 1, '用户名已存在');
        return;
    }

    let res = await User.addUser(params);
    if (res) {
        ctx.cookies.set("username", params.name, {
            maxAge:1000*60*60
        })
        ctx.body = util.resData('注册成功', 0, '注册成功');
    } else {
        ctx.body = util.resData('用户注册失败，请稍候再试', 1, '用户注册失败，请稍候再试');
    }
};