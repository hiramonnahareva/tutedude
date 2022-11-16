import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <div className='container'>
            <p className='UIUX'>UI/UX <RiArrowRightSLine/> <Link className='link' to="/Refer&Earn">Refer & Earn</Link></p>
        </div>
    );
};

export default Title;