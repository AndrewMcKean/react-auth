import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './index.css';
import ThumbnailBox from './ThumbnailBox';


export default function PhotoBox(props) {
  const images = props.images;


  return (
    <Card className="photoBox">
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        <a href="./photos" style={{color: 'black', textDecoration: 'none'}}>{props.cardTitle}</a>
      </Card.Header>
      <Container className="d-flex imageList">
          {/*If state contains images, display them*/}
          {images ? Object.entries(images).map((entry) => {
          return (
            <ThumbnailBox key={entry[0]} source={entry[1]} className="galleryBox" />
          ) 
        }) : null}
      </Container>
    </Card>
  )
}