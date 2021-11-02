import request from '../request';

export const getAllProduct = () => request.get(`api/product/getAllProduct`);
