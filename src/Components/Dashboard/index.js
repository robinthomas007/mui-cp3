import ProjectSearchDataGrid from './ProjectSearchDataGrid'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { reducer, initialState } from './searchReducer'
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';

export default function Dashboard() {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    axios.post(`https://api.dev.cp3.umgapps.com/api/TrackSearch`, { searchCriteria: state.searchCriteria }, {
    })
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      }).catch((err) => {
        console.log("error feching data", err)
      })
  }, [state.searchCriteria])

  const handleLimitChange = (val) => {
    dispatch({ type: 'CHANGE_LIMIT', payload: val })
  }
  const onSortModelChange = (data) => {
    dispatch({ type: 'SORT_CHANGE', payload: data })
  }

  const handlePageChange = (pageNumber) => {
    dispatch({ type: 'PAGE_CHANGE', payload: pageNumber })
  }

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: 'SET_SEARCH', payload: { searchTerm: searchTerm } })
  }

  const clearSearch = () => {
    setSearch('')
    setSearchTerm('')
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.header',
          color: '#ffffff',
          pb: 3,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb='20px'
        >
          <IconButton sx={{
            bgcolor: 'background.filedBg',
            borderRadius: '0',
            p: '8px',
            mr: 1
          }} variant="contained" aria-label="settings">
            <SettingsIcon color="iconColour" />
          </IconButton>
          <Box
            sx={{
              bgcolor: 'background.filedBg',
              width: 640,
              height: 40,
              display: 'flex'
            }}
          >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon color="iconColour" />
            </IconButton>
            <InputBase
              sx={{ ml: 1, borderRadius: '0', width: '100%', color: 'background.textColor', }}
              inputProps={{}}
              onChange={handleChange}
              value={search}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={clearSearch}
                  >
                    {search ? <ClearIcon /> : null}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button size="small" variant="contained" color='primary' onClick={() => setSearchTerm(search)}
              sx={{ borderRadius: '1px', textTransform: 'none', fontWeight: 'bold' }}>
              Search</Button>
          </Box>
        </Box>
      </Box>
      <ProjectSearchDataGrid
        loading={state.loading}
        tracks={state.tracks}
        limit={state.limit}
        height={state.height}
        totalPages={state.totalPages}
        totalItems={state.totalItems}
        pageNumber={state.pageNumber}
        handleLimitChange={handleLimitChange}
        onSortModelChange={onSortModelChange}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}