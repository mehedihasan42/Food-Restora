import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCard from './MenuCard';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {

    const [menu] = useMenu()
    const popularMenu = menu.filter(item=>item.category === 'popular')

    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category==='popular');
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className='my-6'>
            <SectionTitle
            subHeading='---Check it out---'
            heading='FROM OUR MENU'
            />
            <div className='grid lg:grid-cols-2'>
           {
             popularMenu.map(item=><MenuCard
                 item={item._id}
                 product={item}
             ></MenuCard>)
            }
            </div>
        </section>
    );
};

export default Menu;