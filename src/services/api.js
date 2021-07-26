import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
