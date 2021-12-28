
import './Login.css'
import back from '../Assets/background.svg'
import { Link } from 'react-router-dom'
import React from 'react'

function Login() {
    return (
       
            
        <div className="signin">
        
        <div className="signin-container">
            <div className="signin-header">
               <h3 className='acc'>Welcome Back</h3>

                <p>Please Sign In to Continue</p>

            </div>
            <div className="signin-form">
                <form className='group'>
                    <div className="form-group">
                        <input type="email" className="control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="control" id="password" placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className='here'><Link to='/Signup'>New User Signup Here</Link></div>
           
        </div>
       <div className='comp'> <img  className='pic' src={back} alt='' /></div>
    </div >
    
 
    )
}

export default Login

