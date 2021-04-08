import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {}

export const addCountry = createAction('ADD_COUNTRIES')

export default createReducer(INITIAL_STATE, {
  [addCountry.type]: (state, action) => action.payload,
})
