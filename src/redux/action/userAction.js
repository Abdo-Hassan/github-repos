import types from '../types/userTypes';

export const loginSuccess = (userData) => ({
  type: types.LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const getRepos = (repos) => ({
  type: types.GET_REPOS,
  payload: repos,
});

export const addComment = (comment) => ({
  type: types.ADD_COMMENT,
  payload: comment,
});
