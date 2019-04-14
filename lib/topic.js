var Topic = require('../models').Topic;

//新建一个Topic
exports.createTopic = function (data) {
  return Topic.create(data);
};

//通过id获取Topic
exports.getTopicById = function (id) {
  return Topic.findbyId(id).exec();
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