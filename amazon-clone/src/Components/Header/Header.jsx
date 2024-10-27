import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from './header.module.css';
import LowerHeader from "./LowerHeader";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
              <Link to="/">
              <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />

              </Link>
              <span>
              <SlLocationPin />
              </span>
                <div className={classes.delivery}>
              
              <div >
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
           <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          <div className={classes.order_container}>
            <div  className={classes.language}>
            <a href="#/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRDlTt0IeFQReH-xeVsEytDGNdQ6_87yk4A&s" alt="" />
              <select className="select">
                <option value="" className="option">EN</option>
              </select>
              </a>
            </div>
            <Link to='/Sign In'>
            <div>
              <p className="p">Sign In</p>
              <span className="span">Account & Lists</span>
              </div>
            </Link>

            <Link to="/orders">
              <p>returns</p>
              <span>&Orders</span>
            </Link>
            
            <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
            </Link>

          </div>
          </div>
           </section>
           <LowerHeader/>
    </>
  )
}
<BsSearch />


export default Header
