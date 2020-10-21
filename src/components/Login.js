import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/action/userAction';

const Repos = () => {
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

      fetch(proxy_url, {
        method: 'POST',
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(login(data));
          console.log('data', data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }
  }, [client_id, redirect_uri, client_secret, proxy_url, dispatch]);

  if (currentUser) return <Redirect to='/' />;

  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
      >
        <button className='btn btn-primary btn-dark'>Log In with Github</button>
      </a>
    </div>
  );
};

export default Repos;
