import request from '../../request';

export const getAllAddressById = (userId: number) =>
  request.get(`api/shipAddress/getByUserId/${userId}`);

export const addAddress = (params: any) =>
  request.post(`api/shipAddress/addShipAddress`, params);
