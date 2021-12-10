import request from '../../request';

export const getAllProduct = () => request.get(`api/product/getAllProduct`);

export const getProductByCategory = (categoryId: any) =>
  request.get(`api/product/getByCategoryId/${categoryId}`);

export const searchProduct = (searchKey: any) =>
  request.get(`api/product/search/${searchKey}`);
