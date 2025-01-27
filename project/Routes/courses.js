const express = require('express')
const {Course,validate } = require('../models/coursesModel.js')
const {Category} = require('../models/categoriesModel.js')
// console.log(joi)
const router = express.Router() // call router function of express



router.get('/',async (req,res)=>{   //place app with router
    let courses = await Course.find()
    res.send(courses)
})

router.get('/:id',async (req,res)=>{
    const course = await Course.findOne({_id : req.params.id})
    if(!course) return res.status(404).send('Id not exist')
    res.send(course)
})

router.post('/', async (req,res)=>{ 
    // call joi validation functio
    const {error} = validate(req.body)  
    if(error) return res.status(400).send(error.details[0].message)

    // get all categories
    const category = await Category.findById(req.body.categoryId)
    if(!category) return res.status('400').send('Category Id not found')

    const course = new Course({
        title :req.body.title,
        category:{
            "_id" : category._id,
            "name":category.name
        },
        creator:req.body.creator,
        rating:req.body.rating,
    })
    await course.save()
    res.send(course)
})

router.put('/:id',async(req,res)=>{
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const category = await Category.findById(req.body.categoryId)
    if(!category) return res.status('400').send('Category Id not found')

    const course = await Course.findByIdAndUpdate(req.params.id,
        {
            title :req.body.title,
            category:{
                "_id" : category._id,
                "name":category.name
            },
            creator:req.body.creator,
            rating:req.body.rating,
        },
        {new:true})
    // console.log(course)
    if(!course) return res.status(404).send('Id not found');

    res.send(course)
})

router.delete('/:id', async (req,res) =>{
    let course = await Course.findByIdAndRemove(req.params.id)
    if(!course) return res.status(404).send('Course you ar looking for not found')
    res.send(course)

})





module.exports = router