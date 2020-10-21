import types from '../types/userTypes';

const INIT_STATE = {
  currentUser: false,
  userRepos: [],
  userComments: [],
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
    case types.ADD_COMMENT:
      return {
        ...state,
        userComments: action.payload,
      };
    default:
      return state;
  }
};
