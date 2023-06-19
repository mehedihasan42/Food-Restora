import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import RecommendsCard from './RecommendsCard';

const Recommends = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const chefsRecommend = data.filter(item=>item.type === 'chefsRecomand')
            setProducts(chefsRecommend)
        })
    },[])

    return (
        <div className='my-8 '>
            <SectionTitle subHeading='---Should Try---' heading='CHEF RECOMMENDS'/>
            <div className='lg:flex lg:space-x-4 ml-32'>
            {
                products.map(product=><RecommendsCard
                product={product}
                ></RecommendsCard>)
            }
            </div>
        </div>
    );
};

export default Recommends;