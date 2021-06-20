import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/browse.scss';

const Browse = () => {

    const [browse, setBrowse] = useState();

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = async () => {
        try {
            const response = await axios.get('https://hp-api.herokuapp.com/api/characters')
            setBrowse(response.data)
            console.log(response.data)
        } catch (error) {
            console.log('Something went wrong!', error)
        }
    }

    return (
        <div className='browse-cards' >
            {browse && browse.map(character =>
                <div className='items' key={character.name} >
                    <h1> {character.name} </h1>
                    <img src={character.image} alt="" />
                    <h2> House: {character.house} </h2>
                    {character.patronus && character.wand.core ?
                        <div className='info' >
                            <p> Patronus: {character.patronus} </p>
                            <p> Wand: {character.wand.core} </p>
                        </div>
                        : null
                    }
                </div>
            )}
        </div>
    );
}

export default Browse;