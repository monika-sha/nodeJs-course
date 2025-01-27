// promises and states
// pending state, fulfiled state,rejected state


const myPromise = new Promise(function(resolve,reject){
    const a= 4;
    const b= 4;

    setTimeout(()=>{
        if(a===b){
            resolve('The values are equal')
        }else{
            reject('The values are not equal')
        }
    })
}) 

// // pending state
// console.log(myPromise)

// fulfilled state 
// use then and catch parameters
myPromise.then(function(result){ // handle for response
                console.log(result) 
                return 'promise fulfilled successfully'
            })  // fulfilled state
             
            .catch(function(error){
                console.log(error)
            }) // rejected

// your promise settled
