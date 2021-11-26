import { Link } from 'react-router-dom';

function HarryPotterMovies(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/movies/HarryPotter/watch/${title}/${accessor}`}>
                <img src={`../Movies/HarryPotter/${title}/${accessor}.jpg`} alt={`${title} Poster`} height="400" />
            </Link>
            <p className="HarryPotterMovieTitle">{title}</p>
        </div>
    );
}

export default HarryPotterMovies;
