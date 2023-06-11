import axios from "axios";

const clientAxios = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/'
})

export default clientAxios;