import React from 'react';
import { Link } from 'react-router-dom';

const Browse = (props) => {
    return ( 
        <div className='browse-cards' >
            <Link className='browse-card' to={`/category/${props.name}`} >
            <img src={props.image} alt="Wizards and Witches"/>
            <h1> {props.name} </h1>
            </Link>
        </div>
     );
}
 
export default Browse;