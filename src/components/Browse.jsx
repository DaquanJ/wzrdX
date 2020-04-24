import React from 'react';
import { Link } from 'react-router-dom';

const Browse = (props) => {
    return ( 
        <div className='browse-card' >
            <Link to={`/category${props.index}`} >
            <img src={props.image} alt="Wizards and Witches"/>
            <h1> {props.name} </h1>
            </Link>
        </div>
     );
}
 
export default Browse;