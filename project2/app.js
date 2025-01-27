const express = require('express')
const path = require('path')
const app = express()
const PORT = 3004;

// include other files
const config = require('./config/db.js')
const web = require('./routes/web.js')
const api = require('./routes/api.js')

// set view template
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
// to access css, js files
app.use(express.static(path.join(__dirname,'public')))

//use middlewares
app.use(express.json())
app.use('/api/',api)
app.use(web)




app.listen(3004,console.log(`server is running at http://localhost:${PORT}`))