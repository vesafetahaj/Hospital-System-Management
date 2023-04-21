import React, { Component } from 'react';
import './aboutus.css';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>We are a hospital that provides high quality healthcare services to our patients.</p>
            </div>
        );
    }
}
