const router = require('koa-router')();
const signin = require('./signin.js');
const signup = require('./signup.js');
const comment = require('./comment.js');
const topic = require('./topic.js');
const topicDetail = require('./topic/_id');
const user = require('./user');

// 登录注册
router.get('/signin', signin.get)
router.post('/signin', signin.post)
router.get('/signup', signup.get)
router.post('/signup', signup.post)

// 话题
router.get('/topic', topic.create)
router.get('/topic/create', topic.create)
router.post('/topic/create', topic.createTopic)
router.get('/topic/:id', topic.getTopicDeail)

// 
router.post('/comment', comment.post);

// 用户
router.get('/user', user.get);

module.exports = router;