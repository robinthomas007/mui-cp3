import * as React from 'react';
import ThemeProviderComp from './ThemeProvider'
import Dashboard from './Dashboard'
import { ColorModeContext } from './ColorModeContext'
import DataGrid from './DataGrid'
// const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function ToggleColorMode() {

  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProviderComp mode={mode}>
        <Dashboard />
        <DataGrid />
      </ThemeProviderComp>
    </ColorModeContext.Provider>
  );
}
