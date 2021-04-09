/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  list: [],
  details: {},
  filteredList: [],
  search: '',
}

export const addCountries = createAction('ADD_COUNTRIES')
export const addCountryInfo = createAction('ADD_COUNTRY_INFO')
export const searchCountry = createAction('SEARCH_COUNTRY')
export const editCountry = createAction('EDIT_COUNTRY')

export default createReducer(INITIAL_STATE, {
  [addCountries.type]: (state, action) => ({ ...state, list: action.payload }),
  [addCountryInfo.type]: (state, action) => {
    const details = state.list.filter(item => item.name === action.payload)
    return {
      ...state,
      details: details[0],
    }
  },
  [searchCountry.type]: (state, action) => {
    const filteredList = state.list.filter(item =>
      item.name.toLowerCase().includes(action.payload.toLowerCase())
    )
    return {
      ...state,
      search: action.payload,
      filteredList,
    }
  },
  [editCountry.type]: (state, action) => ({
    ...state,
    list: state.list.map(country => {
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
