import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);
  const location = useLocation();
  const user = location.state && location.state.loguser;
  console.log(user)

  return (
    <div>
      <Header />
      <div className="card" style={{width:"18rem"}}>

  <div class="card-body">
    <h2 class="card-title">{user.firstName}</h2>
    <h6 class="card-title">{user.age}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
};

export default Home;
