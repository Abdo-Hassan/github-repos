import types from '../types/userTypes';

const INIT_STATE = {
  currentUser: null,
  userRepos: [],
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        currentUser: true,
      };
    default:
      return state;
  }
};
