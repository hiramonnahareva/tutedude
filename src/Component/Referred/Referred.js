import React from 'react';
import './Referred.css';
import { RiArrowRightSLine } from 'react-icons/ri'; 
import { BiLeftArrowAlt } from 'react-icons/bi'; 
import { Link } from 'react-router-dom';

const Referred = () => {
    return (
        <div className='container'>
            <p className='UIUX'>UI/UX <RiArrowRightSLine/> <Link className='link' to="/Refer&Earn">Refer & Earn</Link> <RiArrowRightSLine/> <Link className='link' to="/friendsReferred">Friends Referred</Link></p>
            <div className='goBack'> <BiLeftArrowAlt className='leftArrow'/>go back</div>
        <div className='refrred-container'>
        <div className='Left-tham'>
            <p className='referral'>Your Referral Code</p>
            <span className='referral-btn'>E D C H 5 4 </span>
        </div>
            <div className='right-tham'>
                <p className='Balance'>Wallet Balance</p>
                <p className='price'>₹ 500</p>
                
            </div>
        </div>
        </div>

    );
};

export default Referred;