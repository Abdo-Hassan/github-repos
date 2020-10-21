import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, logout } from '../../redux/action/userAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import Repo from './Repo';

const Repos = () => {
  const userData = useSelector((state) => state.userData);
  const userRepos = useSelector((state) => state.userRepos);
  const [page, setPage] = useState(1);
  const [loadingRepos, setLoadingRepos] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch(userData.repos_url);
      const data = await repos.json();
      setLoadingRepos(true);
      console.log('repos', data);
      try {
        dispatch(getRepos(data));
        setLoadingRepos(false);
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
            <div className='text-center'>
              {loadingRepos === false ? (
                <InfiniteScroll
                  dataLength={userRepos.length}
                  next={() => setPage(page + 1)}
                  hasMore={true}
                  loader={
                    <div
                      className='spinner-border text-dark'
                      style={{
                        display: 'block',
                        margin: '20px auto',
                        width: '3rem',
                        height: '3rem',
                      }}
                      role='status'
                    >
                      <span className='sr-only'>Loading...</span>
                    </div>
                  }
                >
                  {userRepos.map((repo, index) => {
                    return (
                      <Repo
                        index={index}
                        name={repo.name}
                        link={repo.html_url}
                      />
                    );
                  })}
                </InfiniteScroll>
              ) : (
                <div
                  className='spinner-border text-dark'
                  style={{
                    display: 'block',
                    margin: '20px auto',
                    width: '3rem',
                    height: '3rem',
                  }}
                  role='status'
                >
                  <span className='sr-only'>Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repos;
