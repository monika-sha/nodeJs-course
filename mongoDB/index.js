// connect to the database

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connection is successful'))
.catch(err => console.error('Not connected', err));

// schema and models
// model is use to run schema
// create new record  -----------------------------
const courseSchema = new mongoose.Schema({
    // name : String,
    // author : String,
    // createdDate : { type : Date , default : Date.now},
    // isPubliched : Boolean,
    // rating : Number

    // data validation -----------
    name : { type:String, required:true, minlength: 4, maxlength: 100 },
    category : {type:String, required: true, enum: ['web', 'mobile' , 'oher']},
    author : { type:String, required:true },
    createdDate: { type : Date , default : Date.now},
    isPublished : {type: Boolean, required:true},
    // one validation depend on other for true or false implementation
    rating : {type : Number ,required : function(){ return this.isPublished}},
    // custom validator 
    tags : {type: Array,validate: {
        validator : function(tags){
            return tags.length > 1
        }
    }}
})

// create model
const Course = mongoose.model('Course' , courseSchema)
  // create data
async function createCourse(){
    const course = new Course({
        name : "MongoDBssss",
        category: 'web',
        author : "Atulssssa",
        isPublished : true,
        // rating : 4.5,
        // tags : ['web','mobile']
    })

    try {
       // save data
        const saveCourse = await course.save()
        console.log(saveCourse)
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
        // console.log(error.errors)
    }
}

createCourse()

// get record ----------------------

async function getCourses(){
    // const getCourses = await Course.find()  // get all records
    // const getCourses = await Course.find({name : "Java"}).select({author:1}).sort({name:1})  // get  records
    // sort 1=asc order , -1 = desc order

    // const getCourses = await Course.find({rating : {$in : [5,3]}}).select({author:1}).sort({name:1})  // get  records
    // const getCourses = await Course.find({rating : {$gte : 4}}).select({author:1}).sort({name:1})  // get  records

    // logical operators OR and AND      
    const getCourses = await Course.find({rating : {$in : [4.5,5,3.5]}},{name:"Sonia"}).select({author:1}).or([{name:"Sonia"},{rating:"3.5"},])  // get  records
    console.log(getCourses)
 
}
// getCourses()


// update course in db ---------------------
async  function updateCourse(id){
    let course = await Course.findById(id)

    if(!course) return ;

    course.name = 'Laravel'
    course.rating = '1'

    let updateCourse = await course.save()
    console.log(updateCourse) 
}
// updateCourse('677b65cc4b69165cf0f8c5e7')


// delete data -----------------------
async function deletStudent(id){
    const student = await Student.findByIdAndDelete(id)
    console.log(student)
}
// deletStudent('677b65cc4b69165cf0f8c5e7')