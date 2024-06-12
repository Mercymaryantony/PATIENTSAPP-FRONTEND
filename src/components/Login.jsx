import React, { useState } from 'react'

const Login = () => {
    const [data, setdata] = useState({
        "name": "",
        "pass": ""
    })
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target, value })
    }


return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>USERNAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="pass" value={data.value} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" >LOGIN</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p>CLICK HERE TO REGISTER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login