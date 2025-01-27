const express = require('express')

const {Student,validate} = require("../models/studentsModel")
const router = express.Router()



router.get('/', async (req,res) => {
    const students = await Student.find()    
    res.send(students)
})

router.get('/:id', async(req,res) => {
    const students = await Student.findById(req.params.id)
    if(!student) return res.status('404').send('Id not found')
    res.send(students)
})

router.post('/', async(req,res) =>{
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        phone: req.body.phone,
    })

    try {
        await student.save()
        res.status(201).send(student)
    } catch (error) {
        res.status(500).send('Could not create student')
    }
    

})

router.put('/:id', async(req,res) =>{
    const {error} = validate(req.body)
    if(error) return res.status('400').send(error.details[0].message)
    
        try {
            const student = await Student.findByIdAndUpdate(req.params.id,{name:req.body.name,isEnrolled:req.body.isEnrolled,phone:req.body.phone},{new:true})
            if(!student) return res.status('400').send('Id not found')
            res.send(student) 
        } catch (error) {
            res.status('500').send("Student could not updated")
        }
     
})

router.delete('/:id', async (req,res) =>{
    let student = await Student.findByIdAndRemove(req.params.id)
    if(!student) return res.status(404).send('Course you ar looking for not found')
    res.send(student)

})





module.exports = router

