import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" style={{ padding: "13px 0px 10px 36px" }}>
                <a class="navbar-brand" href="#">XYZ INDUSTRIES</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ padding: "0px 30px 0px 160px" }}>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ padding: "0px 80px", backgroundColor: "lightblue", borderRadius: "25px" }}>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Property</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex" style={{ padding: "0px 6px" }}>
                        <button class="btn btn-outline-info" style={{ borderRadius: "20px" }} type="submit">Sign Up</button>
                    </form>
                    <form class="d-flex" style={{ padding: "0px 6px" }}>
                        <button class="btn btn-outline-info" style={{ borderRadius: "20px" }} type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">XYZ INDUSTRIES</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">About Us</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Property</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Services</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Contact</a>
        //                 </li>
        //             </ul>
        //             <form class="d-flex">
        //                 <button class="btn btn-primary me-2" type="button">Sign In</button>
        //                 <button class="btn btn-primary" type="button">Sign Up</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header;