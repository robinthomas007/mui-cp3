import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { useColor } from './Context/ColorModeContext';


export default function ThemeProviderComp(props) {

  const colorModeContext = useColor()
  const mode = colorModeContext.colorMode

  const LightTheme = {
    mode: 'light',
    primary: {
      main: '#F57F17',
      contrastText: "#fff",
    },
    secondary: {
      main: '#00ccff',
      contrastText: "#fff"
    },
    iconColour: {
      main: '#333333',
    },
    background: {
      default: '#ffffff',
      header: '#212121',
      filedBg: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    button: {
      primary: '#F5F5F5',
      '&:hover': {
        backgroundColor: '#333333'
      }
    },
    buttonColor: {
      primary: '#000000',
      secondary: '#ffffff'
    },
  }


  const DarkTheme = {
    mode: 'dark',
    primary: {
      main: '#F57F17',
      contrastText: "#fff"
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#111111',
      header: '#212121',
      filedBg: '#333333',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
    buttonColor: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
    iconColour: {
      main: '#ffffff',
      contrastText: "#fff"
    },
    button: {
      primary: '#333333',
      '&:hover': {
        backgroundColor: '#333333'
      }
    }
  }

  const getDesignTokens = (mode) => ({
    palette: mode === 'light' ? LightTheme : DarkTheme
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]); // createTheme(getDesignTokens(mode)) //

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}