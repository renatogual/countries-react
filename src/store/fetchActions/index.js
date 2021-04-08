import api from '../../services/api'
import { addCountries } from '../countries'

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
