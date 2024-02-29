import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import MyImage from '../images/home1.png';
const Home = () => {
    return (
        <>
            <div>
                <section id="home">
                    <h1 class="h1-primary">CONNECTING DREAMS TO REALITY</h1>
                    <h1 class="h2-primary">YOUR PREMIER</h1>
                    <h1 class="h1-primary">REAL ESTATE MARKET PLACE</h1>
                    <p>Where every search ends with a home</p>
                    <button type="button" class="btn btn-primary btn-lg btn1">Find Your Home</button>
                    <button type="button" class="btn btn-primary btn-lg btn1">List Your Property</button>
                </section>
            </div>
            <div class="bgg">
                <img src={MyImage} alt="home_image" style={{ width: "92%" }} />
            </div>
        </>
    )
}
export default Home