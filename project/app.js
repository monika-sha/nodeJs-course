const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories.js')
const students = require('./Routes/students.js')
const courses = require('./Routes/courses.js')

const app = express()
const PORT = 4002

mongoose.connect("mongodb://127.0.0.1/learningDb",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('Connected'))
.catch(err => console.error('Connection failed',err))


app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students) //comman part
app.use('/api/courses',courses) //comman part



app.listen(4002,console.log(`App is running at ${PORT}`))