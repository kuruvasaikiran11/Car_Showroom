const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    car : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    mileage : {
        type : Number,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }
})

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;