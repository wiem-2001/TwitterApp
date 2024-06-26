import React from "react";
import { Modal,Row,Col,Button,Input } from 'antd';
import TwitterImage from '../../../assets/icons/Twitter_bird_logo.svg.png';
const SeConnecterPopUp = ({ open,onClose })=>
{
    return (
        <Modal
        visible={open}
        onCancel={onClose}
        footer={null}
        width={500}
        style={{ top: 65}}
      >
        <Row>
            <Col span={5}>

            </Col>
            <Col span={16}>
                <img alt='twitter icon' src={TwitterImage} style={{ height: '40px', width: '50px' ,display:'flex',justifyContent:'center' ,position:'relative',left:'8rem'}}/>
            <p style={{fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:'30px'}}>Connecter-vous à Twitter</p>
            <Button block style={{marginTop:'0.7rem',borderRadius:'15px'}}>S'inscrire avec Google</Button>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px',fontWeight:'bold'}}>S'inscrire avec Apple</Button>
     <p style={{position:'relative',left:'8rem'}}>ou</p>
     <Input placeholder="Numéro de téléphone ,adresse email ou nom ..." style={{height:'4rem'}}/>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px',backgroundColor:'black',color:'white',fontWeight:'bold'}}>Suivant</Button>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px',fontWeight:'bold'}}>mot de passe oublié ? </Button>
<span>Vous n'avez pas de compte ?</span><span style={{color:'Blue'}}> Inscrivez-vous</span>
            </Col>
            <Col span={6}>
            </Col>
        </Row>
      </Modal>
    )
}

export default SeConnecterPopUp;