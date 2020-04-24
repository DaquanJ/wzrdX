import React from 'react';

const Browse = (props) => {
    return ( 
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title"> {props.name} </h1>
                    <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
     );
}
 
export default Browse;