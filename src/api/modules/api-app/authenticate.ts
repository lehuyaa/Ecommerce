import request from '../../request';

export const login = (params: any) => request.post(`api/auth/login`, params);

