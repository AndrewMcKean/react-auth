import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './index.css';

export default function ThumbnailBox(props) {

  return (
    <Card className="bg-transparent" style={{width: '50%', border: 'none', paddingLeft: '15%'}}>
      <Image src={props.source} alt="user submission" style={{width: '85%', objectFit: 'fill'}}/>
    </Card>
  )
}