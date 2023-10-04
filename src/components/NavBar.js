import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
  <a href="#home" key="id">home</a> 
  <a href="#about" key="id">about</a>    
  <a href="#projects" key="id">projects</a>       
  </nav>;
}

export default NavBar;
