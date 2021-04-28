import 'axios';
import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/order` || 'http://localhost:8080/order';

const methods = {
  get: id => axios.get(`${baseUrl}/${id}`),
  getAll: () => axios.get(baseUrl),
  create: order => axios.post(baseUrl, order),
};

export default methods;
