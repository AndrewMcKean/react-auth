import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './index.css';

export default function ThumbnailBox(props) {

  return (
    <Card style={{width: '50%'}}>
      <Image src={props.source} alt="user submission" style={{width: '50%', objectFit: 'fill'}}/>
    </Card>
  )
}