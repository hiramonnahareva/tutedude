import React from 'react';
import image from '../../../Images/Vector.png';
import image1 from '../../../Images/Vector (1).png';
import image2 from '../../../Images/₹.png';
import image3 from '../../../Images/Vector (2).png';
import image4 from '../../../Images/Vector (3).png';
// import { BsPeopleFill } from 'react-icons/bs'; 
// import { BiPurchaseTagAlt, BiRupee } from 'react-icons/bi'; 
// import { TbDiscount2, TbTransferIn } from 'react-icons/tb'; 

import Category from './Cagetory/Category';

const WorkCategory = () => {
    const workCategories = [
        {
            _id: 1,
            icon: <img src={image}  alt="" />,
            title: "Invite your Friends",
            description: "Share the link tutedude.com with your friends",

        },
        {
            _id: 2,
            icon: <img src={image1}  alt="" />,
            title: "Friend purchases any course",
            description: "Using your REFERRAL CODE in the payments page",

        },
        {
            _id: 3,
            icon: <img src={image2}  alt="" />,
            title: "You get ₹ 200 as referral money",
            description: "On total purchase the friend makes, into your wallet",

        },
        {
            _id: 4,
            icon: <img src={image3}  alt="" />,
            title: "Your Friend gets ₹ 200 Off ",
            description: "On his overall fee on successful purchase using your referral code ",
            id: "getOff"

        },
        {
            _id: 5,
            icon: <img src={image4}  alt="" />,
            title: "Transfer money from wallet",
            description: "When the wallet balance reaches ₹200 or more, you can withdraw it",
            id: "transfer"

        }
    ]
    return (
        <div className='container'>
            <h2 className='Title'>How does it work ?</h2>
            <div className='categoryContainer'>
            {
                workCategories.map(category => <Category category={category}></Category>)
            }
             </div>
        </div>
    );
};

export default WorkCategory;