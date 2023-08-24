import axios from 'axios';
import { RootState, store } from "../redux/store";

export default async function request<T>(
  method: string,
  uri: string,
  data: object = {},
  headers: object = {},
  auth: boolean = true,
  nameState: keyof RootState | undefined,
  initStateAction: any,
  makeRequest: boolean = true
): Promise<T> {
  let state: T | null | undefined = undefined;
  if (nameState && initStateAction) {
    state = store.getState()[nameState] as T;
  }

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
    if (state !== undefined) {
      if (state === null || makeRequest) {
        return await fetchData<T>(method, uri, data, headers, initStateAction, state);
      } else {
        console.log("Obteniendo datos del ESTADO")
        return state
      }
    } else {
      return await fetchData<T>(method, uri, data, headers, initStateAction, state);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchData<T>(
  method: string,
  uri: string,
  data: object = {},
  headers: object = {},
  initStateAction: any,
  state: T | null | undefined
) : Promise<T> {
  try {
    const response = await axios.request({
      method: method,
      url: uri,
      data: data,
      headers: headers,
    });
    if (state !== undefined) {
      store.dispatch(initStateAction(response.data))
    }
    console.log("Obteniendo datos de la API")
    return response.data
  } catch (error: any){
    throw error.response.data
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