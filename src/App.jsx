import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import GolfList from './pages/GolfList/GolfList'
import Navbar from './components/Navbar/Navbar'


function App() {
  

  return (
    <>

      <Navbar />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nos-Golfs' element={<GolfList />} />
          <Route path='/Nos-Offres' element={<Home />} />
          <Route path='/Enseignements' element={<Home />} />
          <Route path='/Actualites' element={<Home />} />
          <Route path='/Mon-Espace' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
