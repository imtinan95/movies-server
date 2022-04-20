/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import '../../assets/navBar.css';

// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';

export function Header() {
    return (
        <div>
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
        </div>
    );
}

export default Header;
