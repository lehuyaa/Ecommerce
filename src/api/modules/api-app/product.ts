import request from '../../request';

export const getAllProduct = () => request.get(`api/product/getAllProduct`);

export const searchProduct = (searchKey: any) => request.get(`api/product/search/${searchKey}`)