import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Service = () => {
    return (
        <>
            <div style={{ backgroundColor: "lightblue", padding: "0rem 2rem" }}>
                <section id="pricing">
                    <h1>WHY CHOOSE XYZ?</h1>
                    <div class="row" style={{ padding: "2rem 0rem" }} >
                        <div class="pricing-column col-lg-3 col-md-6">
                            <div class="card-body">
                                <h1 class="fs-1">01</h1>
                                <h3>SEARCH AND FILTERS</h3>
                                <br />
                                <br />
                                <p>Tailored Searches to meet your needs. Find what you’re looking for with precision.</p>
                            </div>
                        </div>
                        <div class="pricing-column col-lg-3 col-md-6">
                            <div class="card-body">
                                <h1>02</h1>
                                <h3>DETAILED LISTINGS</h3>
                                <br />
                                <br />
                                <p>Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.</p>
                            </div>
                        </div>
                        <div class="pricing-column col-lg-3 col-md-6">
                            <div class="card-body">
                                <h1>03</h1>
                                <h3>DIRECT MESSAGING</h3>
                                <br />
                                <br />
                                <p>Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.</p>
                            </div>
                        </div>
                        <div class="pricing-column col-lg-3 col-md-6">
                            <div class="card-body">
                                <h1>04</h1>
                                <h3>SECURE PAYMENTS</h3>
                                <br />
                                <br />
                                <p>Trust in Every Transaction. Our secure payment system ensures your peace fo mind.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section id="home">
                    <h1 class="h1-primary">YOUR TRUSTED PARTNER IN</h1>
                    <h1 class="h1-primary">THE FUTURE OF HOUSING</h1>
                    <p class="para">Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.</p>
                    <button type="button" class="btn btn-primary btn-lg btn1">Join Our Community Today</button>
                </section>
            </div>
        </>
    )
}
export default Service;