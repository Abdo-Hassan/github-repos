import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../redux/action/userAction';

const Comments = ({ index }) => {
  const userComments = useSelector((state) => state.userComments);
  const dispatch = useDispatch();
  const [enteredComment, setEnteredComment] = useState('');
  const [userComment, setUserComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(enteredComment, index));
    setEnteredComment('');
  };

  useEffect(() => {
    if (userComments !== 0) {
      userComments.map((comment) => {
        if (index === comment.repoNumber) {
          setUserComment(comment.repoComment);
        }
        return comment;
      });
    } else {
      setUserComment('');
    }
  }, [userComments, userComment, index]);

  return userComment ? (
    <p style={{ marginTop: '1rem' }}>Comment : {userComment}</p>
  ) : (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
      }}
    >
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Type a Comment'
          onChange={(e) => setEnteredComment(e.target.value)}
          required
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary'
        style={{ padding: '7px 19px' }}
      >
        Add
      </button>
    </form>
  );
};

export default Comments;
