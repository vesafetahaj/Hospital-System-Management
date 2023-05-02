import React from 'react';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export const Notification = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Notification - SunriseCare Hospital</title>
            </Helmet>
                
                <style>
                    {`
            
            .div-notification{
                margin: 0 auto;
                width: 70%;
                border: 4px solid #62D1FB;
                height: 600px;
                background-color: lightblue;
              
                margin-bottom: 50px;
            }
           
            .div-notification .h4-notification{
                font-size: 20px;
                font-family: 'Roboto';
                font-weight: bold;
                margin-top: 260px;
                text-align: center
            }
            .div-notification .h5-notification{
                text-align: center;
                font-size: 14px;
                font-family: 'Roboto';
                font-weight: bold;
            }
          `}
                </style>
            
                <div className='div-notification'>

                    <h4 className='h4-notification'>I nderuar perdorues i SunriseCare Hospital, </h4> <br></br>
                    <h5 className='h5-notification'>
                        Email ose Password jane gabim apo ju nuk jeni regjistruar akoma.
                    </h5>
                    <br />
                    <br />
                    <h5 className='h5-notification'>
                        <a href="/signup">
                            Regjistrohu tani per te pasur casje ne sherbimet tona
                        </a>
                    </h5>
                    <h5 className='h5-notification'>
                        <a href="/login">Go back and try again</a>
                    </h5>
            </div>
        </Fragment>
          
    );
}

export default Notification;
