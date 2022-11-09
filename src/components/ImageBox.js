import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './index.css';

export default function ImageBox(props) {

  return (
    <Card style={{width: '20rem', height: '15rem', overflow: 'hidden', objectFit: 'cover'}}>
      <Image src={props.source} alt="user submission" style={{}}/>
    </Card>
  )
}