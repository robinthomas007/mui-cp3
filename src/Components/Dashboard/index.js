import DataGrid from './DataGridComp'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [search, setSearch] = React.useState('');

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
            p: '10px',
            mr: 1
          }} variant="contained" aria-label="settings">
            <SettingsIcon color="iconColour" />
          </IconButton>
          <Box
            sx={{
              bgcolor: 'background.filedBg',
              width: 600,
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
            />
            <Button size="small" variant="contained" color='primary' onClick={() => setSearchTerm(search)}
              sx={{ borderRadius: '1px', m: '1px', textTransform: 'none', fontWeight: 'bold' }}>
              Search</Button>
          </Box>
        </Box>
      </Box>
      <DataGrid searchTerm={searchTerm} />
    </div>
  );
}