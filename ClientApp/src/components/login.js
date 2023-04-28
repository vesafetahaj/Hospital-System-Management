import React, { Component, Fragment } from 'react';
import './login.css';

export class LogIn extends Component {
    render() {
        return (
            <Fragment>
                <div className='background-img-login'>
        <div className='login-wrapper'>
            <form action='' className='login-form'>
                <img src='user.png' alt='' />
                <h2 className='h2-login'>LogIn</h2>

                <input type="email" className="field-login" placeholder="Email" id="email" />

                <input type="password" className="field-login" placeholder="Password" id="password" />

                <input type='submit' value="LogIn" className='submit-btn-login'/>
                <div className="login-link">
                 Not a member...? <a href ="/signup">SignUp</a>
                </div>
            </form>
            </div>
        </div>
            </Fragment>
           );
        }
}

export default LogIn;