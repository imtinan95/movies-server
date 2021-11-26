import { Link } from 'react-router-dom';

function Movie(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/watch/${title}/${accessor}`}>
                <img src={`../Movies/${title}/${accessor}.jpg`} alt={`${title}Poster`} height="400" />
            </Link>
            <p className="MovieTitle">{title}</p>
        </div>
    );
}

export default Movie;
