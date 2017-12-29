const express = require('express')
const model = require('../model')
const Article = model.getModel('article')
const Router = express.Router()

Router.get('/list', (req, res) => {
  Article.find((err, doc) => {
    if (err) {
      console.log(err)
    }
    res.json(doc)
  })
})

Router.get('/add', (req, res) => {
  Article.create({
    title: '东京喰种',
    author: 'Clancey',
    tags: ['动漫'],
    content: 'Hello , Hello, Hello',
    summary: 'test for mongodb'
  }, (err, doc) => {
    if (err) {
      console.log(err)
    }
    console.log(doc)
    res.end()
  })
})

module.exports = Router
