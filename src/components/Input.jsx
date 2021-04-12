import React from 'react'

import { TextField } from '@material-ui/core/'

function Input({ label, disabled, value, onChange }) {
  return (
    <TextField
      label={label}
      margin="normal"
      fullWidth
      disabled={disabled}
      variant="outlined"
      color="primary"
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
