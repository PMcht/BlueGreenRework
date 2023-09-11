import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import GolfList from './pages/GolfList/GolfList'
import Navbar from './components/Navbar/Navbar'
import Offres from './pages/Offres/Offres'
import Footer from './components/Footer/Footer'
import Actus from './pages/Actus/Actus'
import Proshop from './pages/Proshop/Proshop'
import HomePage from './components/Account/HomePage/HomePage'


function App() {
  

  return (
    <>

      <Navbar />

      <Routes>
          
          <Route path='/BlueGreenRework' element={<Home />} />
          <Route path='/BlueGreenRework/Nos-Golfs' element={<GolfList />} />
          <Route path='/BlueGreenRework/Nos-Offres' element={<Offres />} />
          <Route path='/BlueGreenRework/Proshop' element={<Proshop />} />
          <Route path='/BlueGreenRework/Actualites' element={<Actus />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
