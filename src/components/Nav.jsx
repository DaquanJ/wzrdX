import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DH.png'
import '../styles/nav.scss'

const Nav = () => {
  return (
    <div className='nav' >
      <ul>
        <Link to='/' id='home' > <img src={logo} alt="" /> </Link>
        <Link to='/search' id='browse' > <li> Search </li> </Link>
      </ul>
      <hr />
    </div>
  );
}

export default Nav;