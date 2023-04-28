import React, { Component, Fragment } from 'react';
import './signup.css';

export class SignUp extends Component {
    render() {
        return (
            <Fragment>
                <div className='background-img-signup'>
        <div className='signup-wrapper'>
            <form action='' className='signup-form'>
                <img src='user.png' alt='' />
                <h2 className='h2-signup'>SignUp</h2>
                <input type="text" className="field-signup" placeholder="Name" id="name" />

                <input type="text" className="field-signup" placeholder="Surname" id="surname" />

                <input type="email" className="field-signup" placeholder="Email" id="email" />

                <input type="password" className="field-signup" placeholder="Password" id="password" />

                <input type="password" className="field-signup" placeholder="Confirm Password" id="password" />

                <input type='submit' value="SignUp" className='submit-btn-signup'/>
                <div className="login-link">
                 Already a member..? <a href ="#">LogIn</a>
                </div>
            </form>
            </div>
        </div>
            </Fragment>
           );
        }
}

export default SignUp;