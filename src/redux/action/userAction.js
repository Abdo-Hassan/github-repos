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
  type: types.LOGIN,
  payload: repos,
});

export const addComment = (comment) => ({
  type: types.LOGIN,
  payload: comment,
});
