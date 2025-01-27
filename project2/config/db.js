const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/userDb')
    .then( () => console.log('Database connected'))
    .catch( err => console.error('Database connection error',err))

    