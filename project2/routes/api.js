const express = require('express')
const router = express.Router()
const {Course,validateData} = require('../models/coursesModel.js')

// get all courses 
router.get('/courses',async (req,res) =>{
    const courses = await Course.find();
    res.send(courses)
})

// get single course 
router.get('/courses/:id',async (req,res) =>{
    const courses = await Course.findById(req.params.id);
    res.send(courses)
})

// create new course
router.post('/courses',async (req,res) =>{
    const {error} = validateData(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const course =new Course ({
        name:req.body.name,
        desc:req.body.desc,
        author:req.body.author,
    })
    await course.save()
    res.send(course)

})
// update cource
router.put('/courses/:id',async(req,res) =>{
    const {error} = validateData(req.body)
    if(error) return res.status("404").send(error.details[0].message)
    
    const course = await Course.findByIdAndUpdate(req.params.id, {name:req.body.name,desc:req.body.desc,author:req.body.author},{new:true})
    if(!course) return res.status('404').send('Id not exist')
    
    res.send(course)
})

// delete course
router.delete('/courses/:id',async (req,res) =>{
    const deleteCourse = await Course.findByIdAndDelete(req.params.id)
    if(!deleteCourse) return res.status('404').send('Id not exist')

    res.send(deleteCourse)
})

module.exports = router