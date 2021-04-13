import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  countries: [],
  country: {},
  filteredCountries: [],
  search: '',
}

export const addCountries = createAction('ADD_COUNTRIES')
export const addCountryInfo = createAction('ADD_COUNTRY_INFO')
export const searchCountry = createAction('SEARCH_COUNTRY')
export const editCountry = createAction('EDIT_COUNTRY')

export default createReducer(INITIAL_STATE, {
  [addCountries.type]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),

  [addCountryInfo.type]: (state, action) => {
    return {
      ...state,
      country: state.countries.find(country => country.name === action.payload),
    }
  },

  [searchCountry.type]: (state, action) => {
    return {
      ...state,
      search: action.payload,
      filteredCountries: state.countries.filter(country =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      ),
    }
  },

  [editCountry.type]: (state, action) => ({
    ...state,
    countries: state.countries.map(country => {
      if (country.name === action.payload.name) {
        country = {
          ...country,
          ...action.payload,
        }
      }
      return country
    }),
  }),
})
