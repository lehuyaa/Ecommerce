import request from '../../request';


export const order = (params: any) =>
  request.post(`api/order/order`, params);

  export const getOrderByUserId = (userId: any) =>
  request.get(`api/order/getOrderByUserId/${userId}`);