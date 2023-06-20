import React, { useState } from 'react';
import Covoer from '../../../Shared/Covoer/Covoer';
import bgImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCards from '../../../Components/FoodCards/FoodCards';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
   const categories = ['salad','pizza','soup','dessert','drinks']
   const {category} = useParams()
   const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    console.log(category)

  const salads = menu.filter(item=>item.category === 'salad')
  const drinks = menu.filter(item=>item.category === 'drinks')
  const desserts = menu.filter(item=>item.category === 'dessert')
  const pizza = menu.filter(item=>item.category === 'pizza')
  const soups = menu.filter(item=>item.category === 'soup')

    return (
        <div>
         <Covoer img={bgImage} title='Shop Food'></Covoer>
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex justify-center my-6">
        <TabList className="flex cursor-pointer">
          <Tab className="bg-slate-500 rounded border-2 hover:border-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Salad
          </Tab>
          <Tab className="bg-slate-500 rounded  border-2 hover:border-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Pizza
          </Tab>
          <Tab className="bg-slate-500 rounded  border-2 hover:border-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Soups
          </Tab>
          <Tab className="bg-slate-500 rounded  border-2 hover:border-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Desserts
          </Tab>
          <Tab className="bg-slate-500 rounded  border-2 hover:border-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4">
           Drinks
          </Tab>
        </TabList>
        </div>

        <TabPanel>
        <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
        </div>
    );
};

export default Order;