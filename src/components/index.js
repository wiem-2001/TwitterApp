import React, { useState, useEffect } from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import Sidebar from './sideBar';
import Content from './content';
import SideCard from './sideCard';
import FooterTwitter from './footer';

const DefaultPage = () => {
  const [isSideCardInvisible, setSideCardInvisible] = useState(false);
  const [normalWindowWidth, setNormalWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleWindowResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth !== normalWindowWidth) {
        setSideCardInvisible(true);
      } else {
        setSideCardInvisible(false);
      }
    };

    handleWindowResize(); // Set initial isSideCardInvisible state based on window width

    window.addEventListener('resize', handleWindowResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleWindowResize); // Clean up the event listener on component unmount
    };
  }, [normalWindowWidth]);

  return (
    <Layout style={{ background: '#fff' }}>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col flex="1" style={{ minWidth: 0 }}>
          <Content />
        </Col>
        {!isSideCardInvisible && (
          <Col flex="0" style={{ minWidth: 500 }}>
            <SideCard />
          </Col>
        )}
      </Row>
<FooterTwitter></FooterTwitter>
    </Layout>
  );
};

export default DefaultPage;
