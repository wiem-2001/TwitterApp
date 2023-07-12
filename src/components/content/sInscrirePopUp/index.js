import React from "react";
import { Modal,Row,Col,Button,Input } from 'antd';
import TwitterImage from '../../../assets/icons/Twitter_bird_logo.svg.png';
const SinscrirePopUp = ({ open,onClose })=>
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
            <p style={{fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:'30px'}}>Rejoignez Twitter</p>
            <Button block style={{marginTop:'0.7rem',borderRadius:'15px'}}>S'inscrire avec Google</Button>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px',fontWeight:'bold'}}>S'inscrire avec Apple</Button>
     <p style={{position:'relative',left:'8rem'}}>ou</p>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px',backgroundColor:'black',color:'white',fontWeight:'bold'}}>Créer un compte</Button>
<span>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</span><span style={{color:'Blue'}}> Inscrivez-vous</span>
<div>
    <span>Vous avez déjà un compte ? </span> <span style={{color:'Blue'}}> Connectez-vous.</span>
</div>
            </Col>
            <Col span={6}>
            </Col>
        </Row>
      </Modal>
    )
}

export default SinscrirePopUp;