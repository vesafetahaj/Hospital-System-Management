import React, { Component, Fragment } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
         <Fragment>
          <div className='home-container'>
              <video src="videoHome.mp4" autoPlay loop muted />
              <h1><span>Sun<span className='rise'>Rise</span>Care Hospital</span></h1>
              <p><strong>Welcome to our Hospital, where your health is our priority !</strong></p>
              
              </div>
              <div className='body-card'>
              <div className='container'>
                  <div className='card'>
                      <div className='imgbox'>
                          <img src="laboratoret.jpg"/>
                      </div>
                      <div className='content'>
                          <h2>Laboratory</h2>
                              <p>Laboratori yne i paisur me te gjitha paisjet per analiza biokimike
                                  qe ju mundeson t'i kryeni te gjitha analizat biokimike ne nje vend.</p>
                      </div>
                  </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="rezonance.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Resonance</h2>
                              <p>lorem ipsum blla blla  blla</p>
                          </div>
                      </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="dentistry.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Dental Care</h2>
                              <p>lorem ipsum blla blla  blla</p>
                          </div>
                      </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="oftamologu.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Ophthalmology</h2>
                              <p>lorem ipsum blla blla  blla</p>
                          </div>
                      </div>
                  </div>
              </div>
         
        </Fragment>
      );
  }

}

