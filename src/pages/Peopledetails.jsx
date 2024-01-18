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
        <div className='justify-content-center'>
            <h1>People details Page</h1>
            <div className='col-md-6'>
                <ul className='list-group'>
                    {people.map(person => (
                        <li
                            id={person.id}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{person.name}</span>
                            <Link to={`/Portfoliodetails/${person.id}`} className='btn btn-outline-warning'>
                                Full Details
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default People