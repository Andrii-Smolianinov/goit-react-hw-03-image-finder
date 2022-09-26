import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30113842-e56eb4bc3062add658b965540';
const LIMIT = 12
const instance = axios.create({
  baseURL: `${BASE_URL}?key=${API_KEY}&image_type=photo`,
  params: {
    per_page: LIMIT,
  },
});

export const getPosts = async (page = 1) => {
  const { data } = await instance.get('&', {
    params: {
      page,
    },
  });
  return data;
};

export const searchPosts = async (q, page) => {
  const { data } = await instance.get('&', {
    params: {
      page,
      q,
    },
  });
  return data;
};
