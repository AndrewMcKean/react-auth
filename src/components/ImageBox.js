import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './index.css';

export default function ImageBox(props) {

  return (
    <Card className="contentBox">
      <Image src={props.source} alt="user submission" />
    </Card>
  )
}