const koa = require('koa');
const path = require('path');
const render = require('co-ejs');
const views = require('koa-views');
const app = new koa();
const router = require('./router/index.js');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');
// const Monk = require('monk');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/school');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('成功连接数据库');
  //创建Schema
    var personSchema = mongoose.Schema({
        name: String,
        height: Number
    });

    //通过Schema创建model，由于是类，所以首字母大写
var PersonModel = mongoose.model('Person', personSchema);
//创建document
var tim = new PersonModel({ name: 'Tim1', height: 150});

//保存(这是一个异步动作，回调会在同步代码完毕后再运行)
tim.save(function(err, tim) {
    console.log(tim.name + '保存成功');
})

//输出tim
console.log(tim);
});

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
        commonDescription: 'koa description'
    }
    // 继续向下匹配路由
    await next(); 
});

// 路由
app.use(router.routes());

// session
app.keys = ['koa demo token'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));

app.listen(3000, function () {
    console.log('listening on 3000.');
});