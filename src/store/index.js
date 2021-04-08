import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './countries'

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
})
