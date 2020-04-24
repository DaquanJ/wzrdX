import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss'

const Footer = () => {
    return ( 
        <div className='footer' >
            <hr/>
            <ul>
                <Link to='/about' > <li> About </li> </Link> 
                <li> &copy; 2020 WZRDX FROM PERSCHOLAS </li>
            </ul>
        </div>
     );
}
 
export default Footer;