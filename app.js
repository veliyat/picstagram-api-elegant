const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cors = require('./middlewares/cors')

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')

mongoose.connect(
  process.env.CONNECTION_URL,
  { useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (!err) {
      console.log('DB Connected!')
    }
  }
);

const app = express()

app.use(express.static('public'))

app.use(logger('dev'))

app.use(cors);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/posts', postsRouter)
app.use('/', usersRouter)

module.exports = app //es5
//export default app //es6
