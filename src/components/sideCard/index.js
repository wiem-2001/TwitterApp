import { Card,Button, Space } from 'antd';
import React from 'react';

const SideCard = () => (
  <Card  bordered={false} style={{ width: 310, marginLeft:'2rem' ,marginTop:'5rem'}}>
    <span>
      <div style={{fontWeight:'bolder',fontSize:'20px'}}>Nouveau sur Twitter ?</div>
    <span>Inscrivez-vous pour profiter de votre propre fil personnalisé !</span>
    </span>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px'}}>S'inscrire avec Google</Button>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px'}}>S'inscrire avec Apple</Button>
     <Button block style={{marginTop:'0.7rem',borderRadius:'15px'}}>Créer un compte</Button>
     <p style={{fontSize:'12px'}}>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>  </Card>
);

export default SideCard;