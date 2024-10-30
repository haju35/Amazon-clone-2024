import React from 'react'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/SignIn' element={<Auth />}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/category/:categoryName' element={<Results/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </Router>
  )
}

export default Routing
