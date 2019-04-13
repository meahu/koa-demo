const util = require('../util/util');

exports.get = async (ctx) => {
    await ctx.render('../views/signin');
};

exports.post = async (ctx, next) => {
    let params = ctx.request.body;
    console.log(ctx.cookies.get("userInfo"));
    if (params.name === 'admin' && params.password === 'admin') {
        // ctx.session.username = params.name;
        ctx.cookies.set("userInfo", "gouzi", {
            maxAge:1000*60*60
          })
        console.log(ctx.session);
        ctx.body = util.resData(params);
    } else {
        ctx.body = util.resData('用户名或密码错误', 1, '用户名或密码错误');
    }
    
    // var data = ctx.request.body;
    // console.log(data);
    // var userInfo = yield $User.getUserByName(data.name);
    // if (!userInfo || (userInfo.password !== data.password)) {
    //     this.flash = {error: '用户名或密码错误!'};
    //     return this.redirect('back');
    // }

    // this.session.user = {
    //     name: userInfo.name,
    //     email: userInfo.email
    // };

    // this.flash = {success: '登录成功!'};
    // this.redirect('/user/' + userInfo.name);
};