const express = require('express')
const model = require('../model')
const Article = model.getModel('article')
const Router = express.Router()

/**
 * 获取文章列表
 */
Router.get('/list', (req, res) => {
  // 获取文章分类
  const { type } = req.query
  // 定义查询条件
  const query = type === 'all' ? {} : {type}
  Article.find(query, (err, doc) => {
    if (err) {
      res.json({code: 0, msg: err})
    }
    res.json({code: 1, data: doc, msg: ''})
  })
})

Router.get('/content', (req, res) => {
  const { article_id } = req.query
  console.log(article_id);
  Article.findOne({_id: article_id}, (err, doc) => {
    if (err) {
      res.json({code: 0, msg: err})
    }
    res.json({code: 1, data: doc, msg: ''})
  })
})

/**
 * 新增文章 test
 */
// Router.get('/add', (req, res) => {
//   Article.create({
//     title: '东京喰种',
//     author: 'Clancey',
//     tags: ['动漫'],
//     content: 'Hello , Hello, Hello',
//     summary: 'test for mongodb'
//   }, (err, doc) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(doc)
//     res.end()
//   })
// })

module.exports = Router
