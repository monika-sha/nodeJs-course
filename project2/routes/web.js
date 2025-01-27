const express = require('express')
const router = express.Router()
const {Course,validateData} = require('../models/coursesModel')


router.get('/about',(req,res) => {
    res.render('about_us',{title:'About Us'})
})

router.get('/contact-us',(req,res) => {
    res.render('contact_us',{title:"Contact Us"})
})

// courses routes
router.get('/',async(req,res) =>{
    const courses = await Course.find()
    res.render('home')
})
router.get('/courses',async(req,res) =>{
    const courses = await Course.find()
    res.render('courses',{title:'Courses',courses:courses})
})
router.get('/courses/:name',async(req,res) =>{
    const course = await Course.findOne({name:req.params.name})
    // console.log(course)
    res.render('courseDetails',{title:'Courses',course:course})
})

module.exports = router
