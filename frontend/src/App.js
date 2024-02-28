import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" style={{padding:"10px 35px"}}>
    <a class="navbar-brand" href="#">XYZ INDUSTRIES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{padding:"0px 80px"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{padding:"0px 80px",backgroundColor:"lightblue",borderRadius:"25px"}}>
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
      <form class="d-flex" style={{padding:"0px 6px"}}>
        <button class="btn btn-outline-info" style={{borderRadius:"20px"}} type="submit">Sign Up</button>
      </form>
      <form class="d-flex" style={{padding:"0px 6px"}}>
        <button class="btn btn-outline-info" style={{borderRadius:"20px"}} type="submit">Sign In</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
