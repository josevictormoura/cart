import { Axios } from 'axios';

const api = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
});
