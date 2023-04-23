import React, { Component, Fragment } from 'react';
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
                    <div className='container-aboutus'>
                        <div className='vision' style={{ height: '140px' }}>
                            <h1>VISION</h1>
                        </div>
                        <div className='overlay'>
                            <h2>Te jete lider i padiskutueshem ne ofrimin e sherbimeve nga me imediatet deri ne ato me inovative e komplekse.</h2>
                        </div>
                        <div className='vision' style={{ backgroundColor: 'yellowgreen' }}>
                            <h1 style={{ paddingLeft:'930px'} }>MISSION</h1>
                        </div>
                        <div className='overlay' style={{ marginTop: '100px', height: '130px' }}>
                            <h2 style={{ width:'50px;' }}>Ofrimi i nje sherbimi gjitheperfshires ne nje mjedis ku inovacioni dhe edukimi i vazhdueshem jane pjese perberese e kujdesit</h2>
                        </div>
                        <div className='vision'>
                            <h1>VALUES</h1>
                        </div>
                        <div className='overlay' style={{ marginTop: '230px',height:'140px' } } >
                            <h2>Vlerat e tona kryesore perfshijne sherbimin, partneritetin, kujdesin dhe integritetin.</h2>
                        </div>
                    </div>
                </div>
            </Fragment>
          
        );
    }
}
export default AboutUs;