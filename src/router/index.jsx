import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import PageBase from '../pages/PageBase'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


function AppRoutes() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route  path="/" element={<PageBase />}>
             <Route index element={<LandingPage />}/>
             <Route path="/home" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/Register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes