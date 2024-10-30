import React from 'react'
import classes from './signUp.module.css'
import { Link } from 'react-router-dom'

function Auth() {          
  return (        
   <section className={classes.login}>
<Link to="/">      
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png' alt='' />
</Link>
<div className={classes.login_container}>  
  <h1>Sign In</h1>
     <form>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'/>
      </div>
      <div>
      <label htmlFor='Password'>Password</label>
      <input type='Password' id='Password'/>
      </div>
      <button className={classes.SignIn_btn}>Sign In</button>
     </form>

     <p>By continuing, you agree to Amazon's Fake Conditions of Use and Privacy Notice.</p>
     <button className={classes.login_register}>Create your Amazon Account</button>

     </div>
    </section>            
      )         
}     

export default Auth;
