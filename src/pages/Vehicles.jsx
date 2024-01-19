import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(e => (e.message))
    }, [])
    return (
        <>
            <h1 className="text-center">Vehicles</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {vehicles.map(vehicle => (
                <div key={vehicle.id}>
                        <div className='card shadow my-2 p-0 text-center'>
                            <div className="card-header">
                                <h5 className='border-dark fw-semibold'>{vehicle.name}</h5 >
                            </div>
                            <div className='card-body'>
                                <div>
                                    <p className=''><span className='fw-bolder'>Vehicle Class: </span>{vehicle.vehicle_class}</p>
                                </div>
                                <div>
                                    <p className=''><span className='fw-bolder'>Length: </span>{vehicle.length}</p>
                                </div>
                            </div>
                            <Link to="/" className='btn btn-outline-secondary'>
                                Full Details
                            </Link>
                        </div>
                    </div>
            ))}
            </div>
        </>
    )
}

export default Vehicles 