const mongoose = require('mongoose')
const Joi = require('joi') //validation package for hhtp method

const courseSchema = new mongoose.Schema({
    name : { type: String, required:true },
    desc : { type:String, required:true },
    author : { type:String, required:true },
    created_at : {type:Date, default:Date.now()}
})

// model

const Course = mongoose.model('Course' , courseSchema)

function validateData(course){
    const schema = Joi.object({
        name : Joi.string().min(3).max(20).required(),
        desc:Joi.string().required(),
        author:Joi.string().min(5).required(),
    })

    return schema.validate(course);

}


exports.Course = Course
exports.validateData = validateData

