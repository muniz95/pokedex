import Axios from 'axios';

import { env } from '@/config/env';

const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.response.use((response) => {
  return response.data;
});

export { api };
