import React from 'react';
import { Card } from 'react-bootstrap';
import './index.css';

export default function NewsBox(props) {

  return (
    <Card className="contentBox" style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)'}}>
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        {props.cardTitle}
      </Card.Header>
      <Card.Img src={props.img} style={{maxWidth: '40%', alignSelf: 'center', marginTop: '1em', marginBottom: '2em'}}/>
      <Card.Text className="text-center" style={{paddingLeft: '5px', paddingRight: '5px'}}>
        {props.title}
      </Card.Text>
    </Card>
  )
}