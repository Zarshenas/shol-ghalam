import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
  {/* <Route element={<AuthLayout />}> */}
  {/* </Route> */}
    </>
  )
}

export default App
