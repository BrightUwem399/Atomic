import React from "react";
import "./Section.css";
import Image from "./Images/Aloe.png"

const Section = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>
                        Design a better<br></br> website template.
                        </h3>
                        <p>
                            Far away behind the words mountains,far from the <br></br>
                            countries Vocalia and Consonantia,there live the blind texts
                        </p>
                        <button type="button" className="btn btn1">FREE DOWNLOAD</button>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img alt="imgs" src={Image}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;