import React, { useState } from "react";
import logo from "../assets/Untitled design.png";
import ButtonComponent from "./ButtonComponent";

function NavbarComponent() {
  const [navItems,setNavItems] = useState(['Home','About','Contact']);

  return (
    <header className="navbar">
      <nav className="navbar_wrap">
        <img
          src={logo}
          className="navbar_logo"
          style={{ width: "100px" }}
          alt=""
        />
        <ul className="navbar_list">{navItems.map((li,index)=>{
            return <li key={index} className="navbar_list_item">{li}</li>
        })}</ul>
        <div className="navbar_buttons">
            <ButtonComponent title='Login' color='tomato'/>
            <ButtonComponent title='Register' color='blue'/>
        </div>
      </nav>
    </header>
  );
}

export default NavbarComponent;
