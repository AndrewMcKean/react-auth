import React, { useState, useEffect } from 'react';
import './index.css';
import PieBox from './PieBox';
import Clothes from '../assets/clothes';
import { PieChart } from 'react-minimal-pie-chart';


export default function PieBoxContainer() {
  const [pie, setPie] = useState(null)
  
  useEffect(() => {
    const clothes = Clothes;
    const clothesPayload = clothes.payload;
    const clothesTypes = new Map();

    
    for (let i = 0; i < 1000; i++) {
      if(!clothesTypes.has(clothesPayload[i].clothe)) {
        clothesTypes.set((clothesPayload[i].clothe), 1)
      } else {
        clothesTypes.set(clothesPayload[i].clothe, clothesTypes.get(clothesPayload[i].clothe) + 1);
      }
    }

    // Getting clothes and values into the PieChart object programatically was proving a pain
    // Since there were only 6 clothes types I entered this data manually.
    setPie(<PieChart 
      data={[
        {title: 'jumper', value: 189, color: '#A2C3DB'}, //greyblue
        {title: 'hoodie', value: 153, color: '#8871A0'}, //purple
        {title: 'jacket', value: 171, color: '#fdfd96'}, //yellow
        {title: 'sweater', value: 170, color: '#DCB12D'}, //orange
        {title: 'blazer', value: 146, color: '#3F9F9F' }, //Cyan
        {title: 'raincoat', value: 171, color: '#8AAF22' } //Green
      ]} style={{width: '100%', paddingTop: '15%', paddingLeft: '12%'}}/>);
}, []) 


  return (
    <PieBox cardTitle="Clothes" pie={pie}  />
  )
}