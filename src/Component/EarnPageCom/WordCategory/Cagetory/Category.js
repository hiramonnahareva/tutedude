import React from 'react';
import './Category.css';

const Category = ({category}) => {
    return (
       
           <div className="infoContain">
           <div className='iconContain'>
            <span className='categoryIcon' id={`${category.id}`}>{category.icon}</span>
            </div>
            <div>
            <h4 className='categoryTitle'>{category.title}</h4>
            <span className='description'>{category.description}</span>
            </div>
           </div>
       
    );
};

export default Category;