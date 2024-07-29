import {IncomingMessage} from 'http';
import {buildQueryParams} from './functions';

const STRAPI_URL_API = process.env.NEXT_PUBLIC_STRAPI_URL_API;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

interface RequestOptions {
  api?: 'strapi';
  req?: IncomingMessage;
}

export const getRequest: any = async (
  url: string,
  params?: Record<string, unknown>,
  options?: RequestOptions
) => {
  const baseUrl = STRAPI_URL_API;
  const token = STRAPI_TOKEN;

  const res = await fetch(`${baseUrl}/${url}?${buildQueryParams(params)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  // console.log("aaaa",res);

  if (res.status >= 500) {
    return {
      status: res.status,
      success: res.status >= 200 && res.status < 300,
      data: null,
    };
  }

  const response = await res.json();

  return {
    status: res.status,
    success: res.status >= 200 && res.status < 300,
    data: response,
  };
};
