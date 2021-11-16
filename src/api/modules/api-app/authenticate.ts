import request from '../../request';

export const login = (params: any) => request.post(`api/auth/login`, params);
export const register = (params: any) =>
  request.post(`api/auth/register`, params);
