const router = require('koa-router')();
const main = require('./main');
const signin = require('./signin.js');
const signup = require('./signup.js');
const comment = require('./comment.js');
const topic = require('./topic.js');
const topicDetail = require('./topic/_id');

router.get('', main.get)
router.get('/', main.get)

router.get('/signin', signin.get)
router.post('/signin', signin.post)
router.get('/signup', signup.get)
router.post('/signup', signup.post)
// router.get('/comment/:id', comment.get)
// router.post('/comment', comment.post)
router.get('/topic', topic.create)
router.get('/topic/create', topic.create)
router.post('/topic/create', topic.createTopic)
router.get('/topic/:id', topic.getTopicDeail)

router.post('/comment', comment.post);

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