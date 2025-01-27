const mongoose = require('mongoose')
const Joi = require('joi') //validation package for hhtp method


// create schema
const categorySchema = new mongoose.Schema({
    name : {type:String, minLength: 3, maxLength: 5, required:true}
})

// create model
const Category = mongoose.model('Category',categorySchema)

// put joi validation
function validateData(category){
    const schema = {
        name : Joi.string().min(3).max(10).required()
    }

    return Joi.validate(category , schema)
}

exports.Category =Category
exports.validate = validateData
exports.categorySchema = categorySchema