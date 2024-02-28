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
      <div style={{margin:"0rem 4rem"}}>
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid rounded-start" src={Frame1} />
          </div>
          <div class="col-md-6">
            <div class="card-body" style={{ padding: "6rem 6rem 0rem 0rem" }}>
              <h3 class="card-title"> Discover Your Perfect Home </h3>
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
    </div>
  );
}

export default App;
