import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import Kitchen1 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/kitchen/kitchen1.webp'
import Kitchen2 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/kitchen/kitchen2.webp'
import Kitchen3 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/kitchen/kitchen3.webp'
import Kitchen4 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/kitchen/kitchen4.webp'




const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width:'65%',
  height:'75%',
};
const App = () => {
  const [dotPosition, setDotPosition] = useState('bottom');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <div className='carousel pt-0 mt-0'>
      <Carousel dotPosition={dotPosition}>
        <div className=''>
          <img style={contentStyle} src={Kitchen1} className=''/>
        </div>
        <div>
        <img style={contentStyle} src={Kitchen2} className=''/>
        </div>
        <div>
        <img style={contentStyle} src={Kitchen3} className=''/>
        </div>
        <div>
        <img style={contentStyle} src={Kitchen4} className=''/>
        </div>
      </Carousel>
      </div>
    </>
  );
};
export default App;