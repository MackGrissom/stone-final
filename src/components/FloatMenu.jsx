import React from 'react';
import { FloatButton } from 'antd';
import { CustomerServiceOutlined, CommentOutlined, HomeOutlined, ContactsOutlined, MenuOutlined, FormatPainterOutlined, DollarCircleOutlined } from '@ant-design/icons';
const FloatMenu = () => (
<div className='bottom-menu sm:w-[110%]'>
  <FloatButton.Group icon={<MenuOutlined />} type="primary" trigger="click" className='float-menu !sm:visible !xs:visible !visible'>
    <a href=''>
    <FloatButton  tooltip={<div> Home</div>} icon={<HomeOutlined />}/>
    </a>
    <br/> 


<a href=''>
    <FloatButton  tooltip={<div> Contact Us</div>} icon={<ContactsOutlined />}/>
    </a>
<br />

<a href='https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer'>
    <FloatButton icon={<FormatPainterOutlined />} tooltip={<div>Design Tool</div>}/>
    </a>
    <br/>

<a>
    <FloatButton icon={<DollarCircleOutlined />} tooltip={<div>Instant Quote</div>}/>
    </a>


  </FloatButton.Group>
  </div>
);
export default FloatMenu;