import React, { useState, useEffect } from 'react';
import Content from '../content/index';
import { NumberOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import TwitterImage from '../../assets/icons/Twitter_bird_logo.svg.png';
import { Col, Row } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState();

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setCollapsed(window.innerWidth < 900); // Set collapsed to true when window width is less than 900px
    };

    handleWindowResize(); // Set initial collapsed state based on window width

    window.addEventListener('resize', handleWindowResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleWindowResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={400}
        style={{ background: '#fff' }}
      >
        <div className="demo-logo-vertical" />
        <Menu mode="inline" onClick={handleClick} style={{}}>
          <Menu.Item
            key="1"
            style={
              selectedKey === '1'
                ? {
                    fontWeight: 'bold',
                    backgroundColor: '#d9d9d9',
                    color: 'black',
                    marginTop: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                  }
                : { marginTop: '15px' }
            }
          >
            <img src={TwitterImage} alt="Twitter Icon" style={{ height: '25px', width: '30px' }} />
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              collapsed ? (
                <SearchOutlined style={{ color: selectedKey === '2' ? 'black' : 'inherit', fontSize: '25px' }} />
              ) : (
                <NumberOutlined style={{ color: selectedKey === '2' ? 'black' : 'inherit', fontSize: '25px' }} />
              )
            }
            style={
              selectedKey === '2'
                ? {
                    fontWeight: 'bold',
                    backgroundColor: '#d9d9d9',
                    color: 'black',
                    marginTop: '15px',
                   
                  }
                : { marginTop: '20px', }
            }
          >
            Explorer
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<SettingOutlined style={{ color: selectedKey === '3' ? 'black' : 'inherit', fontSize: '25px' }} />}
            style={
              selectedKey === '3'
                ? {
                    fontWeight: 'bold',
                    backgroundColor: '#d9d9d9',
                    color: 'black',
                    marginTop: '15px',
                   
                   
                  }
                : { marginTop: '20px',   }
            }
          >
            Paramètres
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
