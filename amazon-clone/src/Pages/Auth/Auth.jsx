import React,{useState,useContext} from 'react'
import classes from './signUp.module.css'
import { Link } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import {Type} from '../../Utility/action.type'


function Auth() {    
  const[email, setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState("");
  const[{user},dispatch] = useContext(DataContext)
  const authHandler = async (e) =>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name ==="signIn") {
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        console.log(user);
        dispatch({
          type : Type.SET_USER,
          user:userInfo.user
        })
      })
      .catch((err)=>{
        console.log(err);
      })
    }else{
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
     console.log(user);
     dispatch({
      type: Type.SET_USER,
      user: userInfo.user
    });
   })
   .catch((err)=>{
    console.log(err);
   })
    }
  }

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
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email'/>
      </div>
      <div>
      <label htmlFor='Password'>Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='Password' id='Password'/>
      </div>
      <button name="signIn" onClick={authHandler} className={classes.SignIn_btn}>Sign In</button>
     </form>

     <p>By continuing, you agree to Amazon's Fake Conditions of Use and Privacy Notice.</p>
     <button onClick={authHandler} name="signUp" className={classes.login_register}>Create your Amazon Account</button>

     </div>
    </section>            
      )         
}     

export default Auth;
