import React from 'react';
import './Footer.css';

const Footer = ({title1, title2}) => {
    return (
        <div className='container'>
            <p className='footerTitle'>{title1}</p>
            <p className='footerTitle2'>{title2}</p>
        </div>
    );
};

export default Footer;
