import axios from 'axios';
const API = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/v1`, 
});

export default API;
