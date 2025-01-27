const mongoose = require('mongoose')
const Joi = require('joi') //validation package for hhtp method
const {categorySchema} = require('../models/categoriesModel')  // embed another schema


// create schema
const courseSchema = new mongoose.Schema({
    title : {type:String, minLength: 3, maxLength: 20, required:true},
    category:{ 
        type: categorySchema, // embedding a document into another
        required:true
    },
    creator:{type: String,required:true},
    rating:{type:Number,required:true}
})

// create model
const Course = mongoose.model('Course',courseSchema)

// put joi validation
function validateData(course){
    const schema = {
        title : Joi.string().min(3).max(20).required(),
        categoryId:Joi.string().required(),
        creator:Joi.string().min(5).required(),
        rating:Joi.number().min(0).required()
    }

    return Joi.validate(course , schema)
}

exports.Course = Course
exports.validate = validateData