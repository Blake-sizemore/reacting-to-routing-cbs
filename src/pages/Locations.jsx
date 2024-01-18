import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/locations')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(e => (e.message))
    }, [])
    return (
        <>
            <h1>Locations Pages</h1>
            {locations.map(location => (
                <li
                id={location.id}>
                    {location.name}
                </li>
                
            ))}
        </>
    )
}

export default Locations