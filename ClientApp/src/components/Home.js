import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;


  render() {
      return (
          <div className='home-container'>
              <video src="videoHome.mp4" autoPlay loop muted />
              <h1><span>SunRiseCare Hospital</span></h1>
              <p><strong>Welcome to our Hospital, where your health is our priority !</strong></p>
      </div>
    );
  }
}
