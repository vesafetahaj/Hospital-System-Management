import React, { Component, Fragment } from 'react';
import './login.css';
import FooterPage from './footer';
import axios from "axios"; 
import { Helmet } from 'react-helmet';

export class LogIn extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var pswRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        var emailMsg = document.getElementById("emailMessage");
        var passwordMsg = document.getElementById("passwordMessage");
        if (email == "") {
            emailMsg.innerText = "*Please fill out this field!";
            event.preventDefault();
        } else {
            if (emailRegex.test(email)) {
                emailMsg.innerText = "";
            } else {
                emailMsg.innerText = "*This email is not valid!";
                event.preventDefault();
            }
        }
        if (password == "") {
            passwordMsg.innerText = "*Please fill out this field!";
            event.preventDefault();
        } else {
            if (pswRegex.test(password)) {
                passwordMsg.innerText = "";
            } else {
                passwordMsg.innerText = "*Min. 8 characters, 1 lowercase, 1 uppercase, 1 number";
                event.preventDefault();
            }
        }

        // Submit the form
        console.log('Submitting form');
        if (emailMsg.innerText === "" && passwordMsg.innerText === "") { 
            try {
                const response = await axios.post('/api/Login', {
                    Email: email,
                    Password: password
                });
                window.location.replace('/');
                
            } catch (error) {
                window.location.replace('/notification');
                // Handle login error
                }
        }
        
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Log In - SunriseCare Hospital</title>
                </Helmet>
                <div className='background-img-login'>
        <div className='login-wrapper'>
            <form action='' className='login-form' onSubmit={this.handleSubmit} method='POST'>
                <img src='user.png' alt='' />
                <h2 className='h2-login'>LogIn</h2>

                <input type="text" className="field-login" placeholder="Email" id="email" name = 'email' />
                   <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="email" id="emailMessage"></label>
                            <br />

                <input type="password" className="field-login" placeholder="Password" id="password" name = 'password'/>
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="password" id="passwordMessage"></label> <br></br>
                <input type='submit' value="LogIn" className='submit-btn-login'/>
                <div className="login-link">
                 Not a member...? <a href ="/signup">SignUp</a>
                </div>
            </form>
            </div>
                </div>
                <FooterPage />
            </Fragment>
           );
        }
}

export default LogIn;