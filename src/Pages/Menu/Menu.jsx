import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Covoer from '../../Shared/Covoer/Covoer';
import manuImage from '../../assets/menu/banner3.jpg'
import MenuCard from '../Home/Menu/MenuCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Parallax } from 'swiper';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';
import dessert from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
  const [menu] = useMenu()
  const salad = menu.filter(item=>item.category === 'salad')
  const drinks = menu.filter(item=>item.category === 'drinks')
  const desserts = menu.filter(item=>item.category === 'dessert')
  const pizza = menu.filter(item=>item.category === 'pizza')
  const soup = menu.filter(item=>item.category === 'soup')
  const offered = menu.filter(item=>item.category === 'offered')
  return (
    <>
      <Helmet>
        <title>Food Restora - Menu</title>
      </Helmet>
        <Covoer title='our menu' img={manuImage}></Covoer>
        <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" ></SectionTitle>
       <MenuCategory items={offered} />
       <MenuCategory subHeading='' img={dessert} title='Desserts' items={desserts} />

    </>
  );
};

export default Menu;