import React, { Component, Fragment } from 'react';
import './contact.css';

export class ContactUs extends Component {
    render() {
        return (
            <Fragment>

                <div className="container-contactus">

                    <span class="big-circle"></span>
                        
                    <div className="form">

                        <div className="contact-info">
                            <h3 className="title-contact">Let's get in touch</h3>
                            <p className="text">Should you have any questions or concerns - or
                                simply want more information about Sunrisecare Hospital,
                                please feel free to contact us.</p>
                            <p>We would love to hear from you!</p> <br />

                            <div className="info">
                                <div className="information">
                                    <img src="point.png" className="icon" alt="" />
                                    <p>Prishtine, 10000</p>
                                </div>
                                <div className="information">
                                    <img src="email.png" className="icon" alt="" />
                                    <p>sunrisecare.info@gmail.com</p>
                                </div>
                                <div className="information">
                                    <img src="phone.png" className="icon" alt="" />
                                    <p>(+383) 48-136-910</p>
                                </div>
                            </div>

                            <div className="social-media">
                                <p><b>Connect with us:</b></p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/">
                                    <img src="facebook.png" className="icon1" alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/">
                                    <img src="instagram.png" className="icon1" alt="" />
                                    </a>
                                    <a href="#">
                                    <img src="twitter.png" className="icon1" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='contact-form'>
                            <form>
                                <h2 id='contactush2'><b>Contact Us</b></h2>
                                <input type="text" className="field" placeholder="Name" id="name" />

                                <input type="email" className="field" placeholder="Email" id="email" />

                                <input type="text" className="field" placeholder="Number" id="telefoni" />

                                <textarea className="field area" placeholder="Message" id="comment"></textarea>

                                <input type="submit" value="Send" className="button" />
                                <div className="Login">
                                    You haven't been logged in yet? <a href="./LogIn.html"> Login here</a>
                                </div>

                            </form>
                        </div>

                    </div> <br/> 
                </div>
            </Fragment>

        );
    }
}
