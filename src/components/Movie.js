import { Link } from 'react-router-dom';

function Movie(props) {
    const { title, accessor, poster } = props;
    const imageSrc =
        !poster ? '' :
        poster.startsWith('http://') || poster.startsWith('https://') || poster.startsWith('/')
            ? poster
            : `/movies/${title}/${poster}`;

    return (
        <div className="MovieBox">
            <Link to={`/movies/watch/${title}/${accessor}`}>
                <img src={imageSrc} alt={`${title}-Poster`} height="400" />
            </Link>
            <p className="MovieTitle">{title}</p>
        </div>
    );
}

export default Movie;

