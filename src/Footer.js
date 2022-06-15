import React from "react";
import "./Footer.css"


const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="card shadow">
                    <div className="row flexing">
                        <div className="col-md-4">
                            <i class="fa fa-lightbulb-o fa-beat-fade mt-4"></i>
                            <h4 className="card-title pt-5"><b>Intuitive Thinking</b></h4>
                            <p className="card-text pb-4">
                                A small river named Duden flows by their place and supplies it with the necessary regelialia
                            </p>
                        </div>
                        <div className="col-md-4 card-p">
                            <i class="fa fa-tablet fa-spin mt-4" aria-hidden="true"></i>
                            <h4 className="card-title pt-5"><b>Orange for carrots</b></h4>
                            <p className="card-text pb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                        </div>
                        <div className="col-md-4 card-t">
                            <i class="fa fa-life-ring fa-fade mt-4" aria-hidden="true"></i>
                            <h4 className="card-title pt-5"><b>Infinite posibilities</b></h4>
                            <p className="card-text pb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;