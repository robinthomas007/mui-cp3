import { AuthProvider } from './Context/authContext';
import { ColorModeProvider } from './Context/ColorModeContext';
import ThemeProviderComp from './ThemeProvider'
import { Provider } from 'react-redux';
import Router from './Router'
import store from './store';
import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ColorModeProvider>
          <ThemeProviderComp>
            <Router></Router>
          </ThemeProviderComp>
        </ColorModeProvider>
      </AuthProvider>
    </Provider>
  );
}
