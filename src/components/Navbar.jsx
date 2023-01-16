import React from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  CoffeeOutlined,
  DollarCircleOutlined,
  FormatPainterOutlined,
  HomeOutlined,
  ToolOutlined
} from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon'
const { Header, Footer, Sider, Content } = Layout
import { MailOutlined, FileTextOutlined } from '@ant-design/icons'
import '../styles/App.css'
import { GiFallingBoulder, GiKitchenTap } from 'react-icons/gi'
import { FaShower } from 'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer1 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/footer/1.png'
import Footer2 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/footer/2.png'
import Footer3 from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/footer/3.png'
import { useState, useEffect } from 'react'
import Loader from './Loader.jsx'
import Title from 'antd/es/skeleton/Title'
import FloatMenu from './FloatMenu'
import Logo from './Logo'
import { UploadOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { theme } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Home', 'home', <HomeOutlined />),
//   getItem('Instant Quote', 'quote', <DesktopOutlined />),
//   getItem('Design Tool', 'design tool', <DesktopOutlined />),
//   getItem('Portfolio', 'portfolio', <UserOutlined />, [
//     getItem('Kitchens', 'kitchens'),
//     getItem('Bathrooms', 'bathrooms'),
//     getItem('Other Designs', 'other'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'black'
          }}
        />

        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <Icon component={Logo} style={{ padding: 10 }} />
        <Menu
          defaultSelectedKeys={'Home'}
          mode={'inline'}
          style={{ background: '#161719', color: 'white' }}
        >
          <Menu.Item
            key="Home"
            style={{ height: 50 }}
            className="ant-menu-item"
          >
            <Link to="/" />
            <HomeOutlined /> &nbsp; Home
          </Menu.Item>

          <Menu.Item
            key="Instant Quote"
            style={{ height: 50 }}
            className="ant-menu-item"
          >
            <a href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop">
              <DollarCircleOutlined /> &nbsp; Instant Quote
            </a>
          </Menu.Item>

          <Menu.Item
            key="Design Tool"
            style={{ height: 50 }}
            className="ant-menu-item"
          >
            <a href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer">
              <ToolOutlined /> &nbsp; Design Tool
            </a>
          </Menu.Item>

          <Menu.Item
            key="Portfolio"
            style={{ height: 50 }}
            className="ant-menu-item"
          >
            <a href="/portfolio">
              <FormatPainterOutlined /> &nbsp; Our Designs
            </a>
          </Menu.Item>
          <Menu.Item
            key="Contact"
            style={{ height: 50 }}
            className="ant-menu-item"
          >
            <a href="/contact">
              <FormatPainterOutlined /> &nbsp; Contact Us
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: 'white'
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Content
          style={{
            margin: '0 16px'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0'
            }}
          >
            <Breadcrumb.Item>Kitchen Designs</Breadcrumb.Item>
            <Breadcrumb.Item>Bathroom Designs</Breadcrumb.Item>
            <Breadcrumb.Item>Other Designs</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
          className="footer-color"
        >
          <p className="text-center text-white text-[10px]">
            {' '}
            1090 Parkway Industrial Park Dr, Buford, GA 30518 <br /> <br />
            (770) 271-6907
          </p>
          <br />
          <span>
            Home | Legal | Contact
            <br />
            Precision Stone ©2023 Built by{' '}
            <a href="www.mackgrissom.io">
              {' '}
              Mack Grissom <CoffeeOutlined size={5} />
            </a>
          </span>
        </Footer>
      </Layout>
    </Layout>
  )
}
export default Navbar
