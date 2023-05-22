import React ,{ useState, useEffect }from "react";
import { Layout,Row,Col,Button, Space } from 'antd';
import { InsertRowBelowOutlined } from "@ant-design/icons";
import { isVisible } from "@testing-library/user-event/dist/utils";
import SeConnecterPopUp from "../content/seConnecterPopUp";
const { Footer } = Layout;
const FooterTwitter = ()=>{

  const [isvisible, setIsVisible] = useState(true);
  const [isVisivleSeConnecter, setisVisivleSeConnecter] = useState(false);
  const showModal = () => {
    setisVisivleSeConnecter(true);
  };
  const handleOk = () => {
    setisVisivleSeConnecter(false);
  };
  const handleCancel = () => {
    setisVisivleSeConnecter(false);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <900) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    handleWindowResize(); // Set initial isSideCardInvisible state based on window width
    window.addEventListener('resize', handleWindowResize); // Add event listener for window resize
    return () => {
      window.removeEventListener('resize', handleWindowResize); // Clean up the event listener on component unmount
    };
  }, []);

return (
<Footer style={{ textAlign: 'center',backgroundColor:'#1d9bf0',paddingTop:'0.9rem',position: 'fixed',bottom:'0',left:'0',right:'0'
          }}>
<Row>
    <Col span={6}></Col>
{isvisible &&(
 <Col span={12}>
 <Row>
<div style={{color: 'white',fontWeight:'bold',fontSize:'23px'}}>   
Ne manquez pas ce qui se passe.
</div>
 </Row>
 <Row>
<div style={{color: 'white',fontSize:'15px'}}>   
Les utilisateurs de Twitter sont les premiers à savoir.
</div>
</Row>
 </Col>
)}
    <Col span={3}>
    <Row>
<span style= { isVisible 
?{display:'flex' , justifyContent: "center"}
:{display:'flex', marginTop:'1rem'}
}
>
<Button block style={{
    width:isvisible ? "120px" : "13rem",
    color:'white',borderRadius:'20px',
    fontWeight:'bold',fontSize:'15px',
    backgroundColor:'#1d9bf0',
    borderColor:'white'  
    }} 
    onClick={showModal}>Se connecter</Button>
    <SeConnecterPopUp 
        open={isVisivleSeConnecter}
        onClose={handleCancel}/>
<Button block style={{
    marginLeft:'1rem',
    color:'black',
    borderRadius:'20px' ,
    width:isvisible ? "120px" : "13rem",
    fontWeight:'bold',fontSize:'15px'
    }}>S'inscrire</Button>
</span>
    </Row>
    </Col>
</Row>
</Footer> 
);
}

export default FooterTwitter;