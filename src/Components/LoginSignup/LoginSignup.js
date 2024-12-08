import React from 'react'
import './LoginSignup.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <PersonIcon/>
                <input type="text" />
            </div>
            <div className='input'>
                <EmailIcon/>
                <input type="email" />
            </div>
            <div className='input'>
                <LockIcon/>
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="login">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup