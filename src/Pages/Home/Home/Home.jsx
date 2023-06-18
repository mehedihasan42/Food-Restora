import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Category></Category>
          <Menu></Menu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </>
    );
};

export default Home;