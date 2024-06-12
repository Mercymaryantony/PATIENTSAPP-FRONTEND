import React, { useState } from 'react'

const Add = () => {
    const [data,setdata]=useState({
        "name":"",
        "dob":"",
        "pass":"",
        "cpass":"",
        "bg":"",
        "add":"",
        "gen":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        if (data.pass == data.cpass){
        axios.post("http://localhost:8081/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status =="added") {
                    alert("SUCCESSFULLY ADDED")
                }
                 else {
                    alert("FAILED")
                }
            }
        ).catch((error)=>{
            console.log("error")
        }).finally()}
        else{
            alert("INCORRECT PASSWORD")
        }
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>NAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>DOB</b></label>
                            <input type="date" name="dob" value={data.dob} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>BLOOD GROUP</b></label>
                            <select name="bg" value={data.dob} onChange={inputhandler} id="" className="form-control">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>GENDER</b></label>
                            <select name="gen" value={data.gen} onChange={inputhandler} id="" className="form-control">
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>ADDRESS</b></label>
                            <textarea name="add" value={data.add} onChange={inputhandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="pass" value={data.pass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"><b> CONFIRM PASSWORD</b></label>
                            <input type="password" name="cpass" value={data.cpass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add