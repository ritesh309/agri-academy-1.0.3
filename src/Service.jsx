import React from 'react'
import Card from "./Card"
import ServiceData from "./ServiceData"
import Navbar from "../src/components/Navbar"
import "./Service.css"
function Service() {
    return (
        <> <Navbar /><br/><br/>
            <div id="container_box">
                <div className="my-60">
                    <h1 className="text-center ">Our Services</h1>
                </div>
                <br/>   <br/>  
                <div className="container-fluid  mb-4 mt-6 ">
                    <div className="row gy-6 mb-6">
                        <div className="col-9 mx-auto ">
                            <div className="row gy-4">
                                {
                                    ServiceData.map( ( val, index ) => {
                                        return <Card
                                            key={index}
                                            imgsrc={val.imgsrc}
                                            title={val.title} />
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
