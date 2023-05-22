import { Card } from 'antd';
import React from 'react';
import { Col, Row, Avatar, Space } from 'antd';
import { UserOutlined,CommentOutlined ,UploadOutlined,HeartOutlined,RetweetOutlined} from '@ant-design/icons';
import TwitterImage from '../../../assets/icons/Twitter_bird_logo.svg.png'
import FeedImage from '../../../assets/images/feed.jpg'
const style= { background: '#0092ff', padding: '8px 0' };
const CustomizedCard = () => {
  return (
    <Card title="    " bordered={false} style={{ width: 620 }}>
     <Row>
    <Col span={18} push={3}>
        <Row>
       <p><div style={{fontWeight:'bold'}}>
        Wiloo
       </div>Allez, il faut partir maintenant</p>
        <div></div>
        </Row>
        <Row >
           <img
    src={FeedImage}
    alt="Twitter Icon"
    style={{ height:'300px',width:'500px' ,borderRadius: '10px' }}
  />

        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
       <div style={{color:'gray'}}><CommentOutlined  />  <span style={{marginLeft:'10px' }}>138</span></div> 
      </Col>
      <Col className="gutter-row" span={6}>
      <div style={{color:'gray'}}><RetweetOutlined /><span style={{ marginLeft:'10px'}}>138</span></div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div style={{color:'gray'}}><HeartOutlined />  <span style={{marginLeft:'10px'}}>138</span></div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div style={{color:'gray'}}><UploadOutlined /> <span style={{marginLeft:'10px'}}>138</span></div>
      </Col>
    </Row>
    </Col>
    <Col span={6} pull={18}>
    <Avatar size={64} icon={<UserOutlined />} />
    </Col>
  </Row>
    </Card>
  );
};

export default CustomizedCard;
