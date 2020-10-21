import types from '../types/userTypes';

const INIT_STATE = {
  currentUser: true,
  userRepos: [],
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        currentUser: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        currentUser: null,
        userRepos: [],
      };
    case types.GET_REPOS:
      return {
        ...state,
        userRepos: action.payload,
      };
    default:
      return state;
  }
};
