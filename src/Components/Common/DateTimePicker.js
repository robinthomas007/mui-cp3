import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const renderDateTimePicker = ({
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
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        {...input}
      />
    </LocalizationProvider>
  </Box>
)

export default renderDateTimePicker

