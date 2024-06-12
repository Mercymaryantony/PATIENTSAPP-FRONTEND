import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changedata]=useState([])
    const fetchdata = ()=>{
       axios.post("http://localhost:8081/view",data).then(
        (response)=>{
            changedata(response.data)
        }
       ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
       ).finally()
       console.log(data)
    }
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">GENDER</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,i)=>{
         return <tr>
        <th scope="row">{value.name}</th>
        <td>{value.bg}</td>
        <td>{value.gen}</td>
        <td>{value.add}</td>
      </tr>
    }
   )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View