const router = require('koa-router')();
const signin = require('./signin.js');

router.get('/signin', signin.get)
router.post('/signin', signin.post)
// console.log(user);

// router.get('/',async (ctx)=>{
//     let title = '你好ejs';
//     let list = ['哈哈','嘻嘻','看看','问问'];
//     let content = "<h2>这是一个h2</h2>";
//     let num = 10;
//     await ctx.render('../views/index',{
//         title,list,content,num
//     });
// });

module.exports = router;