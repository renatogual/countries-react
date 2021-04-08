import api from '../../services/api'
import { addCountries } from '../countries'
import { addCountry } from '../country'

export const getAllCountries = () => {
  return dispatch => {
    api
      .get('all')
      .then(res => {
        dispatch(addCountries(res.data))
      })
      .catch(console.log)
  }
}

export const getCountry = name => {
  return dispatch => {
    api
      .get(`/name/${name}?fullText=true`)
      .then(res => {
        dispatch(addCountry(res.data))
      })
      .catch(console.log)
  }
}
