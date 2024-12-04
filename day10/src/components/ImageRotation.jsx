import React,{useState} from 'react'
import "./ImageRotation.css"
import pic from "../image/sample.jpg"
const ImageRotation = () => {
    const [width,setWidth]=useState(300);
    const [height,setHeight]=useState(200);
    const [rotation,setRotation]=useState(0);
  return (
    <div className='disp2'>
        <img className='image' src={pic}
        style={({
            width:width,
            height:height,
            transform:`rotate(${rotation}deg)`,
        })}
        />
        <br />
        <br />
        <br /><br />
        <button className='fbtu' onClick={()=>{
            setWidth(width+10);
        }}>Increase Width</button>
        <button onClick={()=>{
            setWidth(width-10);
        }}>Decrease Width</button>
        <button onClick={()=>{
            setHeight(height+10);
        }}>Increase Height</button>
        <button onClick={()=>{
            setHeight(height-10);
        }}>Decrease Height</button>
        <button onClick={()=>{
            setRotation(rotation+10);
        }}>Rotate Clockwise</button>
        <button onClick={()=>{
            setRotation(rotation-10);
        }}> Rotate AntiClockwise</button>
    </div>
  )
}

export default ImageRotation
