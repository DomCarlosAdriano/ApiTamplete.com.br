import { BrowserRouter, Route, Routes } from 'react-router-dom'


function AppRoutes() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route  path="/" element={<PageBase />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes