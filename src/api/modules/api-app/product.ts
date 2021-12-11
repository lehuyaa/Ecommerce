import request from '../../request';

export const getAllProduct = () => request.get(`api/product/getAllProduct`);

export const getProductByCategory = (categoryId: any) =>
  request.get(`api/product/getByCategoryId/${categoryId}`);

export const searchProduct = (searchKey: any) =>
  request.get(`api/product/search/${searchKey}`);


export const getProductByUserId = (userId: any) => request.get(`api/product/getByUserId/${userId}`);

export const getProfileByUserId = (userId: any) => request.get(`api/product/getProfileByUserId/${userId}`);
