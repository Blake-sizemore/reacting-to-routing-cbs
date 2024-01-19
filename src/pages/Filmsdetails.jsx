import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);
    const { filmid } = useParams();


    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => (e.message))
    }, [])

    return (
        <div className='d-flex justify-content-center'>
            <div className='card shadow my-2 p-0 text-center'>
                <div className="card-img-top">
                    <img className='col-12' src={films.movie_banner} alt="" />
                </div>
                <div className="card-header">
                    <h3 className='fw-semibold'>{films.title}</h3>
                </div>
                <div className='card-body row row-cols-2'>
                    <div>
                        <p className=''><span className='fw-bolder'>Director: </span>{films.director}</p>
                        <p className=''><span className='fw-bolder'>Producer: </span>{films.producer}</p>
                        <p className=''><span className='fw-bolder'>Release Date: </span>{films.release_date}</p>
                        <p className=''><span className='fw-bolder'>Movie Length: </span>{films.running_time}<span> minutes</span></p>
                        <p className=''><span className='fw-bolder'>Rotten Tomato Score: </span>{films.rt_score}<span>%</span></p>
                    </div>
                    <div>
                        <p className='fw-bolder '>Descriptions: </p>
                        <p>{films.description}</p>
                    </div>
                </div>
                <Link to={`/Films`} className='btn btn-outline-secondary m-2'>Back to All Films</Link>
            </div>
        </div>
    )
}

export default Films