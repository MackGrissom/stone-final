import React from 'react';
import { CoffeeOutlined, DollarCircleOutlined, HomeOutlined, TeamOutlined, ToolOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Breadcrumb, Image, Layout, Menu,  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { MailOutlined, FileTextOutlined } from '@ant-design/icons'
import '../styles/App.css'
import { Link, Route, Routes } from 'react-router-dom';
import  { useState, useEffect } from "react";
import Loader from "./Loader.jsx";
import FloatMenu from './FloatMenu';
import { theme } from 'antd';
import '../styles/App.css'
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Logo from './Logo';

function App() {
  
  const [loaded, setLoaded] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  

  return (
    <div className='App'>
     <FloatMenu />
    {!loaded ? (
         <Loader />
      ) : (
        
        <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background:'#161719', overflow: 'auto',
        height: '100vh',
        position: 'inline',
        left: 0}} trigger={null}>
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'black',
            }} className='logo'
          />
        
       
      
              <Menu 
              defaultSelectedKeys={'Home'}
              mode={'inline'} style={{ background:'#161719', color:'white' }}>

                <Menu.Item key='Home' style={{height:50}} className='ant-menu-item'>
                  <Link to='/'/>
                <HomeOutlined /> &nbsp;
                  Home
                  
                </Menu.Item>
  
  
                <Menu.Item key='Instant Quote' style={{height:50}} className='ant-menu-item'>
                  <a href='https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop'>
                <DollarCircleOutlined /> &nbsp;
                  Instant Quote
                  </a>
  
                </Menu.Item>
  
  
                <Menu.Item key='Design Tool' style={{height:50}} className='ant-menu-item'>
                  <a href='https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer'>
                <ToolOutlined /> &nbsp;
                  Design Tool
                  </a>
                </Menu.Item>
  
                <Menu.Item key='Portfolio' style={{height:50}} className='ant-menu-item'>
                  <a href='/portfolio'>
                  <FileTextOutlined /> &nbsp;
                  Our Designs
                  </a>
                </Menu.Item>
                <Menu.Item key='Contact' style={{height:50}} className='ant-menu-item'>
                  <a href='/contact'>
                  <MailOutlined/> &nbsp;
                  Contact Us
                  </a>
                </Menu.Item>
  </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: 'white',
            }}
          />
  
          
  <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/portfolio' element={<Portfolio />}/>
          </Routes>
          
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Hero />
            </div>
          </Content>
          <Footer
          style={{
            textAlign: 'center',
          }} className='footer-color'
        >
      <p className='text-center text-white text-[10px]'> 1090 Parkway Industrial Park Dr, Buford, GA 30518 <br/> <br/>
  (770) 271-6907</p>
          <br/>
          <span>
          Home | Legal | Contact
          <br/>
          Precision Stone ©2023 Built by <a href='www.mackgrissom.io'> Mack Grissom <CoffeeOutlined size={5}/></a> 
          </span>
        </Footer>
        </Layout>
        
       
      </Layout>
    
      
       
    )} </div>
 
  )
}

export default App