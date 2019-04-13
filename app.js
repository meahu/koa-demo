const koa = require('koa');
const path = require('path');
const render = require('co-ejs');
const views = require('koa-views');
const app = new koa();
const router = require('./router/index.js');

// 支持 ejs 模板文件
app.use(views('views',{extension:'ejs'}));

// 支持 html 模板文件
// app.use(views('views',{map:{html:'ejs'}}));

// 公共数据，每个路由里面都要该数据
app.use(async (ctx,next)=>{
    ctx.state = {
        userName:'张三',
        commonName: 'koa demo',
        commonDescription: 'koa description'
    }
    // 继续向下匹配路由
    await next(); 
});

// app.use(async function (ctx, next) {
//     let title = '你好ejs';
//     let list = ['哈哈','嘻嘻','看看','问问'];
//     let content = "<h2>这是一个h2</h2>";
//     let num = 10;

//     await ctx.render('index',{
//         title,
//         list,
//         content,
//         num
//     });
// });
app.use(router.routes());

app.listen(3000, function () {
    console.log('listening on 3000.');
});