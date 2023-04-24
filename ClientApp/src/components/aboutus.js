import React, { Component, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import './aboutus.css';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    handleScroll = () => {
        const element = document.getElementById('main-content');
        element.scrollIntoView({ behavior: 'smooth' });
    };
      

    render() {
        return (
            <Fragment>
                <div className='aboutus'>
                    <video src="Possible-3x1.mp4" id='aboutusvid' autoPlay loop muted />
                    <h2>About SunRiseCare Hospital</h2>
                    <img src='white-arrow-down.gif' alt='Scroll Down' onClick={this.handleScroll} />
                </div>
                <div id = 'main-content'>
                    <div className='card-container'>
                        <div className='card-aboutus' style={{backgroundColor:'#769cbc', marginLeft:'3px',borderTopLeftRadius: '0px', borderTopRightRadius: '0px',width:'50%'}}>
                            <h2>Vision</h2><br></br>
                            <img src='vision.png'></img><br></br><br></br><br></br><br></br>
                            <h3>Të jete lider i padiskutueshem ne ofrimin e sherbimeve nga me imediatet deri ne ato me inovative e komplekse.</h3>
                        </div>
                        <div className='card-aboutus' style={{backgroundColor:'#628db2', marginLeft:'-20px',borderTopLeftRadius: '0px', borderTopRightRadius: '0px',width:'50%'}}>
                            <h2>Mission</h2><br></br>
                            <img src='mission.png'></img><br></br><br></br><br></br><br></br>
                            <h3>Ofrimi i një shërbimi gjithëpërfshirës në një mjedis ku inovacioni dhe edukimi i vazhdueshëm janë pjesë përbërëse e kujdesit; ku jemi krenar për t'u shërbyer pacientëve dhe njeri-tjetrit</h3>
                        </div>
                        <div className='card-aboutus' style={{backgroundColor:'#4f7fa9', marginLeft:'-20px',borderTopLeftRadius: '0px', borderTopRightRadius: '0px',width:'50%',marginRight:'2px'}}>
                            <h2>Values</h2><br></br>
                            <img src='value.png'></img><br></br><br></br><br></br><br></br>
                            <h3>Vlerat tona kryesore përfshijnë shërbimin, partneritetin, kujdesin dhe integritetin. Ne punojmë fort që të sigurojmë kujdes maksimal dhe të trajtojmë të gjithë pacientët më të njejtën siguri, dinjitet dhe respekt.</h3>
                        </div>
                    </div>
                    
                        <div id='doctor'>
                            <h1>Pse te na zgjidhni neve?</h1>
                            <Fade bottom>
                                <img src='doctor.png'></img>
                            </Fade>
                            <Fade right>
                                <div id='doctor-container'>
                                    <div className='doctor-card'>
                                        <img src='expertise.png'></img><br></br><br></br>
                                        <h3>Ekspertiza jone</h3>
                                    </div>
                                    <div className='doctor-card'>
                                        <img src='profit.png'></img><br></br><br></br>
                                        <h3>Kujdesi cilësor me kosto efektive</h3>
                                    </div>
                                    <div className='doctor-card'>
                                        <img src='idea.png'></img><br></br><br></br>
                                        <h3>Inovacion me ndikim</h3>
                                    </div>
                                    <div className='doctor-card'>
                                        <img src='medical.png'></img><br></br><br></br>
                                        <h3>Ju jeni prioriteti jone</h3>
                                    </div>
                        
                                </div>
                             </Fade>
                        </div>
                        <div id='gallery'>
            
                            <img src='gallery.png' id='background'></img>
                            <div id='gallery-img'>
                            <Zoom top>
                                <img src='gallery1.jpg'></img>
                                <img src='gallery2.jpg'></img>
                                <img src='gallery3.jpeg'></img>
                            </Zoom>
                            <Zoom left>
                                <img src='gallery4.jpg'></img>
                                <img src='gallery5.jpg'></img>
                                <img src='gallery6.jpg'></img>
                            </Zoom>
                            </div>
                    </div>

                    <div className='staff-container'>
                        <h1>Our Team</h1>
                        <Fade up>
                        <div className='staff-row'>
                            <div className='staff-image'>
                                <img src='staff1.jpg'></img>
                                <div className='staff-info'>
                                    <h3>Fariba Abbasi, Dr.med</h3>
                                    <h4>PhD Fellow, Department of Visceral Surgery and Transplantation</h4><br></br>
                                    <h6>Tel. +41 44 255 11 11</h6>
                                    <h6>Mail: fariba.abbassi@usz.ch</h6>
                                </div>
                            </div>
                        </div>
                        <div className='staff-row'>
                            <div className='staff-image'>
                                <img src='staff2.png'></img>
                                <div className='staff-info'>
                                    <h3>Adriano Aguzzi, Prof. Dr. med.</h3>
                                    <h4>Director, Institute of Neuropathology</h4><br></br>
                                    <h6>Tel. +41 44 255 21 07</h6>
                                    <h6>Mail: adriano.aguzzi@usz.ch</h6>
                                </div>
                            </div>
                        </div>
                        <div className='staff-row'>
                            <div className='staff-image'>
                                <img src='staff3.jpg'></img>
                                <div className='staff-info'>
                                    <h3>Meytan Akman</h3>
                                    <h4>Director, Institute of Neuropathology</h4><br></br>
                                    <h6>Tel. +41 43 254 02 06</h6>
                                    <h6>Mail: meytan.akman@usz.ch</h6>
                                </div>
                            </div>
                        </div>
                        <div className='staff-row'>
                            <div className='staff-image'>
                                <img src='staff4.jpg'></img>
                                <div className='staff-info'>
                                    <h3>Claudio Alborghetti</h3>
                                    <h4>Head Recruiting & Employer Branding</h4><br></br>
                                    <h6>Tel. +41 44 255 34 85</h6>
                                    <h6>Mail: claudio.alborghetti@usz.ch</h6>
                                </div>
                            </div>
                        </div>
                        <div className='staff-row'>
                            <div className='staff-image'>
                                <img src='staff5.png'></img>
                                <div className='staff-info'>
                                    <h3>Claudia Althaus</h3>
                                    <h5>Clinical Research Manager Onkologie, Universitäts-Kinderspital Zürich
                                        Koordinatorin Zentrum für Onkologie, Universitäts-Kinderspital Zürich, Comprehensive Cancer Center Zurich</h5><br></br>
                                    <h6>Tel. +41 44 266 32 71</h6>
                                    <h6>Mail:  claudia.althaus@kispi.uzh.ch</h6>
                                </div>
                            </div>
                            </div>
                            <div className='staff-row'>
                                <div className='staff-image'>
                                    <img src='staff8.jpg'></img>
                                    <div className='staff-info'>
                                        <h3>Raphael Butsch, Dr. med.</h3>
                                        <h5>Oberarzt, Department of Rheumatology</h5><br></br>
                                        <h6>Tel. +41 43 254 21 39</h6>
                                        <h6>Mail:  raphael.butsch@usz.ch</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='staff-row'>
                                <div className='staff-image'>
                                    <img src='staff6.jpg'></img>
                                    <div className='staff-info'>
                                        <h3>Cristina Andreotti</h3>
                                        <h5>Patient Relations Manager</h5><br></br>
                                        <h6>Tel. +41 44 255 54 54</h6>
                                        <h6>Mail:  cristina.andreotti@usz.ch</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='staff-row'>
                                <div className='staff-image'>
                                    <img src='staff7.jpg'></img>
                                    <div className='staff-info'>
                                        <h3>Angela Baer</h3>
                                        <h5>Study Nurse, Department of Vascular Surgery</h5><br></br>
                                        <h6>Tel. +41 43 253 10 94</h6>
                                        <h6>Mail:  angela.baer@usz.ch</h6>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                
                </div>
            </Fragment>
          
        );
    }
}
export default AboutUs;