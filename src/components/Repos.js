import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, logout } from '../redux/action/userAction';

const Repos = () => {
  const userData = useSelector((state) => state.userData);
  const userRepos = useSelector((state) => state.userRepos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch(userData.repos_url);
      const data = await repos.json();
      try {
        dispatch(getRepos(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRepos();
  }, [userData, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='repos mt-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-12' style={{ marginTop: 85 }}>
            <div className='card user-image text-center'>
              <img
                className='card-img-top'
                src={userData.avatar_url}
                alt='Card cap'
              />
              <div className='card-body'>
                <h5 className='card-title font-weight-bold'>{userData.name}</h5>
                <p className='card-text'>{userData.bio}</p>
                <p className='card-text'>
                  Followers :{' '}
                  <span className='font-weight-bold'>{userData.followers}</span>
                </p>
                <p className='card-text'>
                  Following :{' '}
                  <span className='font-weight-bold'>{userData.following}</span>
                </p>
                <button
                  className='btn btn-danger logout-button'
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-7 col-12 public-repos'>
            <h3 className='repos-title'>
              Public Repos : {userData.public_repos}
            </h3>
            <div className='container text-center'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <button type='button' className='btn btn-secondary'>
                    Github Finder
                  </button>
                </div>
                <div className='col-md-6 col-12'>
                  <button type='button' className='btn btn-secondary'>
                    Weather App
                  </button>
                </div>
                <div className='col-md-6 col-12'>
                  <button type='button' className='btn btn-secondary'>
                    Weather App
                  </button>
                </div>
                <div className='col-md-6 col-12'>
                  <button type='button' className='btn btn-secondary'>
                    Weather App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repos;
