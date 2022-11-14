import React from 'react';
import Categories from '../../Categories/Categories';
import './Details.css';

const Details = ({information}) => {
    return (
        <div>
           <div className={`${information.classname}`}>
                <div id={`${information.id}`}></div>
                <div className="infoContainer">
                <div className='top-part'>
                    <div>
                    <span className='infoTitle'>{information.title}</span>
                    </div>
                    <div>
                        <span className='info'>{information.date}</span>
                        </div>
                </div>
                <div className="part-2">
                    <span>{information.info}</span>
                </div>
                <Categories category={information.categories}></Categories>
                </div>
                <div className="bottomPart">
                    <p>{information.Referral} <span className='amount'>{information.amount}</span></p>
                </div>
                </div>
        </div>
    );
};

export default Details;