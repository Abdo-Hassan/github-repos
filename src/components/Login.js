import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFailed } from '../redux/action/userAction';

const Login = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const client_id = useSelector((state) => state.client_id);
  const redirect_uri = useSelector((state) => state.redirect_uri);
  const client_secret = useSelector((state) => state.client_secret);
  const proxy_url = useSelector((state) => state.proxy_url);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    if (hasCode) {
      const newUrl = url.split('?code=');
      window.history.pushState({}, null, newUrl[0]);
      setLoading(true);
      const requestData = {
        client_id,
        redirect_uri,
        client_secret,
        code: newUrl[1],
      };

      fetch('https://api.github.com/user', {
        method: 'POST',
        body: JSON.stringify(requestData),
        credentials: 'same-origin',
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(loginSuccess(data));
        })
        .catch((error) => {
          setLoading(false);
          dispatch(loginFailed());
          setError(error);
        });
    }
  }, [client_id, redirect_uri, client_secret, proxy_url, dispatch]);

  if (currentUser) return <Redirect to='/' />;
  if (loading)
    return (
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
    );

  console.log('error', error);

  return (
    <div className='login text-center'>
      <div className='jumbotron login-container'>
        <h1 className='display-4'>Hello, Stranger!</h1>
        <p className='lead'>Welcome to Github Public Repos</p>
        <hr className='my-4' />
        <p className='lead' style={{ fontSize: 20 }}>
          You must log in with your github account to see all your information
          including{' '}
          <span style={{ color: '#8b008b', fontWeight: 'bold' }}>
            Public Repos.
          </span>
        </p>
        <p className='lead'>
          <a
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
          >
            <button className='btn btn-primary btn-dark login-button'>
              <i
                className='fab fa-github'
                style={{ fontSize: 22, marginRight: 10 }}
              ></i>
              <span style={{ position: 'relative', bottom: 2 }}>
                Log In with Github
              </span>
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
