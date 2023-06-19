import React from 'react';

const RecommendsCard = ({product}) => {
    const {name,category,image} = product;
    return (
        <div className="card w-80 bg-base-100 text-center shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="">{name}</h2>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default RecommendsCard;