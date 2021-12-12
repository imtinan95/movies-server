/* eslint-disable camelcase */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/bighero6.css';
import Bighero6seasons from './Bighero6Season';
// import HarryPotterMovies from './HarryPotterMovies';
// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';
const icon_bighero6 = '/index/icons/logo_bighero6.png';

// movies list
const bighero6 = [
    {
        title: 'Episode 1',
        accessor: 'Episode1',
    },
];

export function HarryPotter() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setInputValue('');
    }
    return (
        <div className="HarryPotterBody">
            <nav>
                <div className="logo">Ironman - Practice Web</div>
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
                    <label htmlFor="search">
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

            <h1 className="StyleTextAlignCenter">1080p uploads of Big Hero The Series</h1>
            <div className="StyleTextAlignCenter">
                <Link to="/Seasons/">
                    <img src={icon_bighero6} width="200" alt="icon_HarryPotter" />
                </Link>
            </div>

            {/* Series */}
            <div className="Container-Content">
                <h2 className="StyleTextAlignCenter">Season 1</h2>
                <br />
                <div className="Season">
                    {bighero6
                        .filter(function (seasons) {
                            return seasons.title.toLowerCase().includes(inputValue.toLowerCase());
                        })
                        .map(function (seasons) {
                            return <Bighero6seasons title={seasons.title} accessor={seasons.accessor} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default HarryPotter;
