const express = require('express');
const app = express();
const morgan = require('morgan'); // third party middleware

const myCustomMiddleware  = require('./middleware/middle')
const myCustomMiddleware2  = require('./middleware/middle2')
// define envirenment variable
const PORT = process.env.PORT || 4001; // Ensure this matches the port in app.listen
// pass data in json
app.use(express.json()) 


// handling multiple routes 
const courses = [
    {id:1,name:'php'},
    {id:2,name:'phython'},
    {id:3,name:'java'},
    {id:4,name:'html'},
    {id:5,name:'dbms'},
];

// call middleware
app.use(myCustomMiddleware)
app.use(myCustomMiddleware2)
app.use(morgan())

// Define routes
app.get('/', (req, res) => { // get to read data
    res.send('Hello from learning Node.js');
});

app.get('/about', (req, res) => {
    res.send('Hello from About Us');
});

app.get('/contact', (req, res) => {
    res.send('Hello from Contact Us');
});


// multiple routing
app.get('/courses/:name', (req, res) => {
    //using id
    // app.get('/courses/:id', (req, res) => {    
    // let course = courses.find(course=>course.id === parseInt(req.params.id)) 
    // using name
    let course = courses.find(course=>course.name === req.params.name)   
    if(!course) res.status(404).send('course you are looking for does not exist')
    res.send(course)
});

//////////////////////////  https get post put delet methode ///////////////////////////////////

app.get('/courses',(req,res) => {
    res.send(courses)
}) // get 

app.post('/courses',(req,res) => {
    const course= {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
}) // create

app.put('/courses/:id',(req,res)=>{
    let course = courses.find(course=>course.id === parseInt(req.params.id))
    if(!course)res.status(404).send('Course you ar looking for not found')
    
    course.name = req.body.name
    res.send(course)
}) // update record

app.delete('/courses/:id', (req,res) =>{
    let course = courses.find(course=>course.id === parseInt(req.params.id))
    if(!course)res.status(404).send('Course you ar looking for not found')
    let index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)

})



// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
