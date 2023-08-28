import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';

const UserCard = ({ user }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title">{user.firstName}</h2>
        <h6 className="card-title">{user.age}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loguser } = location.state || {}; // Destructuring with default value

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate, location]);

  return (
    <div>
      <Header />
      {loguser && <UserCard user={loguser} />}
    </div>
  );
};

export default Home;
