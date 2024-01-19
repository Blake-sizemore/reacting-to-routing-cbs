import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [residentOne, setResidentOne] = useState([]);
    
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/locations')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(e => (e.message))
    }, [])

    useEffect(() => {
        fetch('http://api-ghibli.https://api-ghibli.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0.com/locations')
            .then(res => res.json())
            .then(data => setResidentOne(data))
            .catch(e => (e.message))
    }, [])
    return (
        <>
            <h1 className="text-center">Locations</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {locations.map(location => (
                    <div key={location.id}>
                        <div key={location.id}>
                            <div className='card shadow my-2 p-0 text-center'>
                                <div className="card-header">
                                    <h5 className='border-dark fw-semibold'>{location.name}</h5 >
                                </div>
                                <div className='card-body'>
                                    <div>
                                        <p className=''><span className='fw-bolder'>Climate: </span>{location.climate}</p>
                                    </div>
                                    <div>
                                        <p className=''><span className='fw-bolder'>Terrian: </span>{location.terrain}</p>
                                    </div>
                                </div>
                                <Link to="/" className='btn btn-outline-secondary'>
                                    Full Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Locations