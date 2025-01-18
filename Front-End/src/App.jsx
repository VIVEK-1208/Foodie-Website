import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'

const App = () => {

  const [login, setLogin] = useState(flase)

  return (
    <div>
      {login?<Login/>:<></>}
      <div className='app'>
        <Navbar setLogin={setLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App
