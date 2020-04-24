import React from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
    return ( 
        <div >
            <Link to={`/category/${props.character}`} >
            <img src={props.image} alt=""/>
            <h1 > {props.character} </h1>
            </Link>
        </div>
     );
}
 
export default Categories;