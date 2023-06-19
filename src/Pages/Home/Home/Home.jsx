import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Boss from '../../Boss/Boss';
import CallUs from '../CallUs/CallUs';
import Recommends from '../Recommends/Recommends';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
        <Helmet>
          <title>Food Restora - Home</title>
        </Helmet>
          <Banner></Banner>
          <Category></Category>
          <Boss></Boss>
          <Menu></Menu>
          <CallUs></CallUs>
          <Recommends></Recommends>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </>
    );
};

export default Home;