import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message))
    }, []);

    return (
        <>
            <h1 className="text-center mt-2">The Characters in the films</h1>
            <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                {people.map(person => (
                    <div key={person.id}>
                        <div className='card shadow my-2 p-0 text-center'>
                            <div className='card-body row row-cols-2 m-2'>
                                <h5 className='border-dark fw-semibold'>{person.name}</h5 >
                                <Link to={`/Peopledetails/${person.id}`} className='btn btn-outline-secondary'>
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

export default People