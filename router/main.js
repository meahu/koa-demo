exports.get = (ctx) => {
    const userInfo = await User.getUserByName(ctx.cookies.get("username"));
    ctx.render('index', {userInfo})
}