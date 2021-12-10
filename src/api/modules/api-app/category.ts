import request from '../../request';

export const getAllCategory = () => request.get(`api/category/getAllCategory`);
