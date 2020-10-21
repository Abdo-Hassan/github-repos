import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/action/userAction';

const Repos = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className='text-center mt-2'>
      <button className='btn btn-danger logout-button' onClick={handleLogout}>
        Log Out
      </button>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>Repo</div>
          <div className='col-md-6 col-12'>Repo</div>
        </div>
      </div>
    </div>
  );
};

export default Repos;
