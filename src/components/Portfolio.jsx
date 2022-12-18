import React from 'react';
import { Tabs } from 'antd';
import Kitchens from './Kitchens';
import Other from './Other';
import Bathrooms from './Bathrooms';
const onChange = (key) => {
  console.log(key);
};
const Portfolio = () => (
  <div className='flex justify-center'>
  <Tabs
  centered
    defaultActiveKey="1"
    onChange={onChange}
    items={[

      // Kitchens
      {
        label: `Kitchens`,
        key: '1',
        children: <Kitchens />,
      },
      // Bathrooms
      {
        label: `Bathrooms`,
        key: '2',
        children: < Bathrooms />,
      },
      {
        label: `Other`,
        key: '3',
        children: <Other />,
      },
    ]}
  className='text-white '/>
  </div>
);
export default Portfolio;