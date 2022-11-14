import React from 'react';
import Enrolled from '../Component/Enrolled/Enrolled';
import Footer from '../Component/Footer/Footer';
import Referred from '../Component/Referred/Referred';

const FriendsReferred = () => {
    return (
        <div>
            <Referred />
            <Enrolled />
            <Footer />
        </div>
    );
};

export default FriendsReferred;