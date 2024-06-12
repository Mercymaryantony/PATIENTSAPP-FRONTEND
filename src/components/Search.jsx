import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setdata] = useState({
        "name": ""
    })
    const [result, setresult] = useState([])

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)

        axios.post("http://localhost:8081/search", data).then(
            (response) => {
                setresult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()

    }
    const deletepatient = (id)=>{
        let input ={"_id":id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                if(response.data.status == "deleted"){
                    alert("DELETED SUCCESSFULLY")
                }
                else{
                    alert("ERROR")
                }
            }
        ).catch().finally()    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label"><b>NAME</b></label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                            </div>
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
                                            {result.map(
                                                (value, i) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.bg}</td>
                                                        <td>{value.gen}</td>
                                                        <td>{value.add}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>{deletepatient(value._id)}}>DELETE</button></td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search