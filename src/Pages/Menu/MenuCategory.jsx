import React from 'react';
import MenuCard from '../Home/Menu/MenuCard';
import Covoer from '../../Shared/Covoer/Covoer';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title,subHeading,heading }) => {
    return (
        <div>
            {title ? 
                <Covoer title={title} img={img}></Covoer> 
                : <></>}
            <div className='grid lg:grid-cols-2'>
                {
                    items.map(item => <MenuCard
                        item={item._id}
                        product={item}
                    ></MenuCard>)
                }
            </div>
            <Link to={`/order/${title}`}><button>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;