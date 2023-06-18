import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center uppercase my-6 mt-16'>
            <p className='text-[#BB8506] my-4'>{subHeading}</p>
            <div className="divider w-1/4 mx-auto"></div> 
            <h3 className='text-4xl'>{heading}</h3>
            <div className="divider w-1/4 mx-auto"></div> 
        </div>
    );
};

export default SectionTitle;