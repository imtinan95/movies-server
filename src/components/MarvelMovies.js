import { Link } from 'react-router-dom';

function MarvelMovies(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/watch/marvel/${title}/${accessor}`}>
                <img src={`/movies/Marvel/${title}/${accessor}.jpg`} alt={`${title}Poster`} height="400" />
            </Link>
            <p className="MovieTitle">{title}</p>
        </div>
    );
}

export default MarvelMovies;
