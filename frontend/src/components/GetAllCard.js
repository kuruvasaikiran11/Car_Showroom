import axios from 'axios';
import React from 'react'
import {toast} from 'react-toastify'

const GetAllCard = (props) => {
    const {cars, fetchData} = props;
    const onDeleteHandler = async(id)=>{
        try{
            const res = await axios.delete(`https://car-showroom-36ga.onrender.com/car/deleteCar/${id}`);
            console.log(res);
            toast.warn("Car Deleted Successfully");
            fetchData();
        }catch(err){
            console.log(err)
        }
    }
    
  return (
    <div className='bg-green-400 grid grid-cols-1 md:grid-cols-3 p-4 md:p-12 gap-4'>
        {
            cars.map((car, i) => {
                return <>
                    <div key={i} className='bg-white p-8 rounded-md flex flex-col gap-3'>
                        <div className="h-40 md:h-80">
                            <img src={car.imageUrl} alt="Car" className='h-full w-full object-cover'/>
                        </div>
                        <h3 className="text-md md:text-2xl"><b>Name : </b>{car.car}</h3>
                        <h4 className="text-md "><b>Model : </b>{car.model}</h4>
                        <h5 className="text-sm "><b>Mileage : </b>{car.mileage}</h5>
                        <p className='w-full rounded-md font-bold p-2 bg-purple-400 text-white'><b>Price : </b>$ {car.price}</p>
                        <button onClick={()=>onDeleteHandler(car._id)} className='w-full rounded-md font-bold p-2 bg-red-400 text-white text-center'>DELETE</button>
                    </div>
                </>
            })
        }
    </div>
  )
}

export default GetAllCard