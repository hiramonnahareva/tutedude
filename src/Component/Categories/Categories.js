import React from 'react';
import './Categories.css';

const Categories = ({category}) => {
    return (
        <div className='categories'>
           <button>{category.uiux}</button>
           <button>{category.Photoshop}</button>
           <button>{category.illustator}</button>
           <button>{category.pyton}</button>
           <button>{category.marn}</button>
           <button>{category.java}</button>
           {
            category.c && <button>{category.c}</button>
            
           }
           
        </div>
    );
};

export default Categories;