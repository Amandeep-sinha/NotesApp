import { useState } from "react";
import { useNotes } from "../../context";
import "./ColorPalette.css";
const ColorPalette = ({changeColor}) => {
  const bgColorList = [
    "#CCFF90",
    "#FDCFE8",
    "#D7AEFB",
    "#E6C9A8",
    "#BAF0BF",
    "#F5F5F5",
  ];
  return (
    <div className="color__palette"onClick={(e)=>e.stopPropagation()}>

      {bgColorList.map((color,index) => {
        return (
          <button  key={index}
            className="color__palette-btn"
            style={{
              backgroundColor: color,
            }}
            type="button"
            onClick={(e)=>{e.stopPropagation(),changeColor(e,color)}}
          ></button>
        );
      })}
    </div>
  );
};
export { ColorPalette };