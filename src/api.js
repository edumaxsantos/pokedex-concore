import axios from 'axios'

export default () => {
  return axios.create({
    basURL: 'https://orgnova.concore.io/pokemon/',
    timeout: 1000,
    headers: {
      'Accept': 'application/json'
    }
  })
}