var Topic = require('../models').Topic;

//新建一个Topic
exports.createTopic = function (data) {
  return Topic.create(data);
};

//通过id获取Topic
exports.getTopicById = function (id) {
  return Topic.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};

//获取 Topic 列表
exports.getTopicList = function () {
  return Topic.findAll().exec();
};

//更改 Topic
exports.updateTopicById = function (data) {
  return Topic.update(date).exec();
};

//删除 Topic
exports.deleteTopicById = function (id) {
  return Topic.delete(id).exec();
};

exports.getNoReplyTopics = function () {
  return Topic.find({comment: 0}).sort('-updated_at').limit(5).select('title').exec();
}

exports.getTopicsByTab = (tab, p) => {
  var query = {};
  if (tab) { query.tab = tab; }
  return Topic.find(query).skip((p - 1) * 10).sort('-updated_at').limit(10).select('-content').exec();
  }, {
  key: function (tab, p) {
    tab = tab || 'all';
    return this.name + ':' + tab + ':' + p;
  }
}
