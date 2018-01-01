const express = require('express')
const model = require('../model')
const Admin = model.getModel('admin')
const Router = express.Router()

Router.post('/login', (req, res) => {
  const { userid, pwd } = req.body
  Admin.findOne({userid, pwd}, (err, doc) => {
    if (err) {
      res.json({code: 0, msg: err})
    }
    if (doc) {
      res.json({code: 1, data: doc, mdg: 'suc'})
    }
  })
})

module.exports = Router
