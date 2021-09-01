import axios from 'axios';
import { API } from '../config'

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    'Content-Type': 'application/form-data',
  },
});
export const axiosClient2 = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    'Content-Type': 'application/json',
  },
});