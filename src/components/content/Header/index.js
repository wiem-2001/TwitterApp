import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Col, Row } from 'antd';
const { Header } = Layout;

const ContentHeader = () => {
    const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setIsHeaderTransparent(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <Layout>
      <Header
        style={{
         
          backgroundColor: isHeaderTransparent ? 'rgba(255, 255, 255, 0.9)' : '#fff',
          width: '100rem',
          position: 'fixed',
          zIndex: 1,
          fontWeight:'bold',
          paddingLeft:20,
          fontSize:'20px'
        }}
      >
            Explorer
      </Header>
    </Layout>
  );
};

export default ContentHeader;
