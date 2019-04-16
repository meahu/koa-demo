const util = require('../util/util');
const Comment = require('../lib/core').Comment;

exports.post = async (ctx) => {
    console.log('添加评论');
    let params = ctx.request.body;
    params.user = {
        name: ctx.cookies.get("username"),
        email: ctx.cookies.get("email")
    }
    let res = await Comment.create(params);
    console.log(params);
    console.log(res);
    if (res) {
        ctx.body = util.resData('评论添加成功');
    } else {
        ctx.body = util.resData('评论添加失败', 1, '评论添加失败');
    }
}