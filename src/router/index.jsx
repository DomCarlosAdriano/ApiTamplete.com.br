import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import PageBase from '../pages/PageBase'
import Home from '../pages/Home'


function AppRoutes() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route  path="/" element={<PageBase />}>
             <Route index element={<LandingPage />}/>
             <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes