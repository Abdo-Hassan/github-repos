import React from 'react';
import Comments from './Comments';

const Repo = ({ index, link, name }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-12'>
          <a href={link} target='_blank' rel='noopener noreferrer' key={index}>
            <button
              type='button'
              className='btn btn-secondary'
              style={{
                padding: '12px 10px',
                margin: '0px 0px 15px',
                width: '100%',
              }}
            >
              {name}
              <i
                className='fas fa-location-arrow'
                style={{ position: 'relative', top: 2, left: 10 }}
              ></i>
            </button>
          </a>
        </div>
        <div className='col-md-8 col-12'>
          <Comments index={index} />
        </div>
      </div>
    </div>
  );
};

export default Repo;
