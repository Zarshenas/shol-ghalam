import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function Layout() {
  return (
    <Container>
        <Header/>
            <Outlet />
        <Footer/>
    </Container>
  )
}

export default Layout