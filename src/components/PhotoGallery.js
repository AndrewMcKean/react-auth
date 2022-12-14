import React, {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './index.css';
import Logout from './Logout';
import PhotoAdd from './PhotoAdd';
import ImageBox from './ImageBox';

export default function PhotoGallery() {
  const [images, setImages] = useState([]);

  // Get saved images and add them to state
  useEffect(() => {
    const images = JSON.parse(localStorage.getItem('photoMap'));
    if(images) {
      setImages(images);
    }
  }, [])
  
  return (
    <Container>
      {/*Title row*/}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-start" sm={8}>
          <h1 style={{color: 'white', fontSize: '5em'}}>Photos</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={4}>
          <Logout />
        </Col>
      </Row>
      <div className="imageList">
        <PhotoAdd />
        {/*If state contains images, display them*/}
        {images ? Object.entries(images).map((entry) => {
          return (
            <ImageBox key={entry[0]} source={entry[1]} className="galleryBox" />
          ) 
        }) : null}
      </div>
    </Container>
  )
}

