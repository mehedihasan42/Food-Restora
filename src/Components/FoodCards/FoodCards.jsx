import React from 'react';

const FoodCards = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
        <div className="card card-compact w-96 my-6 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className='bg-slate-800 text-white font-bold absolute top-0 right-2 p-2'>${price}</p>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;