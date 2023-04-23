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
                </div>
            </Fragment>
          
        );
    }
}
export default AboutUs;