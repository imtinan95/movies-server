/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import './assets/seasons.css';
import './assets/navBar.css';

// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';

export function Seasons() {
    return (
        <div className="seasonbody">
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

            <div className="Seasons-Content">
                <h1>T'is page is for Watching Seasons</h1>
                <h2>
                    Library so far, will be adding more soon <br />
                    Enzoy :-)
                </h2>
                <h3 className="SeasonTitle">Big Hero 6 Series</h3>
                <div className="Seasons">
                    {/* <!-- S01E01 --> */}
                    <div className="EpisodeBox">
                        <a href="./index_data/Seasons/Big Hero 6/Season 1/Big.Hero.6.The.Series.S01E01E02.1080p.WEB-DL.mkv">
                            <img
                                src="./index_data/Seasons/Big Hero 6/Season 1/Big.Hero.6.The.Series.jpg"
                                alt="S01E01 Poster"
                                width="180"
                            />
                        </a>
                        <p className="EpisodeTitle">E01. Baymax Returns</p>
                    </div>

                    {/* <!-- S01E02 --> */}
                    <div className="EpisodeBox">
                        <a href="./index_data/Seasons/Big Hero 6/Season 1/Big.Hero.6.The.Series.S01E03.1080p.WEB-DL.mkv">
                            <img
                                src="./index_data/Seasons/Big Hero 6/Season 1/Big.Hero.6.The.Series - Blue.jpg"
                                alt="S01E01 Poster"
                                width="180"
                            />
                        </a>
                        <p className="EpisodeTitle">E02. Issue 188</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seasons;
