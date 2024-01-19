import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/species')
            .then(res => res.json())
            .then(data => setSpecies(data))
            .catch(e => (e.message))
    }, []);

    return (
        <>
            <h1 className="text-center">Species</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {species.map(specie => (
                    <div key={specie.id}>
                        <div key={specie.id}>
                            <div className='card shadow my-2 p-0 text-center'>
                                <div className="card-header">
                                    <h5 className='border-dark fw-semibold'>{specie.name}</h5 >
                                </div>
                                <div className='card-body'>
                                    <div>
                                        <p className=''><span className='fw-bolder'>Classification: </span>{specie.classification}</p>
                                    </div>
                                    <div>
                                        <p className=''><span className='fw-bolder'>Eye Colors: </span>{specie.eye_colors}</p>
                                    </div>
                                    <div>
                                        <p className=''><span className='fw-bolder'>Hair Colors: </span>{specie.hair_colors}</p>
                                    </div>
                                </div>
                                    <Link to={`/Speciesdetails/${specie.people}`} className='btn btn-outline-secondary'>
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

export default Species