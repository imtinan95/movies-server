/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import '../assets/movies.css';
import '../assets/navBar.css';
import { useState } from 'react';
import Movie from './Movie';

// Files
const icon_home = '/index/icons/icon_home.png';
const icon_movie = '/index/icons/icon_movie.png';
const icon_seasons = '/index/icons/icon_seasons.png';
const icon_marvel = '/index/icons/logo_marvel.jpg';
const icon_harryPotter = '/index/icons/logo_harry-potter.png';
// data list
const movies = [
    {
        title: '1917 (2019) [2160p] [4K] [BluRay] [7.1] [YTS.MX]',
        accessor: '1917.2019.2160p.4K.BluRay.x265.10bit.AAC7.1-[YTS.MX]',
    },
    {
        title: 'Big Hero 6 (2014) [1080p]',
        accessor: 'Big.Hero.6.2014.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'Cars (2006) [1080p]',
        accessor: 'Cars.2006.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Cars 2 (2011) [1080p]',
        accessor: 'Cars.2.2011.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Cars 3 (2017) [1080p]',
        accessor: 'Cars.3.2017.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Central Intelligence (2016) [1080p]',
        accessor: 'Central.Intelligence.2016.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Dracula Untold (2014) [1080p]',
        accessor: 'Dracula.Untold.2014.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'F9 (2021) [1080p]',
        accessor: 'F9.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'FallGuys',
        accessor: 'FallFies',
    },
    {
        title: 'Fantastic Beasts And Where To Find Them (2016)',
        accessor: 'Fantastic.Beasts.And.Where.To.Find.Them.2016.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Jumanji The Next Level (2019) [1080p] [BluRay] [5.1] [YTS.MX]',
        accessor: 'Jumanji.The.Next.Level.2019.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
    },

    {
        title: 'Maleficent (2014) [1080p]',
        accessor: 'Maleficent.2014.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'Maleficent Mistress Of Evil (2019) [1080p]',
        accessor: 'Maleficent.Mistress.Of.Evil.2019.1080p.BluRay.x264-[YTS.LT]',
    },
    {
        title: 'Moana (2016) [1080p]',
        accessor: 'Moana.2016.1080p.BluRay.x264-[YTS.AG]',
    },
    {
        title: 'Mr Bean (1997) [1080p]',
        accessor: 'Mr.Bean.1997.1080p.BRrip.x264.GAZ.YIFY',
    },
    {
        title: 'Mr Beans Holiday (2007) [1080p]',
        accessor: 'Mr.Beans.Holiday.2007.1080p.BRrip.x264.GAZ',
    },
    {
        title: 'Ratatouille (2007) [1080p]',
        accessor: 'Ratatouille.2007.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Raya And The Last Dragon (2021) [1080p]',
        accessor: 'Raya.And.The.Last.Dragon.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Soul (2020) [1080p]',
        accessor: 'Soul.2020.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Spies in Disguise',
        accessor: 'Spies.In.Disguise.2019.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Taken (2008) [1080p]',
        accessor: 'Taken.2008.1080pBrRip.x264.YIFY',
    },
    {
        title: 'The SpongeBob Movie Sponge On The Run (2020) [1080p]',
        accessor: 'The.SpongeBob.Movie.Sponge.On.The.Run.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Tooth Fairy (2010) [1080p]',
        accessor: 'Tooth.Fairy.2010.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'Wall-E',
        accessor: 'WALL-E.2008.1080p.BrRip.x264.YIFY',
    },
    {
        title: 'We Bare Bears The Movie (2020) [1080p]',
        accessor: 'We.Bare.Bears.The.Movie.2020.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
    },
];

export function Movies() {
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
                    <Link to="/movies/marvel">
                        <img src={icon_marvel} width="200" alt="icon_marvel" />
                    </Link>
                </div>
                <div>
                    <Link to="/movies/harrypotter">
                        <img src={icon_harryPotter} width="200" alt="icon_harryPotter" />
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
                            return <Movie title={movie.title} accessor={movie.accessor} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Movies;
