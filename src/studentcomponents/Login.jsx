import React from 'react'
import "../studentcomponents/login.css"
import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
function Login() {
    return (
        <>
            <Navbar className="position" />
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-2">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100 row-yl-8 ">
                            <div className="col-10 col-md-10 col-lg-8 col-xl-6 ">
                                <div className="card " >
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Student-Login</h2>

                                        <form >

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Your Email</label>
                                                <input type="email" id="" name="" placeholder="Enter your @mail" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Password</label>
                                                <input type="password" id="" name="" placeholder="Enter your password" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="d-flex justify-content-center text-danger">
                                                <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-3 text-body">Login</button>
                                            </div><br/>

                                            <p className="text-center text-muted mt-6 mb-0">Do not have an account? <NavLink to="/studentsignup" class="fw-boldtext-danger text-body"><u>SignUp here</u></NavLink></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
