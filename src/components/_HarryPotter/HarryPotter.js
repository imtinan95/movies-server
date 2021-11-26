/* eslint-disable camelcase */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/hp.css';
import HarryPotterMovies from './HarryPotterMovies';
// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';
const icon_HarryPotter = '/index/icons/logo_harry-potter.png';

// movies list
const harryPotter = [
    {
        title: 'Harry Potter and the Sorcerers Stone (2001)',
        accessor: 'Harry.Potter.and.the.Sorcerers.Stone.2001.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Chamber of Secrets (2002)',
        accessor: 'Harry.Potter.and.the.Chamber.of.Secrets.2002.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban (2004)',
        accessor: 'Harry.Potter.and.the.Prisoner.of.Azkaban.2004.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Goblet of Fire (2005)',
        accessor: 'Harry.Potter.and.the.Goblet.of.Fire.2005.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Order of the Phoenix (2007)',
        accessor: 'Harry.Potter.and.the.Order.of.the.Phoenix.2007.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Half Blood Prince (2009)',
        accessor: 'Harry.Potter.and.the.Half.Blood.Prince.2009.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter and the Deathly Hallows Part 1 (2010)',
        accessor: 'Harry.Potter.and.the.Deathly.Hallows.Part.1.2010.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Harry Potter And The Deathly Hallows Part 2 (2011)',
        accessor: 'Harry.Potter.And.The.Deathly.Hallows.Part.2.2011.1080p.BrRip.264.YIFY',
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

            <h1 className="StyleTextAlignCenter">T'is page is dedicated for Harry Potter Movies, everyone is 1080p</h1>
            <div className="StyleTextAlignCenter">
                <Link to="/movies/">
                    <img src={icon_HarryPotter} width="200" alt="icon_HarryPotter" />
                </Link>
            </div>

            {/* Harry Potter Series */}
            <div className="Container-Content">
                <h2 className="StyleTextAlignCenter">Harry Potter Series</h2>
                <br />
                <div className="Movies">
                    {harryPotter
                        .filter(function (movie) {
                            return movie.title.toLowerCase().includes(inputValue.toLowerCase());
                        })
                        .map(function (movie) {
                            return <HarryPotterMovies title={movie.title} accessor={movie.accessor} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default HarryPotter;
