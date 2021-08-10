import React from 'react'
import "../studentcomponents/signup.css"
import Navbar from "../components/Navbar"
import Login from "../studentcomponents/Login"
import { NavLink } from "react-router-dom"
function Signup() {
    return (
        <> <Navbar className="position" />
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" >
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <h3 className="text-uppercase text-center mb-5">Student-section</h3>

                                        <form >

                                            <div className="form-outline mb-4">
                                                <label className="form-label" >First Name</label>
                                                <input type="text" id="" name="" placeholder="Enter your Last name" required className="form-control form-control-lg" />

                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Last Name</label>
                                                <input type="text" id="" name="" placeholder="Enter your Last name" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Your Email</label>
                                                <input type="email" id="" name="" placeholder="Enter your @mail" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Password</label>
                                                <input type="password" id="" name="" placeholder="Enter your password" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="">Repeat your password</label>
                                                <input type="password" id="" name="" placeholder="Re-enter your password" required className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3cg"
                                                />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink to="/studentlogin" class="fw-bold text-body"><u>Login here</u></NavLink></p>

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

export default Signup
