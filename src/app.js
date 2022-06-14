if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// const { sequelize } = require('./models')
// const createError = require("http-errors")
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/indexRoutes')
const rabbitMq = require('./utils')
const eurekaHelper = require('./eurekaHelper/eurekaHelper.js')
// const usersRouter = require("./routes/users");
// const Account = require("./models/Account");
// const User = require("./models/User");

const app = express()
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.static('Upload'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', indexRouter)
// catch 404 and forward to error handler
// sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(function () {
//   sequelize.sync({ alter: true })
// })

app.listen(5004)
module.exports = app
console.log('server start on port 5004')
console.log(process.env.PORT)
eurekaHelper.registerWithEureka('service-stat', process.env.PORT)
rabbitMq.CreatChannel()
