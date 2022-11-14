import React from 'react';
import './Referred.css';
import { RiArrowRightSLine } from 'react-icons/ri';

const Referred = () => {
    return (
        <div className='container'>
            <p className='UIUX'>UI/UX <RiArrowRightSLine/> Refer & Earn <RiArrowRightSLine/> Friends Referred</p>
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