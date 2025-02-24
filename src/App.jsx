import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './routes/protectedRoutes'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App
