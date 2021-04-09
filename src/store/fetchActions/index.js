import api from '../../services/api'
import { addCountries } from '../countries'

export const getAllCountries = () => {
  return dispatch => {
    api
      .get('all')
      .then(res => {
        dispatch(addCountries(res.data.slice(0, 20)))
      })
      .catch(console.log)
  }
}
