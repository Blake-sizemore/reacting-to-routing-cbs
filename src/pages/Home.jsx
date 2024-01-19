import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className="d-flex row row-cols-1 justify-content-center">
            <div className="text-center">
                <div className="card mt-3">
                    <div className="card-body">
                        <h1 className="card-title">Welcome to my wiki for Studio Ghibli</h1>
                        <p className="card-text">This site is dedicated to showcasing and practicing multiple web development skill sets. It may be updated from time to time for  pratice and experimental reasons. It was built using React and used the API endpoints <Link to="https://api-ghibli.herokuapp.com/">Click Here to View Endpoints"</Link>. Please feel free to look around.</p>
                    </div>
                    <div className="card-footer text-muted">Created By Blake Sizemore</div>
                </div>

            </div>
            <div className="card col-6 shadow pb-2 mt-3">
                <div className="card-body text-center">
                    <h3 className="card-title border-bottom border-dark">Hayao Miyazaki</h3>
                    <h5 className="card-text">"Humans have both the urge to create and destroy.</h5>
                    <div className=" card-img border-top border-none rounded bg-secondary p-3">
                        <img style={{ height: '100%', width: '100%' }} src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg" className="rounded" alt="..." />
                    </div>
                </div>
                <div className="card-footer ">
                    <small className=" text-center text-body-secondary">Co-founder of Studio Ghibli</small>
                </div>
            </div>
        </div>
    )
}

export default Home