import types from '../types/userTypes';

export const login = () => ({
  type: types.LOGIN,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const getRepos = (repos) => ({
  type: types.LOGIN,
  payload: repos,
});
