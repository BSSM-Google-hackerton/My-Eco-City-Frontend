import React from 'react';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import Sea from './ProductionComponents/sea';
import { useState } from 'react';
import CheckMark from '../../assets/check-mark.svg';
 
// style
import '../../styles/Canvas/productionLine.css'

// data
import eco_item from './data/data';
import { useOrbitContext } from '../../context/orbitContext';

const ProductionLine = () => {

  const [nowid, setNowid] = useState(-1);
  const [isHover, setHover] = useState(false);
  const [ID, setID] = useState(-1);

  const {orbit,
    completed,
    checked} = useOrbitContext();

  const SelectedItem = (idx) => {
    completed(idx);
    setNowid(idx);
  }
  
  const CompletedItem = () => {
    checked(nowid);
  }

  const lineItem = eco_item.map((item, idx) => {
    return (
      <div className="line--item" key={item.id} > 
        <img
            src={require(`./data/${idx+1}.png`)}
            alt={item.title}
            onClick={()=>SelectedItem(idx)}
            onMouseOver={function () {
              setHover(true)
              setID(idx)
            }}
            onMouseOut={function () {
              setHover(false)
              setID(-1)
            }}
        />
        {(isHover && idx == ID) ?
        <div className="triangle"></div>:null}
        {(isHover && idx == ID) ?<div className="title-and-desc">{item.desc}</div>:null}
      </div>
    )
  })

  return (
    <div className="line">
      <div className="line_warp">
          {lineItem}
      </div>
      <img src={CheckMark} onClick={CompletedItem}/>
    </div>
  )
}

export default ProductionLine;