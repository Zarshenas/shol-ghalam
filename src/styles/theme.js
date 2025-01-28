// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light', 
    primary: {
      main: '#444BFF', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff', 
    },
    text: {
      primary: '#212121', 
      secondary: '#757575', 
      heading:'#444BFF'
    },
    error: {
      main: '#d32f2f', 
    },
    warning: {
      main: '#ffa000', 
    },
    success: {
      main: '#388e3c', 
    },
    info: {
      main: '#1976d2', 
    },
  },
  typography: {
    fontFamily: [
      'Yekan'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 900,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 900,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 900,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 900,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 900,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 900,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 100,
    },
    button: {
      textTransform: 'none', 
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8, 
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px', 
          backgroundColor:"#444BFF",
          color:"white"
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
        },
      },
    },
  },
});

export default theme;