const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const carRoute = require('./routes/car.route');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    return res.status(200).json({
        message:"Welcome to Cars Cards"
    })
})

app.use("/car", carRoute);

mongoose.connect("mongodb+srv://kuruvasaikiran11:Kurnool123@cluster0.z1ij6vp.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5001);
    console.log("Connected to db");
})
.catch(err=>console.log("Couldn't connect to Mongo DB"+err))