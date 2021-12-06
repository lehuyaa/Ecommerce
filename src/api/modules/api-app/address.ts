import request from '../../request';

export const getAllAddressById = (userId: number) =>
  request.get(`api/shipAddress/getByUserId/${userId}`);

export const addAddress = (params: any) =>
  request.post(`api/shipAddress/addShipAddress`, params);

export const editAddress = (parmas: any, idShipAddress: any) => request.put(`api/shipAddress/editShipAddress/${idShipAddress}`, parmas);

export const removeAddress = (idShipAddress: any) => request.delete(`api/shipAddress/removeShipAddress/${idShipAddress}`);