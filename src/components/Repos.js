import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/action/userAction';

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h2>Repos</h2>
      <button className='btn btn-danger' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Home;
