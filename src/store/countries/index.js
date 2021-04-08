import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addCountries = createAction('ADD_COUNTRIES')

export default createReducer(INITIAL_STATE, {
  [addCountries.type]: (state, action) => [...action.payload],
})
