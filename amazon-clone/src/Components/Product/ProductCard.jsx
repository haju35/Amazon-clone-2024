import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom';
function ProductCard({product}) {
  const {image,title,id,rating,price} = product;
  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
           <img src={image} alt=''/>
      </Link>
      <div className="div">
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small className="small">{rating?.count || 'No reviews'}</small>
        </div>
        
        <div className="div">
         <CurrencyFormat amount={price}/>
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
