import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


export default function ToggleColorMode(props) {

  const mode = props.mode

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light' && {
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
        }
      }),
      ...(mode === 'dark' && {
        background: {
          default: '#111111',
          header: '#212121',
          filedBg: '#333333',
        },
        text: {
          primary: '#ffffff',
          secondary: '#ffffff'
        },
        primary: {
          main: '#F57F17',
          contrastText: "#fff"
        },
        secondary: {
          main: '#ffffff',
        },
        iconColour: {
          main: '#ffffff',
          contrastText: "#fff"
        },
        button: {
          primary: '#333333',
        }
      }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}