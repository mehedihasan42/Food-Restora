import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading='---What our customars say---'
                heading='TESTIMONIALS'
            />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <div>
                            <SwiperSlide>
                                <div className='w-2/3 mx-auto my-8'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className='mx-auto my-2'
                                />
                                    <p className='text-[#444444] text-center'>{review.details}</p>
                                    <h3 className='text-[#CD9003] text-center text-3xl'>{review.name}</h3>
                                </div>
                            </SwiperSlide>

                        </div>)

                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;