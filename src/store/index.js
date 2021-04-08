import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './countries'
import countryReducer from './country'

export default configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
})
