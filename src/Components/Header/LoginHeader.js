import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid';
import logo from './../../Static/Images/logo.png';
import { Typography } from '@mui/material';
import { useColor } from '../../Context/ColorModeContext';

export default function Header() {
  const theme = useTheme();
  const colorModeContext = useColor()

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
          <Grid item xs={11}>
            <img src={logo} alt="Logo" />
          </Grid>
          <Grid item xs={1}>
            <IconButton sx={{ ml: 1 }} onClick={colorModeContext.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Grid>
          {/*<Grid item xs={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: '400' }} >
              Login
            </Typography>
          </Grid>*/}
        </Grid>
      </Box>
    </div>
  );
}