import React from 'react';

const MenuCard = ({product}) => {
   const {image,name,price,recipe} = product;
    return (
        <div className='flex space-x-2 m-2'>
            <img className='w-[118px]' src={image} alt="" />
            <div>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-[#737373] text-sm'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>{price}</p>
        </div>
    );
};

export default MenuCard;