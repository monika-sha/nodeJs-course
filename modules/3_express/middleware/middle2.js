function myCustomMiddleware2(req,res,next){
    console.log('I am custom second middleware')
    next()  // pass controll to next function
}

module.exports = myCustomMiddleware2
