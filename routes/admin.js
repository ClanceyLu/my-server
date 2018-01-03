const express = require('express')
const model = require('../model')
const Admin = model.getModel('admin')
const Article = model.getModel('article')
const Router = express.Router()

Router.post('/login', (req, res) => {
  const { userid, pwd } = req.body
  Admin.findOne({userid, pwd}, (err, doc) => {
    if (err) {
      res.json({code: 0, msg: err})
    }
    if (doc) {
      res.cookie('userid', doc._id)
      res.json({code: 1, data: doc, mdg: 'suc'})
    }
  })
})

Router.post('/add', (req, res) => {
  const {title, author, type, tags, summary, content} = req.body
  const atags = tags.split(',')
  Article.create(
    {title, author, type, summary, content, tags: atags},
    (err, doc) => {
      if (err) {
        res.json({code: 0, msg: err})
      }
      res.json({code: 1, msg: 'suc'})
    }
  )
})

module.exports = Router
