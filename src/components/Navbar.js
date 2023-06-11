import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/marvel-logo.png';
import hamburguer from '../img/hamburguer.svg'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_bg'>
        <img className='navbar_logo' alt="logo" src={logo} />
      </div>
      <div className='navbar_flex'>
        <img className='navbar_hamburguer' alt="hamburguer_icon" src={hamburguer} />
        <nav className='navbar_links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/characters'>Characters</Link>
          <Link className='link' to='/comics'>Comics</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar