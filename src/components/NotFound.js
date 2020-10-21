import React from 'react';

const NotFound = ({ history }) => {
  return (
    <div className='jumbotron not-found'>
      <h1 className='display-4'>Nothing to see HERE !</h1>
      <p className='lead'>
        <button
          className='btn btn-primary'
          onClick={() => history.push('/')}
          style={{ padding: '14px 18px' }}
        >
          Back to login
        </button>
      </p>
    </div>
  );
};

export default NotFound;
