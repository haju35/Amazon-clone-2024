import React, { useContext, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'

function Payment() {
  const[{user,basket}] = useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount+amount;
  },0);

  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount;
  },0)

  const [cardError, setCardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e)=>{
    console.log(e);
    e?.error?.message? setCardError( e?.error?.message):setCardError("")
  }
  return (
    <LayOut>
      {/*header*/}
    <div className={classes.payment_header}>
      Checkout ({totalItem}) items
    </div>
    {/*payment method*/}
    <section className={classes.payment}>
      {/*address*/}
      <div className={classes.flex}>
        <h3>Delivery Address</h3>
        <div className="div">
        <div>{user ? user.email : "Email not available"}</div>
        <div>Arbaminch</div>
        <div>Ethiopia</div>
        </div>
      </div>
      <hr/>

      {/*product*/}
      <div className={classes.flex}>
        <h3 className="h3">Review items and delivery</h3>
        <div className="div">
      {
        basket?.map((item)=><ProductCard product={item} flex={true}/>)
      }
        </div>
      </div>
      <hr/>
      {/*card form*/}
      <div className={classes.flex}>
        <h3 className="h3">payment method</h3>
        <div className={classes.payment_card_container}>
         <div className={classes.payment_details}>
          <form action="">
            {cardError && <small style={{color:"red"}}>{cardError}</small>}
           { /*card element*/}
           <CardElement onChange={handleChange}/>
           {/*price*/}
           <div className={classes.payment_price}>
           <div>
            <span style={{display:"flex", gap:"10px"}}><p>Total Order |</p> <CurrencyFormat amount={total}/>
            </span>
            <div className="div">
              <button>Pay Now</button>
            </div>
           </div>
           </div>
           
          </form>
         </div>
        </div>
      </div>
    </section>
    </LayOut>
  )
}

export default Payment
