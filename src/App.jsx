import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>

<Routes>
  <Route index element={<Home />} />

  {/* <Route element={<AuthLayout />}> */}
   
  <Route path="login" element={<SignIn />} />
  <Route path="signup" element={<SignUp />} />
  {/* </Route> */}

  
</Routes>
      
    </>
  )
}

export default App
