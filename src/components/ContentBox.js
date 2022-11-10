import React from 'react';
import { Card } from 'react-bootstrap';
import './index.css';

export default function ContentBox(props) {

  return (
    <Card className="contentBox">
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        {props.cardTitle}
      </Card.Header>
      <Card.Text className="text-center" style={{color: 'black'}}>
        {props.cardContent}
      </Card.Text>
    </Card>
  )
}