import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import image from '../../../assets/home/featured.jpg'
import background from './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white'>
           <div className='bg-black bg-opacity-60 py-2'>
           <SectionTitle
                subHeading='---Check it out---'
                heading='FROM OUR MENU'
            />
            <div className='flex justify-center items-center  pb-20 pt-8 space-x-14'>
                <div>
                    <img className='h-80' src={image} alt="" />
                </div>
                <div className='w-1/3 space-y-2.5 font-normal'>
                    <p>June 18, 2023</p>
                    <h3 className='uppercase text-xl'>Where can i get some</h3>
                    <p className='text-[#FFFFFF]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut voluptatum odio
                     illum ullam minima ab, quo labore itaque enim repudiandae error vitae quis consectetur.</p>
                    <button className='uppercase text-white font-bold btn btn-outline border-b-4'>read more</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;