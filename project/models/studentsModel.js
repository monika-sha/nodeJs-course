const mongoose = require('mongoose')
const joi = require('joi')
const string = require('joi/lib/types/string')
const { type } = require('joi/lib/types/object')


const studentSchema = new mongoose.Schema({
    name:{type: String, required: true, minLength:3, maxLength: 10},
    isEnrolled : {
        type:  Boolean,
        default: false,
    },
    phone:{
        type: String,
        minLength: 10,
        maxLength : 30,
    }
})

const Student = mongoose.model('Student',studentSchema)

async function validateData(studentData){
    const schema = {
        name : joi.string().min(5).max(10),
        isEnrolled: joi.boolean().required(),
        phone: joi.string().min(10).max(50).required,
    }

    return schema.validate(studentData);
}


exports.Student = Student
exports.validate = validateData