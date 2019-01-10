import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://orgnova.concore.io',
    timeout: 5000,
    headers: {
      'Accept': 'application/json'
    }
  })
}