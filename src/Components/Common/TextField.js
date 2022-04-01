import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const renderTextField = ({
  label,
  input,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      p: '5px',
      justifyContent: 'space-between'
    }}
  >
    <label>{label}</label>
    <TextField
      placeholder={placeholder}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      size='small'
      {...custom}
      variant='filled'
    />
  </Box>
)

export default renderTextField

