import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'

function Layout() {
  const location = useLocation();
  
  // routes where Header and Footer should be hidden
  const noHeaderFooerRoutes = ["/signin", "/signup", "/404"];
  
  const isHeaderFooerHidden = noHeaderFooerRoutes.includes(location.pathname)
  console.log(location)
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {!isHeaderFooerHidden && <Header />}
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
        </Box>
        {!isHeaderFooerHidden && <Footer />}
    </Box>
  )
}

export default Layout