import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);
    const { personid } = useParams();

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${personid}`)
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message))
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            <div className='card shadow my-2 p-0 text-center col-6'>
                <div className='card-body'>
                    <h3 className='border-bottom border-dark fw-semibold'>{people.name}</h3 >
                    <p className=''><span className='fw-bolder'>Age: </span>{people.age}</p>
                    <p className=''><span className='fw-bolder'>Gender: </span>{people.gender}</p>
                    <p className=''><span className='fw-bolder'>Eye Color: </span>{people.eye_color}</p>
                    <p className=''><span className='fw-bolder'>Hair Color: </span>{people.hair_color}</p>
                </div>
        <Link to={`/People`} className='btn btn-outline-secondary m-2'>Back to People</Link>
            </div>
        </div>
    )
}

export default People