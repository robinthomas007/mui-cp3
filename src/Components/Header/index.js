import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid';
import logo from './../../Static/Images/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Stack, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useColor } from '../../Context/ColorModeContext';
import { useAuth } from './../../Context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const theme = useTheme();
  const colorModeContext = useColor()
  const auth = useAuth();
  const navigate = useNavigate()

  const [name, setName] = React.useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
    localStorage.removeItem('user')
  }

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
          borderRadius: 1,
          p: 3,
        }}
      >
        <Grid container>
          <Grid item xs={7}>
            <img src={logo} alt="Logo" />
          </Grid>
          <Grid item xs={1}>
            <IconButton sx={{ ml: 1 }} onClick={colorModeContext.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <Stack direction="row" spacing={1}>
              <AccountCircleIcon />
              <Typography variant="subtitle1" sx={{ fontWeight: '400' }} >
                Welcome, {auth.user}
              </Typography>
            </Stack>

          </Grid>
          <Grid item xs={1}>
            <Button onClick={handleLogout} variant="text" sx={{ color: 'buttonColor.secondary', textTransform: 'none', fontWeight: 'bold' }}>Logout</Button>
          </Grid>
        </Grid>
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
              value={name}
            />
            <Button size="small" variant="contained" color='primary'
              sx={{ borderRadius: '1px', m: '1px', textTransform: 'none', fontWeight: 'bold' }}>
              Search</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}