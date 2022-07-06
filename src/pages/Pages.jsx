import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'

function Pages() {
  const location = useLocation()
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipes/:id' element={<Recipe />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default Pages
