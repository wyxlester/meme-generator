import React from 'react'
import TrollFace from '../assets/troll_face.png'

const Navbar = () => {
  return (
    <nav className="d-flex">
      <img src={TrollFace} alt="troll" className="nav--logo"/>
      <span className="nav--brand">Meme Generator</span>
      <span className="nav--items">React Course - Project 3</span>
    </nav>
  )
}

export default Navbar;
