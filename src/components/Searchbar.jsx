import React, { useState } from 'react';
import axios from 'axios';
import '../styles/search.scss'

const Searchbar = () => {

  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getCharacters = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get('http://hp-api.herokuapp.com/api/characters')
      setCharacters(response.data)
      console.log(response.data)
    } catch (error) {
      console.log('Something went wrong!', error)
    }
  }

  return (
    <div>
      <form className="search" onSubmit={(e) => getCharacters(e)} onChange={(e) => handleChange(e)} >
        <input type="search" placeholder="Search by character or house..." required />
        <button type="submit" >Search</button>
      </form>
      <div className='searched_items'>
        {search === "" ? null :
          characters && characters.filter(info => info.name.toLowerCase() === search.toLowerCase() || info.house.toLowerCase() === search.toLowerCase())
            .map(character =>
              <div className='items' key={character.name} >
                <img src={character.image} alt={character.name} />
                <h1> {character.name} </h1>
                <h2> House: {character.house} </h2>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Searchbar;