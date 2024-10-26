import React from 'react'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import SighIn from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'

function Routing() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/auth' element={<SighIn />}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/category/:categoryName' element={<Results/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </Router>
  )
}

export default Routing
