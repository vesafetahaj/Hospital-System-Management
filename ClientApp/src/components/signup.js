import React, { Component, Fragment } from 'react';
import './signup.css';
import FooterPage from './footer';
export class SignUp extends Component {
    handleSubmitSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const confirmPassword = event.target.confirmpassword.value;

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var pswRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        var nameRegex = /^[A-Z][a-z]{2,10}/;
        var surnameRegex = /^[A-Z][a-z]{3,15}/;

        var emailMsg = document.getElementById("emailMessage");
        var passwordMsg = document.getElementById("passwordMessage");
        var nameMsg = document.getElementById("nameMessage");
        var surnameMsg = document.getElementById("surnameMessage");
        var confirmMsg = document.getElementById("confirmpasswordMessage");

        
        if (email === "") {
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
        if (password === "") {
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
        if (name === "") {
            nameMsg.innerText = "*Please fill out this field!";
            event.preventDefault();
        } else {
            if (nameRegex.test(name)) {
                nameMsg.innerText = "";
            } else {
                nameMsg.innerText = "*Name is not valid!";
                event.preventDefault();
            }
        }
        if (surname === "") {
            surnameMsg.innerText = "*Please fill out this field!";
            event.preventDefault();
        } else {
            if (surnameRegex.test(surname)) {
                surnameMsg.innerText = "";
            } else {
                surnameMsg.innerText = "*Surname is not valid!";
                event.preventDefault();
            }
        }
        if (confirmPassword === "") {
            confirmMsg.innerText = "*Please fill out this field!";
            event.preventDefault();
        } else {
            if (confirmPassword.match(password)) {
                confirmMsg.innerText = "";
            } else {
                confirmMsg.innerText = "*The password confirmation is invalid!";
                event.preventDefault();
            }
        }
        // Submit the form
        console.log('Submitting form');
    }

    render() {
        return (
            <Fragment>
                <div className='background-img-signup'>
        <div className='signup-wrapper'>
            <form action='' className='signup-form' onSubmit={this.handleSubmitSignUp}>
                <img src='user.png' alt='' />
                <h2 className='h2-signup'>SignUp</h2>
                <input type="text" className="field-signup" placeholder="Name" id="name" />
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="name" id="nameMessage"></label> <br />

                <input type="text" className="field-signup" placeholder="Surname" id="surname" />
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="surname" id="surnameMessage"></label> <br />

                <input type="text" className="field-signup" placeholder="Email" id="email" />
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="email" id="emailMessage"></label> <br />


                <input type="password" className="field-signup" placeholder="Password" id="password" />
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="password" id="passwordMessage"></label> <br />


                <input type="password" className="field-signup" placeholder="Confirm Password" id="confirmpassword" />
                <label style={{ color: 'red', fontSize: '12px', paddingLeft: '10px' }} htmlFor="confirmpassword" id="confirmpasswordMessage"></label> <br />


                <input type='submit' value="SignUp" className='submit-btn-signup'/>
                <div className="login-link">
                 Already a member..? <a href ="/login">LogIn</a>
                </div>
            </form>
            </div>
                </div>
                <FooterPage />
            </Fragment>
           );
        }
}

export default SignUp;