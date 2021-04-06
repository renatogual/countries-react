import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
})

export default api