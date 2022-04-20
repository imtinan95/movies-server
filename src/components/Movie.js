import { Link } from 'react-router-dom';

function Movie(props) {
    const { title, accessor, poster } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/watch/${title}/${accessor}`}>
                <img src={poster} alt={`${title}Poster`} height="400" />
            </Link>
            <p className="MovieTitle">{title}</p>
        </div>
    );
}

export default Movie;
