import request from '../../request';

export const getAllAddressById = (userId: number) =>
  request.get(`api/shipAddress/getByUserId/${userId}`);
