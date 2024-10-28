import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';

function Cart() {
  const[{basket,user},dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
  },0)
  return (
    <LayOut>
    <section className="section">
      <div>
        <h2 className="h2">Hello</h2>
        <h3 className="h3">Your shopping basket</h3>
        <hr/>
        {
          basket?.length === 0?(<p>Opps! No item in your cart</p>):(
            basket?.map((item,i)=>{
              return<ProductCard
              key={i}
              product={item}
              renderDesc={true}
              flex={true}
              renderAdd={false}
              />
            })
          )
        }
      </div>
      
        {
          basket?.length!==0&&(
      <div>
          <div>
            <p>
              Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total}l/>
              </div>
              <span>
                <input type='checkbox'/>
                <small>This order contains a gift</small>
              </span>
              <Link to='/payments'>Continue to checkout</Link>
      </div>
      )
    }
    </section>
    </LayOut>
  )
}

export default Cart
