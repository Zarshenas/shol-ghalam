import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme.js'
import './styles/fonts.css'; 

import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';

const strictTheme = unstable_createMuiStrictModeTheme(theme);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={strictTheme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
