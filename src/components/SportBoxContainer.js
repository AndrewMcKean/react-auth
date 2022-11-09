import React, { useState, useEffect } from 'react';
import './index.css';
import csvFilePath from '../assets/sports'
import csv from 'csvtojson'



export default function SportBoxContainer() {
  
  useEffect(() => {
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        console.log(jsonObj);
      })

    
    /*for (let i = 0; i < 1000; i++) {
      if(!clothesTypes.has(clothesPayload[i].clothe)) {
        clothesTypes.set((clothesPayload[i].clothe), 1)
      } else {
        clothesTypes.set(clothesPayload[i].clothe, clothesTypes.get(clothesPayload[i].clothe) + 1);
      }
    } */

}, []) 


  return (
    <PieBox cardTitle="Clothes" pie={pie}  />
  )
}