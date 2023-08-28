import {  useNavigate } from "react-router-dom";
function Header() {
 const navigate=useNavigate()
    return (
      <div className="header border">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://inzint.com">
  <img src="https://inzint.com/wp-content/uploads/2022/09/inzint-logo-dark.png" width="80px"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="collapse navbar-collapse " id="navbarNav" style={{display:'flex',justifyContent:'space-between'}}>
        <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Project</a>
        </li>
        
        <li>
        <a class="nav-link" href="/campaign">Campaign</a>
  
        </li>
       
       
      </ul>
      <div class="nav-item">
          <form class="form-inline my-2 my-lg-0 justify-content-end">  
          <button className="btn btn-primary" onClick={()=>{
           localStorage.removeItem("token");
           navigate("/")
          }}>Logout</button>
         
          </form>
        </div>
        </div>
      </div>
    </div>
  </nav> 
  </div>
  );
  }
  
  export default Header;
  