import React from 'react';
import './Withdrowbalance.css';

const Withdrowbalance = () => {
    return (
        <div className='container'>
            <div className="Withdrowbalance">
            <div className="left">
               <div className='referralContainer'>
               <div className="referralAmount">
                <p>Referral Earning</p>
                <h4>₹ 2,500</h4>
                </div>
                <div className="referralAmount">
                <p>Total Referrals</p>
                <h4>7</h4>
                </div>
                <div className='referralAmount'>
                <p>Wallet Balance</p>
                <h4>₹ 500</h4>
                </div>
               </div>
                <div className='withdrawbtnContainer'>
                <button className='withdrawbtn'>Withdraw Balance</button>
                </div>
            </div>
            <div className="right">
                <h6 className='referralCode'>Your Referral Code</h6>
                <span className='code'>E D C H 5 4</span>
            </div>
            </div>
        </div>
    );
};

export default Withdrowbalance;