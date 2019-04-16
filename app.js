const koa = require('koa');
const path = require('path');
const render = require('co-ejs');
const views = require('koa-views');
const app = new koa();
const router = require('./router/index.js');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
// const session = require('koa-session');

// router.get('/', async ( ctx ) => {
//     let st = await students.find();
//     ctx.response.type = 'application/json';
//     ctx.body = st;
//   })

// 解析参数
app.use(bodyparser());

app.use(static(path.join( __dirname,  './asset')));

// 支持 ejs 模板文件
app.use(views('views',{extension:'ejs'}));

// 支持 html 模板文件
// app.use(views('views',{map:{html:'ejs'}}));

// 公共数据，每个路由里面都要该数据
app.use(async (ctx,next)=>{
    ctx.state = {
        userName:'张三',
        commonName: 'koa demo',
        commonDescription: 'koa description',
        cookie: {
            userName: ctx.cookies.get("username") || '',
            email: ctx.cookies.get("email") || ''
        },
        $app: {
            tabs: ["全部", "问答", "分享", "吐槽", "招聘"]
        }
    }
    // 继续向下匹配路由
    await next(); 
});

// app.use(render(app, {filters: require('./helpers/filters')}));

// 路由
app.use(router.routes());

// session
// app.keys = ['koa demo token'];
// const CONFIG = {
//    key: 'koa:sess',   //cookie key (default is koa:sess)
//    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
//    overwrite: true,  //是否可以overwrite    (默认default true)
//    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
//    signed: true,   //签名默认true
//    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
//    renew: false,  //(boolean) renew session when session is nearly expired,
// };
// app.use(session(CONFIG, app));

app.listen(3000, function () {
    console.log('listening on 3000.');
});