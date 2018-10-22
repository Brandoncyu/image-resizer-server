const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  PORT = 5000, NODE_ENV = 'development'
} = process.env

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())


app.use('/', require('./src/routes/photos'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)

  const {
    status = err.status || 500,
    error = err.message || 'Something Went Wrong'
  } = err

  res.status(status).json({
    status,
    error
  })
})


module.exports = app
