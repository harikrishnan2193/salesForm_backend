const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb connected successfully')
}).catch((err)=>{
    console.log('Mongodb connection failed dew to',err);
})