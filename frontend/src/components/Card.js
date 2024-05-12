import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'

const Card = (props) => {
  const [carData, setCarData] = useState({
    car: "",
    model: "",
    price: "",
    mileage: "",
    imageUrl: ""
  });
  const onSubmitHandler = async() =>{
    // console.log(carData)
    if(carData.car === "" || carData.model === "" || carData.price === "" || carData.mileage === "" || carData.imageUrl === ""){
      toast.error("Please fill all the fields");
    }
    try{
      const Car = await axios.post("http://localhost:5001/car/addCar", carData);
      toast.success("Car added to the Collection Successfully!!")
      props.fetchData();
      console.log(Car);
      setCarData({
        car: "",
        model: "",
        price: "",
        mileage: "",
        imageUrl: "",
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="bg-pink-500 p-12 flex justify-center">
      <div className="bg-white shadow-xl w-[600px] p-4 rounded-xl flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-black" htmlFor="car">
          Car Name :
        </label>
        <input
          className="p-2 rounded-md bg-blue-200"
          type="text"
          name="car"
          value={carData.car}
          onChange={(e) => setCarData({ ...carData, car: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black" htmlFor="model">
          Model :
        </label>
        <input
          className="p-2 rounded-md bg-blue-200"
          type="text"
          name="model"
          value={carData.model}
          onChange={(e) => setCarData({ ...carData, model: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black" htmlFor="price">
          Price :
        </label>
        <input
          className="p-2 rounded-md bg-blue-200"
          type="number"
          name="price"
          value={carData.price}
          onChange={(e) => setCarData({ ...carData, price: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black" htmlFor="mileage">
          Mileage :
        </label>
        <input
          className="p-2 rounded-md bg-blue-200"
          type="number"
          name="mileage"
          value={carData.mileage}
          onChange={(e) => setCarData({ ...carData, mileage: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black" htmlFor="imageUrl">
          Image Url :
        </label>
        <input
          className="p-2 rounded-md bg-blue-200"
          type="text"
          name="imageUrl"
          value={carData.imageUrl}
          onChange={(e) => setCarData({ ...carData, imageUrl: e.target.value })}
        />
      </div>
      <button onClick={onSubmitHandler} className="bg-purple-500 rounded-md p-2 text-white">ADD</button>
      </div>
    </div>
  );
};

export default Card;
