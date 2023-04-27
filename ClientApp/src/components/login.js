import React, { Component, Fragment } from 'react';
import './login.css';

export class login extends Component {
    render() {
        return (
            <Fragment>
                <div className='loginform'>

                    <div className='loginbody'>
                        <div className='signin-signup'>
                            <form action='' className='sign-in-form'>
                                <h2 className="h2title">Sign in</h2>
                                <div className='input-field'>
                                    
                                    <input type='text' placeholder='Username'></input>
                                </div>
                                <div className='input-field'>
                                  
                                    <input type='password' placeholder='Password'></input>
                                </div>
                                <input type="submit" value="Login" className="buttonlogin" />
                                <p className='social-text'>Or Sign in with social paltforms</p>
                                <div className="social-media-login">
                                    <a href="https://www.google.com/" className="social-icons-login">
                                      
                                    </a>
                                    <a href="https://www.google.com/" className="social-icons-login">
                                       
                                    </a>
                                    <a href="https://www.google.com/" className="social-icons-login">
                                       
                                    </a>
                                    <a href="https://www.google.com/" className="social-icons-login">
                                       
                                    </a>
                                </div>
                            </form>

                            { /*Qitu ja nis kodi per sign up*/ }
                            <form action='' className='sign-up-form'>
                                <h2 className="h2title">Sign up</h2>
                                <div className='input-field'>
                                    <i className="fas fa-user"></i>
                                    <input type='text' placeholder='Username'></input>
                                </div>
                                <div className='input-field'>
                                    <i className="fas fa-envelope"></i>
                                    <input type='text' placeholder='Email'></input>
                                </div>
                                <div className='input-field'>
                                    <i className="fas fa-lock"></i>
                                    <input type='password' placeholder='Password'></input>
                                </div>
                                <input type="submit" value="Sign Up" className="buttonlogin" />
                                <p className='social-text'>Or Sign up with social paltforms</p>
                                <div className="social-media-login">
                                    <a href="#" className="social-icons">
                                        
                                    </a>
                                    <a href="#" className="social-icons">
                                        
                                    </a>
                                    <a href="#" className="social-icons">
                                        
                                    </a>
                                    <a href="#" className="social-icons">
                                        
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='panels-container-login'>
                        <div className="panel left-panel">
                            <div className="content-login">
                                <h3 className="h3-login">New here?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className="btn transparent" id="sign-up-button">Sign up</button>
                            </div>

                            <img src="injection.png" className="image-login" alt="">
                        </div>

                        <div className="panel right-panel">
                            <div className="content-login">
                                <h3 className="h3-login">One of us?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className="btn transparent" id="sign-in-button">Sign in</button>
                            </div>

                            <img src="hospital.png" className="image-login" alt="">
                        </div>
                    </div>
                </div>
            </Fragment>
                );
            }
}

