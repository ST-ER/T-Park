import './App.css'
// import Header from './components/header/Header.jsx'
// import AboutUs from './pages/aboutUs/AboutUs.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Activities from './pages/activities/Activities.jsx'
import Quests from './pages/quests/Quests.jsx'
import Reservation from './pages/reservation/Reservation.jsx'
import Locations from './pages/locations/Locations.jsx'
import AdminSignIn from './pages/adminSignIn/AdminSignIn.jsx'


function App() {
  return (
    <section className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about_us' element={<AboutUs />}></Route>
          <Route path='/activities' element={<Activities />}></Route>
          <Route path='/quests' element={<Quests />}></Route>
          <Route path='/reservation' element={<Reservation />}></Route>
          <Route path='/locations' element={<Locations />}></Route>
          <Route path='/admin_login' element={<AdminSignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
