import React from 'react';
import Details from './Details/Details';
import './Enrolled.css'

const Enrolled = () => {
    const details = [
        {
           title: "Dhiraj Saxsena",
           date: "14 Sep, 2022",
           info: "Courses Enrolled(6)",
           categories: {
            uiux:"UI/UX",
            Photoshop: "Photoshop",
            illustator: "Illustator",
            pyton: "Python",
            marn: "MARN",
            java: "Java"
        },
           classname:"details",
           Referral: "Referral Amount",
           amount: "₹185"
        },
        {
           title: "Subhash Mishra",
           date: "15 Sep, 2022",
           info: "Courses Enrolled(23)",
           categories: {
            uiux:"UI/UX",
            Photoshop: "Photoshop",
            illustator: "Illustator",
            pyton: "Python",
            marn: "MARN",
            java: "Java",
            c: "c++"
        },
           classname:"details",
           Referral: "Referral Amount",
           amount: "₹485"
        },
        {
           title: "Prafull Kumar",
           info: "Courses Enrolled(23)",
           categories: {
            uiux:"UI/UX",
            Photoshop: "Photoshop",
            illustator: "Illustator",
            pyton: "Python",
            marn: "MARN",
            java: "Java",
        },
           classname:"details detailsOFKumar",
           id: "details",
           Referral: "Referral Amount",
           amount: "₹485"
        }
    ]
    return (
        <div className='container'>
            <p className='EnrolledTitle'>Friends who enrolled <span>(3)</span></p>
            <div className="detailContain">
            {
                details.map(information => <Details information={information}></Details>)
            }
            </div>
        </div>
    );
};

export default Enrolled;