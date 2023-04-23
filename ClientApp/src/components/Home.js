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
                              <p>Our laboratory equipped with all equipment for biochemical analysis which enables you to perform all biochemical analyzes needed in one place.</p>
                      </div>
                  </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="rezonance.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Resonance</h2>
                              <p>Full Body Health Checkup Using Quantum Resonance Magnetic Body Health Analyzer Machine to analyze your entire body</p>
                          </div>
                      </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="dentistry.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Dental Care</h2>
                              <p>Dental Care of SunRiseCare Hospital is your home for affordable dentistry and exceptional service in Prishtine, Kosove.</p>
                          </div>
                      </div>
                      <div className='card'>
                          <div className='imgbox'>
                              <img src="oftamologu.jpg" />
                          </div>
                          <div className='content'>
                              <h2>Ophthamology</h2>
                              <p>The world's best association of eye physicians and surgeons, we advocate for patients and the public and set standards for ophthalmic education.</p>
                          </div>
                      </div>
                  </div>
              </div>
         
        </Fragment>
      );
  }

}

