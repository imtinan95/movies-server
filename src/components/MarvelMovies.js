import { Link } from 'react-router-dom';

function MarvelMovies(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/marvel/watch/${title}/${accessor}`}>
                <img src={`../Movies/Marvel/${title}/${accessor}.jpg`} alt={`${title}Poster`} height="400" />
            </Link>
            <p className="MarvelMovieTitle">{title}</p>
        </div>
    );
}

export default MarvelMovies;
