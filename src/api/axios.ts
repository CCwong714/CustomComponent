/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const serverAxiosParams = {
  baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto',
};

export const serverAxiosInstance = axios.create(serverAxiosParams);

const api = (axiosInstance: AxiosInstance) => {
  return {
    get: (url: string, config: AxiosRequestConfig<any> | undefined) =>
      axiosInstance.get(url, config),
    delete: (url: string, config: AxiosRequestConfig<any> | undefined) =>
      axiosInstance.delete(url, config),
    post: (
      url: string,
      body: any,
      config: AxiosRequestConfig<any> | undefined
    ) => axiosInstance.post(url, body, config),
    put: (
      url: string,
      body: any,
      config: AxiosRequestConfig<any> | undefined
    ) => axiosInstance.put(url, body, config),
    patch: (
      url: string,
      body: any,
      config: AxiosRequestConfig<any> | undefined
    ) => axiosInstance.patch(url, body, config),
  };
};

export const serverApi = api(serverAxiosInstance);
