require('dotenv').config()
const express = require('express')
const app = express()
const personRoutes = require('./app/routes/persons')
const {dbConnect} = require('./config/mongo')


const port = process.env.PORT || 3000
app.use(express.json())


//routes
app.use("/api",personRoutes)



//connection 
dbConnect()
app.listen(port, () => {
    console.log('Api ready on port: ', port)
});