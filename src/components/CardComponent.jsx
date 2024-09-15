import React, { useState } from "react";
import logo from "../assets/Untitled design.png";
function CardComponent({price}) {
  const [counter, setCounter] = useState(1);
  const [cena,setCena] = useState(500)
  const [darkMode, setDarkMode] = useState(true)
  
    function povecaj(){
        setCounter(counter+1)
    }
    function promeniCenu(){
        
            setCena(1200)
      
    }
    function smanji(){
        if(counter>1){
            setCounter(counter-1)
        }
    }
    function changeMode(){
        setDarkMode(!darkMode)
    }
  return (
    <div className="card" 
    style={{backgroundColor:darkMode?'yellow':'green'}}>
      <h2 className="card_title">Tihomirs CARD</h2>
      <img className="card_img" style={{width:'150px'}} src={logo} alt="" />
      <h3 className="card_price">{cena}$</h3>
      <div className="card_counter">
        <button onClick={povecaj}>+</button>
        <span>{counter}</span>
        <button onClick={smanji}>-</button>
      </div>
      <button onClick={promeniCenu}>Change price</button>
      <button onClick={changeMode}>{darkMode?'DarkMode':'LightMode'}</button>
    </div>
  );
}

export default CardComponent;
