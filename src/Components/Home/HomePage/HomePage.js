import React from 'react';
import Clothes from '../../AnotherServices/Clothes/Clothes';
import Footer from '../Footer/Footer';
import OurServices from '../OurServices/OurServices';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const HomePage = () => {
    return (
        <div>
          <TopBanner></TopBanner>
          <OurServices></OurServices>
          <Clothes></Clothes>
          <Review></Review>
          <Footer></Footer>
        </div>
    );
};

export default HomePage;