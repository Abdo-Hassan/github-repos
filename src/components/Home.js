import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);
  if (currentUser) return <Redirect to='/repos' />;
  return (
    <div>
      <button className='btn btn-primary btn-dark'>Log In with Github</button>
    </div>
  );
};

export default Home;
