import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
})
