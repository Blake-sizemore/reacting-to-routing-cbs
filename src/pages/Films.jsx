import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const About = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => (e.message))
    }, [])
    return (
        <>
        <h1>Films Page</h1>
            {films.map(film => (
                <li
                id={film.id}>
                    {film.title}
                </li>
                
            ))}
        </>
    )
}

export default About