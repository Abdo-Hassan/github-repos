import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);
  if (currentUser) return <Redirect to='/repos' />;
  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=e5b0e0ec3f49f354598c&redirect_uri=http://localhost:3000/repos`}
      >
        <button className='btn btn-primary btn-dark'>Log In with Github</button>
      </a>
    </div>
  );
};

export default Home;
