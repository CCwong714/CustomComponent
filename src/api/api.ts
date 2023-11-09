import { serverApi } from './axios';

export const getApi = () =>
  serverApi.get('', undefined).then((res) => res.data);
