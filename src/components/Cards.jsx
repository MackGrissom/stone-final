import React from 'react';
import { Card } from 'antd';
import KitchenPhoto from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/KitchensCard.jpg'
import BathroomPhoto from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/BathroomCard.jpg'
import OtherPhoto from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/OtherPhoto.jpg'
import { Link } from 'react-router-dom';
import { GiKitchenTap } from 'react-icons/gi';
import { FaShower } from 'react-icons/fa';

const { Meta } = Card;

const Cards = () => (
  <div className='flex justify-evenly card-container mb-20 border-[red] ' >
  

  
   
  <Card
    hoverable
    style={{ width: 250, height:250}}

    cover={<img alt="example" src={KitchenPhoto}
    />}     className='ant-card-home'
    >
    <span className=''>Kitchens </span>
    <a href='http://localhost:5173/kitchens' className='card-anchor'>
    <Link to='kitchens' />
    <Meta title="" className='meta'/>
    </a>
  </Card>
    
  <span className='p-5'></span>
  <Card
    hoverable
    style={{ width: 250, height:250}}
    cover={<img alt="example" src={BathroomPhoto} />}
    className='ant-card-home'>
    <a href='http://localhost:5173/bathrooms' className='card-anchor'>
    <Meta title="" className='meta'/>
    <span className=''>Bathrooms </span>
  </a>
  </Card>
  
<span className='p-5'> </span>

  <Card
    hoverable
    style={{ width: 250, height:250 }}
    cover={<img alt="example" src={OtherPhoto} />}
    className='ant-card-home'>
  <a href='http://localhost:5173/other' className='card-anchor'>
    <Meta title="" className='meta' />
    <span className=''>Other Designs </span>
  </a>
  </Card>
  
  </div>
);

export default Cards;