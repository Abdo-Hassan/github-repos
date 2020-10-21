import types from '../types/userTypes';

export const login = (userData) => ({
  type: types.LOGIN,
  payload: userData,
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
