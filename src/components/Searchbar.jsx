import React from 'react';

const Searchbar = (props) => {
 
   const handleSubmit = (e) => {
        e.preventDefault();
      }

    return ( 
        <form className="search" onSubmit={handleSubmit} >
          <input type="search" placeholder="What knowledge do you seek..." onChange={props.handleChange} required/>
          <button type="submit" onClick={props.handleSearch}>Search</button>
        </form>   
     );
}
 
export default Searchbar;