const express = require('express')

const app = express()

const articleRouter = require('./routes/article')

app.use('/article', articleRouter)

app.listen(3001, function () {
  console.log('App is running at port 3001')
})
