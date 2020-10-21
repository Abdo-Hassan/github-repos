import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/userAction';

const Repos = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('userData', userData);
  //   const fetchRepos = async () => {
  //     const repos = await fetch(userData);
  //     const data = await repos.json();
  //     console.log('data', data);
  //   };
  //   fetchRepos();
  // }, [userData]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className='repos mt-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-12'>
            <div className='card user-image text-center'>
              <img
                className='card-img-top'
                src={userData.avatar_url}
                alt='Card cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>{userData.name}</h5>
                <p className='card-text'>{userData.bio}</p>
                <button
                  className='btn btn-danger logout-button'
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-7 col-12'>
            <div className='container text-center'>
              <div className='row'>
                <div className='col-md-6 col-12'>Repo</div>
                <div className='col-md-6 col-12'>Repo</div>
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Repos;
