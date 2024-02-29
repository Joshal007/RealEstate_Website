import { React, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    const [email, setemail] = useState("");

    const submitHadler = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:5000/postemail", { email })
            alert(`Subscription Added for ${email}`);
            setemail('');
        }
        catch (e) {
            alert("Already Subscribed!")
        }
    }
    return (
        <div style={{ color: "white", backgroundColor: "darkblue", padding: "0rem 2rem" }}>
            <div class="row" style={{ padding: "2rem 0rem" }} >
                <div class="pricing-column col-lg-4 col-md-6">
                    <div class="card-body">
                        <h1>XYZ INDUSTRIES</h1>
                        <br />
                        <br />
                        <p style={{ color: "white" }}>XYZ Industries: Where real estate dreams
                            meet seamless transactions, transforming
                            aspirations into achievements.</p>
                        <br />
                        <button class="btn btn-lg btn-outline-primary" style={{ color: "white" }}>Explore</button>
                    </div>
                </div>
                <div class="pricing-column col-lg-2 col-md-6">
                    <div class="card-body">
                        <h4>Quick Links</h4>
                        <br />
                        <ul class="list-unstyled" style={{ padding: "0rem 2rem" }}>
                            <li class="text-start">About Us</li>
                            <li class="text-start">Blogs</li>
                            <li class="text-start">Testimonials</li>
                            <li class="text-start">Terms and Conditions</li>
                            <li class="text-start">Privacy Policy</li>
                            <li class="text-start">Site Map</li>
                        </ul>
                    </div>
                </div>
                <div class="pricing-column col-lg-3 col-md-6">
                    <div class="card-body">
                        <h4>Customer Support</h4>
                        <br />
                        <ul class="list-unstyled" style={{ padding: "0rem 2.5rem" }}>
                            <li class="text-start">Feedback</li>
                            <li class="text-start">Report a Problem</li>
                            <li class="text-start">Request a Call Back</li>
                        </ul>
                    </div>
                </div>
                <div class="pricing-column col-lg-3 col-md-6">
                    <div class="card-body">
                        <h3 class="text-start">Subscribe US</h3>
                        <br />
                        <p class="text-start" style={{ color: "white" }}>Subscribe to our weekly newsletter</p>
                        <form class="row gy-2 gx-3 align-items-center" onSubmit={submitHadler}>
                            <div class="col-auto">
                                <input type="email" class="form-control" id="autoSizingInput" placeholder="Email ID" value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;