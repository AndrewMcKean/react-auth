import React, { useEffect, useState } from 'react';
import './index.css';
import PhotoBox from './PhotoBox';

export default function PhotoBoxContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const maxIterations = 4;
    const photoMap = JSON.parse(localStorage.getItem("photoMap"));
    const photoMapSize = Object.keys(photoMap).length;

    if(photoMapSize > maxIterations) {
      const sliced = Object.fromEntries(
        Object.entries(photoMap).slice(0, 4)
      );

      setImages(sliced);
      console.log(sliced);
    } else {
      setImages(photoMap)
    }
  }
  , [])

  return (
    <PhotoBox cardTitle="Photos" images={images} />
  )
}