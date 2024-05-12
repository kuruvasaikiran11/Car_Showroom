const Car = require('../models/car.model');
module.exports.addCar = async(req, res) => {
    try{
        // const {car, model, price, mileage, imageUrl} = req.body;
        // if(!car || !model || !price || !mileage || !imageUrl){
        //     return res.status(404).json({
        //         message:"All fields are required"
        //     })
        // }

        // const currentCar = await Car.create({
        //     car : car,
        //     model : model,
        //     mileage : mileage,
        //     price : price,
        //     imageUrl : imageUrl
        // });
        const car = await Car.create(req.body);
        return res.status(200).json({
            message:"Car Added to the Collection",
            Car : car
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

module.exports.getCars = async(req, res) => {
    try{
        const cars = await Car.find();
        if(!cars){
            return res.status(404).json({
                message : "Cars Collection is Empty"
            })
        }
        return res.status(200).json({
            Car : cars,
            message : "Fetched Cars Collection Successfully"
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

module.exports.deleteCar = async(req, res) => {
    try{
        const checkCar = await Car.findById(req.params.id);
        if(!checkCar){
            return res.status(404).json({
                error : "Car Not found in the collection" 
            })
        }
        const car = await Car.findByIdAndDelete({_id : req.params.id});

        return res.status(200).json({
            message:"Car Deleted from the Collection",
            Car : car
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            error : "Internal Server Error"
        })
    }
}

module.exports.updateCar = async(req, res) => {
    try{
        const checkCar = await Car.findById(req.params.id);
        if(!checkCar){
            return res.status(404).json({
                error : "Car Not found in the collection" 
            })
        }
        const car = await Car.findByIdAndUpdate({_id : req.params.id}, req.body);
        // const updatedCar = await Car.(req.body);
        return res.status(200).json({
            message:"Car Details Updated in the Collection",
            Car : car
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            error : "Internal Server Error"
        })
    }
}