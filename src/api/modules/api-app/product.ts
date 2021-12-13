import request from '../../request';

export const getAllProduct = (pageIndex: number) => request.get(`api/product/getAllProduct/${pageIndex}`);

export const getProductByCategory = (categoryId: any) =>
  request.get(`api/product/getByCategoryId/${categoryId}`);

export const searchProduct = (searchKey: any) =>
  request.get(`api/product/search/${searchKey}`);


export const getProductByUserId = (userId: any) => request.get(`api/product/getByUserId/${userId}`);

export const getProfileByUserId = (userId: any) => request.get(`api/product/getProfileByUserId/${userId}`);

export const getReviewProduct = (productId: number) => request.get(`api/product/getReviewByProductId/${productId}`);


export const addReview = (params: any) => request.post(`api/product/addReview`, params)