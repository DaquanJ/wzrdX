import React from 'react';
import logo from '../assets/DH.png'
import '../styles/nav.scss'

const Nav = () => {
    return ( 
        <div className='nav' >
            <ul>
                <img src={logo} alt=""/>
                <li> Browse </li>
            </ul>
            <hr/>
        </div>
     );
}
 
export default Nav;