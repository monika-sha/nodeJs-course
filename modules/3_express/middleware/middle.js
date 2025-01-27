function myCustomMiddleware(req,res,next){
    console.log('I am custom middleware')
    next()  // pass controll to next function
}

module.exports = myCustomMiddleware
