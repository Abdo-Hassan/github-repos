import types from '../types/userTypes';

const INIT_STATE = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || false,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
  userData: JSON.parse(localStorage.getItem('userData')) || '',
  userComments: JSON.parse(localStorage.getItem('userComments')) || [],
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      localStorage.setItem('currentUser', true);
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: true,
        userData: action.payload,
      };

    case types.LOGIN_FAILED:
      localStorage.setItem('currentUser', false);
      localStorage.setItem('userData', '');
      return {
        ...state,
        currentUser: false,
        userData: [],
        userRepos: [],
      };

    case types.LOGOUT:
      localStorage.setItem('currentUser', false);
      return {
        ...state,
        currentUser: false,
        userData: [],
        userRepos: [],
      };

    case types.GET_REPOS:
      return {
        ...state,
        userRepos: action.payload,
      };

    case types.ADD_COMMENT:
      localStorage.setItem(
        'userComments',
        JSON.stringify([...state.userComments, action.payload])
      );
      return {
        ...state,
        userComments: [...state.userComments, action.payload],
      };

    default:
      return state;
  }
};
