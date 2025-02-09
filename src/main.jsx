import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme.js'
import './styles/fonts.css'; 
import { BrowserRouter } from "react-router";

import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const strictTheme = unstable_createMuiStrictModeTheme(theme);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={strictTheme}>
          <App />
        </ThemeProvider>
      </Provider> 
    </BrowserRouter>
  </StrictMode>,
)
