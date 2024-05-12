import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './components/Card'
import GetAllCard from './components/GetAllCard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  const [cars, setCars] = useState([]);
    const fetchData = async()=>{
        try{
            const res = await axios.get("http://localhost:5001/car/getCars")
            // console.log(res.data.Car)
            setCars(res.data.Car);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
      fetchData();
  }, [])
  return (
    <>
      <div className='bg-purple-500'>
        <Card cars={cars} fetchData={fetchData}/>
        <GetAllCard cars={cars} fetchData={fetchData}/>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App