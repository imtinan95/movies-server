/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import './assets/seasons.css';
import './assets/navBar.css';

// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';
const icon_bighero6 = '/index/icons/logo_bighero6.png';

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
                <div className="Seasons">
                    <Link to="/seasons/bighero6">
                        <img src={icon_bighero6} width="200" alt="icon_bighero6" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Seasons;
