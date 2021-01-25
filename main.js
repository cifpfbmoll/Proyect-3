const path = require('path')
const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('expres-handlebars')
dotenv.config({path: './config/config.env' })
connectDB()
const app = express()
//login
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main', extname:'.hbs'}));
app.set('view engine', 'handlebars');
// static folder
app.use(express.static(path.join(__dirname, 'public')))
// routes
app.use('/', require('./routes/index'))
 const PORT = process.env.PORT || 3000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
