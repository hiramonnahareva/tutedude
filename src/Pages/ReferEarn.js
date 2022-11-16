import React from 'react';
import Title from '../Component/EarnPageCom/Title/Title';
import TopPart from '../Component/EarnPageCom/Title/TopPart/TopPart';
import WorkCategory from '../Component/EarnPageCom/WordCategory/WorkCategory';
import Footer from '../Component/Footer/Footer';

const ReferEarn = () => {
    return (
        <div>
          <Title/>
          <TopPart/>
          <WorkCategory/>
          <Footer title1={'Friends Who Enrolled'} title2={'Terms & Conditions'} />
        </div>
    );
};

export default ReferEarn;