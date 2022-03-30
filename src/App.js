import { AuthProvider } from './Context/authContext';
import { ColorModeProvider } from './Context/ColorModeContext';
import ThemeProviderComp from './ThemeProvider'
import Router from './Router'

export default function App() {
  return (
    <AuthProvider>
      <ColorModeProvider>
        <ThemeProviderComp>
          <Router></Router>
        </ThemeProviderComp>
      </ColorModeProvider>
    </AuthProvider>
  );
}
