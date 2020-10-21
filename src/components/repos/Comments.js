import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../redux/action/userAction';

const Comments = () => {
  const userComments = useSelector((state) => state.userComments);
  const dispatch = useDispatch();
  const [enteredComment, setEnteredComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(enteredComment));
  };

  return userComments.length !== 0 ? (
    <p>yes</p>
  ) : (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
      }}
    >
      <div class='form-group'>
        <input
          type='text'
          class='form-control'
          placeholder='Type a Comment'
          onChange={(e) => setEnteredComment(e.target.value)}
        />
      </div>
      <button
        type='submit'
        class='btn btn-primary'
        style={{ padding: '7px 19px' }}
      >
        Add
      </button>
    </form>
  );
};

export default Comments;
