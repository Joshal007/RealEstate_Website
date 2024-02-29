import Frame1 from '../images/Frame1.png';
import Frame2 from '../images/Frame2.png';
import Frame3 from '../images/Frame3.png';
import Frame4 from '../images/Frame4.png';
import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Steps = () => {
    return (
        <>
            <h1>HOW IT WORKS?</h1>
            <p>Step by Step Guide</p>
            <div style={{ margin: "2rem 4rem" }}>
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid rounded-start" src={Frame1} />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body" style={{ padding: "6rem 6rem 0rem 0rem" }}>
                            <h3 class="card-title"> Discover Your Perfect Home </h3>
                            <br />
                            <p class="card-text">Use our advanced filters to narrow down your search. Specify
                                everything from location to amenities, ensuring you find the property that feels right.</p>
                            <h5 style={{ textDecoration: "underline" }}>Learn More</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="card-body" style={{ padding: "6rem 0rem 0rem 6rem" }}>
                            <h3 class="card-title">Showcase Your Property</h3>
                            <br />
                            <p class="card-text">List your property with ease.
                                Fill in detailed forms to highlight every
                                feature, attracting the perfect buyer directly.</p>
                            <h5 style={{ textDecoration: "underline" }}>Learn More</h5>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img class="img-fluid rounded-start" src={Frame2} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid rounded-start" src={Frame3} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" style={{ padding: "6rem 6rem 0rem 0rem" }}>
                            <h3 class="card-title">
                                Connect and Communicate
                            </h3>
                            <br />
                            <p class="card-text">Our platform facilitates direct communication between buyer and
                                seller, making negotiations transparent and straightforward.</p>
                            <h5 style={{ textDecoration: "underline" }}>Learn More</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="card-body" style={{ padding: "6rem 0rem 0rem 6rem" }}>
                            <h3 class="card-title">
                                Seal the Deal Securely
                            </h3>
                            <br />
                            <p class="card-text">Advance payments made safe. Secure your agreement with
                                confidence, and step closer to your dream property.</p>
                            <h5 style={{ textDecoration: "underline" }}>Learn More</h5>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img class="img-fluid rounded-start" src={Frame4} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Steps;