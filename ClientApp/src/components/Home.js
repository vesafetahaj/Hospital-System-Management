import React, { Component, Fragment } from 'react';
import './Home.css';
import FooterPage from './footer';
import { Helmet } from 'react-helmet';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <Fragment >
              <Helmet>
                <title>Home - SunriseCare Hospital</title>
              </Helmet>
          <div className='home-container'>
              <video src="videoHome.mp4" autoPlay loop muted />
              <h1><span>SunRiseCare Hospital</span></h1>
              <p><strong>Welcome to our Hospital, where your health is our priority !</strong></p>
              
              </div>
              <div className='body-card'>
              <div className='container-home'>
                  <div className='card-home'>
                      <div className='imgbox'>
                          <img src="laboratoret.jpg"/>
                      </div>
                      <div className='content-home'>
                          <h2>Laboratory</h2>
                              <p>Our laboratory equipped with all equipment for biochemical analysis which enables you to perform all biochemical analyzes needed in one place.</p>
                      </div>
                  </div>
                      <div className='card-home'>
                          <div className='imgbox'>
                              <img src="rezonance.jpg" />
                          </div>
                          <div className='content-home'>
                              <h2>Resonance</h2>
                              <p>Full Body Health Checkup Using Quantum Resonance Magnetic Body Health Analyzer Machine to analyze your entire body</p>
                          </div>
                      </div>
                      <div className='card-home'>
                          <div className='imgbox'>
                              <img src="dentistryy.jpg" />
                          </div>
                          <div className='content-home'>
                              <h2>Dental Care</h2>
                              <p>Dental Care of SunRiseCare Hospital is your home for affordable dentistry and exceptional service in Prishtine, Kosove.</p>
                          </div>
                      </div>
                      <div className='card-home'>
                          <div className='imgbox'>
                              <img src="oftamologu.jpg" />
                          </div>
                          <div className='content-home'>
                              <h2>Ophthamology</h2>
                              <p>The world's best association of eye physicians and surgeons, we advocate for patients and the public and set standards for ophthalmic education.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='all-buttons'>
              <div className='container-button'>
                      <div className='button-1'><strong>Patient Registration</strong></div>
              </div>
              <div className='container-button'>
                      <div className='button-1'><strong>Choose an appointment</strong></div>
                  </div>
               <div className='container-button'>
                      <div className='button-1'><strong>Find our location</strong></div>
               </div>
                  <div className='container-button'>
                      <div className='button-1'><strong>Contact</strong></div>
                  </div>
              </div>
              <hr></hr>
              <h1>Where can you find us ?</h1>
              <br></br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.812469825241!2d21.143523503176603!3d42.65200171275375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef3f69baacb%3A0xf864a269cc75e908!2sDukagjini%20Residence!5e0!3m2!1sen!2s!4v1682282589650!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy">
              </iframe>
              <FooterPage />
        </Fragment>
      );
  }

}

