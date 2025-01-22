import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
        </Box>
        <Footer />
    </Box>
  )
}

export default Layout