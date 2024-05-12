const express = require('express');
const router = express.Router();
const carController = require('../Controllers/car.controller');

router.post("/addCar", (req, res, next) =>{
    const {car, model, price, mileage, imageUrl} = req.body;
    if(!car || !model || !price || !mileage || !imageUrl){
        return res.status(404).json({
            message:"All fields are required"
        })
    }
    next();
}, carController.addCar);
router.get("/getCars", carController.getCars);
router.delete("/deleteCar/:id", carController.deleteCar);
router.put("/updateCar/:id", (req, res, next) =>{
    const {car, model, price, mileage, imageUrl} = req.body;
    if(!car || !model || !price || !mileage || !imageUrl){
        return res.status(404).json({
            message:"All fields are required"
        })
    }
    next();
}, carController.updateCar);
module.exports = router;