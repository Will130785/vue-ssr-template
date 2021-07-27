import apiClient from './api'

const testCall = () => {
  return apiClient().get('/')
}

export default {
  testCall
}
