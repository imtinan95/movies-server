import { Link } from 'react-router-dom';

function IndianMovies(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/indian/watch/${title}/${accessor}`}>
                <img src={`../Movies/Hindi/${title}/${accessor}.jpg`} alt={`${title}Poster`} height="400" />
            </Link>
            <p className="IndianMovieTitle">{title}</p>
        </div>
    );
}

export default IndianMovies;
