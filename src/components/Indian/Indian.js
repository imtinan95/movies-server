/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import '../../assets/movies.css';
import '../../assets/navBar.css';
import { useState } from 'react';
import IndianMovie from './IndianMovies';

// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';

// data list
const movies = [
    {
        title: 'Atrangi Re (2021) 1080p',
        accessor: 'Atrangi Re (2021) 1080p',
    },
    {
        title: 'Bhool Bhulaiyaa (2007) 1080p',
        accessor: 'Bhool Bhulaiyaa (2007) 1080p',
    },
    {
        title: 'HouseFull 2 (2012) 720p',
        accessor: 'HouseFull 2 (2012) 720p',
    },
    {
        title: 'Munna Bhai M.B.B.S. (2003) 720p',
        accessor: 'Munna Bhai M.B.B.S. (2003) 720p',
    },
    {
        title: 'Sanju (2018) 1080p',
        accessor: 'Sanju (2018) 1080p',
    },
];

export function Indian() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setInputValue('');
    }

    return (
        <div className="moviesbody">
            <nav>
                <div className="logo">
                    Ironman <br /> Practice <br />
                    Web
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            <img src={icon_home} width="50" alt="icon_home" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <img src={icon_movie} width="65" alt="icon_movie" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/seasons">
                            <img src={icon_seasons} width="65" alt="icon_seasons" />
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="SearchBox">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Search">
                        Search Movies here:
                        <input
                            type="text"
                            name="movieSearched"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Search here"
                        />
                    </label>
                </form>
            </div>

            <div className="Container-Content">
                <h1>T'is page is for Watching Movies</h1>
                <div>
                    <Link to="/movies/" className="indian">
                        Back to Movies
                    </Link>
                </div>

                <h2>
                    Library so far, will be adding more soon <br />
                    Enzoy :-)
                </h2>
                <br />

                <div className="Movies">
                    {movies
                        .filter(function (movie) {
                            return movie.title.toLowerCase().includes(inputValue.toLowerCase());
                        })
                        .map(function (movie) {
                            return <IndianMovie title={movie.title} accessor={movie.accessor} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Indian;
