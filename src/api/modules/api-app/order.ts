import request from '../../request';


export const order = (params: any) =>
  request.post(`api/order/order`, params);

export const getOrderByUserId = (userId: any) =>
  request.get(`api/order/getOrderByUserId/${userId}`);

export const receivedOrder = (orderId: any) => request.put(`api/order/updateOrderUser/${orderId}`)

export const getNotification = () =>
  request.get(`api/order/getAllNotification`);