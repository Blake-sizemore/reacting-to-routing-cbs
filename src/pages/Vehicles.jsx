// import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

const Vehicles  = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(()=>{
        fetch('http://api-ghibli.herokuapp.com/vehicles')
        .then(res => res.json())
        .then(data => setVehicles(data))
        .catch( e => (e.message))
    })
    return (
        <>
        <h1>Vehicles</h1>
        {vehicles.map(vehicle => (
            <li id={vehicle.id}>
                {vehicle.name}
            </li>
        ))}
        </>
    )
}

export default Vehicles 