const mongoose = require('mongoose')
// 链接数据库
const DB_URL = 'mongodb://127.0.0.1:27017/my-website'

mongoose.connect(DB_URL)
mongoose.connection.on('error', console.log.bind(console, 'connect error: \n'))
mongoose.connection.on('connected', console.log.bind(console, 'connect success.'))

const models = {
  article: {
    // 文章标题
    title: {type: String, require: true},
    // 文章作者
    author: {type: String, require: true},
    // 文章分类
    type: {type: String, require: true},
    // 文章创建时间
    create_time: {type: Date, default: Date.now},
    // 文章标签
    tags: {type: [String], default: []},
    // 文章内容
    content: {type: String, require: true},
    // 文章概述
    summary: {type: String, require: true},
  }
}

// 创建model
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}
