import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => (e.message))
    }, [])
    return (
        <>
            <h1 className="text-center mt-2">Films</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {films.map(film => (
                    <div key={film.id}>
                        <div className="card shadow my-2">
                            <div className="g-0">
                                <div className="">
                                    <img  src={film.image} className="img-fluid rounded-top" alt="..." />
                                </div>
                                <div className="card-body m-4">
                                    <h3 className="card-title border-bottom border-secondary">{film.title}</h3>
                                    <p className="card-subtitle text-secondary m-1">{film.original_title}</p>
                                    <p className="card-text">{film.description.substring(0, 150) + ' ...'}</p>
                                    <Link className="btn btn-outline-secondary" to={`/Filmsdetails/${film.id}`}>Would you like to know more?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Films

