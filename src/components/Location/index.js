import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1652705977262!2d73.7697889148934!3d18.5665862873822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beca9aecbb73%3A0xee557c041316bf67!2sXoriant%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1589727296115!5m2!1sen!2sin"
             width="100%"
              height="500px"
              allowFullScreen=""
               aria-hidden="false"
                tabIndex="0">

                </iframe>
                <div className="location_tag">
                    <div>Location
                        </div>
                </div>
        </div>
    );
};

export default Location;