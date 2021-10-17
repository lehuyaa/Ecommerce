import request from '../request';

export const register = (params: any) => request.post(`api/auth/register`, params);
export const login = (params: any) => request.post(`api/auth/login`, params);