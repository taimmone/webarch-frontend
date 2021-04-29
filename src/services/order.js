import 'axios';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/order';

const methods = {
  get: id => axios.get(`${baseUrl}/${id}`),
  getAll: () => axios.get(baseUrl),
  create: order => axios.post(baseUrl, order),
};

export default methods;
