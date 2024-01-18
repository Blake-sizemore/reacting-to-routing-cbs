// import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

const Species = () => {
    const [species, setSpecies] = useState([]);
    useEffect(()=>{
        fetch('http://api-ghibli.herokuapp.com/species')
        .then(res => res.json())
        .then(data => setSpecies(data))
        .catch( e => (e.message))
    })
    // const {userid} =useParams();
    return (
        <>
        <h1>Species </h1>
        {species.map(specie => (
            <li
            id={specie.id}>
                {specie.name}
            </li>
        ))}
        </>
    )
}

export default Species