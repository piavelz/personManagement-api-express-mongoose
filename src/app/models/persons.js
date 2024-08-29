const mongoose = require("mongoose")


//design for the array of works
const workSchema = new mongoose.Schema({
    company:String,
    initContract:Date,
    finishContract:Date,
    position:String
}, { _id: true })


//model for person (with array of works)
const personSchema = new mongoose.Schema({
    name:String,
    lastName: String,
    works:[workSchema],
    nationality:String,
    year: Number,
})

module.exports = mongoose.model('persons',personSchema )