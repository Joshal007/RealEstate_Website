import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyImage from './home1.png';
import Frame1 from './Frame1.png';
import Frame2 from './Frame2.png';
import Frame3 from './Frame3.png';
import Frame4 from './Frame4.png';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" style={{ padding: "10px 35px" }}>
          <a class="navbar-brand" href="#">XYZ INDUSTRIES</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ padding: "0px 106px" }}>
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
              <button class="btn btn-lg btn-primary">Explore</button>
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
              <form class="row gy-2 gx-3 align-items-center">
                <div class="col-auto">
                  <input type="email" class="form-control" id="autoSizingInput" placeholder="Email ID" />
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
