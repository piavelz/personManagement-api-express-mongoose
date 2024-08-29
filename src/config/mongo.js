const mongoose = require('mongoose')

//mongodb connection 
const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB Atlas :)')
    }catch(error){
        console.log(error)
    }
}


module.exports = {dbConnect}