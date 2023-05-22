import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import CustomizedCard from './cards/index';
import ContentHeader from './Header';

const Content = () => {
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

  const numCards = 3; // Number of cards to render

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(<CustomizedCard key={i} />);
    }
    return cards;
  };
  return (
    <Layout>
          <ContentHeader />
            {renderCards()}
    </Layout>
  );
};

export default Content;
