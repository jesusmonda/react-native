import { Action } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, store } from "../redux/store";
import { Chat } from '../types/chatType';

export default async function request<T>(
  method: string,
  uri: string,
  data: object = {},
  headers: object = {},
  auth: boolean = true,
  nameState: keyof RootState,
  initStateAction: any,
  makeRequest: boolean = true
): Promise<T> {
  const state: T | null = store.getState()[nameState] as T;

  if (['POST', 'PUT', 'DELETE'].includes(method)) {
    makeRequest = true;
  }
  if (['GET', 'DELETE'].includes(method)) {
    uri = serializeUrl(uri, data);
  }

  if (auth) {
    // const access_token = localStorage.getItem('access_token');
    // headers.Authorization = 'Bearer ' + access_token;
  }

  try {
    if (state === null || makeRequest) {
      const response = await axios.request({
        method: method,
        url: uri,
        data: data,
        headers: headers,
      });
      store.dispatch(initStateAction(response.data.data))
      console.log("API")
      return response.data.data
    } else {
      console.log("ESTADO")
      return state
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const serializeUrl = function(uri: string, params: any) {
  const str = [];

  for (const p in params) {
    if (params.hasOwnProperty(p) && params[p] !== null) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
    }
  }

  if (str.length) {
    return uri + '?' + str.join('&');
  } else {
    return uri;
  }
}