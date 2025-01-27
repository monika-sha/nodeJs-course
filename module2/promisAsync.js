// promise and async wait together

function placeOrder(drink){
    return new Promise(function(resolve, reject){
       
        if(drink === 'coffee'){
            resolve('Order is placed')
        }
        else{
            reject('Other drinks not found in this cafee')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} and is served`)
    })
}

async function serveDrink(drink){
    try{
        let orderPlaced = await placeOrder(drink)
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(error){
        console.log(error)
    }
}

serveDrink('coffee')
