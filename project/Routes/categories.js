const express = require('express')
const {Category,validate } = require('../models/categoriesModel')
// console.log(joi)
const router = express.Router() // call router function of express



router.get('/',async (req,res)=>{   //place app with router
    let categories = await Category.find()
    res.send(categories)
})

router.get('/:id',async (req,res)=>{
    const category = await Category.findOne({_id : req.params.id})
    if(!category) return res.status(404).send('Id not exist')
    res.send(category)
})

router.post('/', async (req,res)=>{ 
    // call joi validation functio
    const {error} = validate(req.body)  
    if(error) return res.status(400).send(error.details[0].message)

    const category = new Category({
        name :req.body.name
    })
    await category.save()
    res.send(category)
})

router.put('/:id',async(req,res)=>{
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const category = await Category.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    // console.log(category)
    if(!category) return res.status(404).send('Id not found');

        res.send(category)
})

router.delete('/:id', async (req,res) =>{
    let category = await Category.findByIdAndDelete(req.params.id)
    if(!category) return res.status(404).send('Course you ar looking for not found')
    res.send(category)

})







module.exports = router