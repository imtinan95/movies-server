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
        title: 'The Chronicles of Narnia - The Lion, The Witch, and The Wardrobe (2005) [1080p]',
        accessor: 'The.Chronicles.of.Narnia.The.Lion.The Witch.And.The.Wardrobe.2005.1080p.Brrip.x264.Deceit.YIFY',
    },
    {
        title: 'The Chronicles of Narnia -  Prince Caspian (2008) [1080p]',
        accessor: 'The.Chronicles.of.Narnia.Prince.Caspian.2008.1080p.Brrip.x264.Deceit.YIFY',
    },
    {
        title: 'Eternals (2021) [1080p] [WEBRip] [5.1] [YTS.MX]',
        accessor: 'Eternals.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
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
        title: 'Encanto (2021) [1080p]',
        accessor: 'Encanto.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
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
        title: 'Gemini Man (2019) [2160p]',
        accessor: 'Gemini.Man.2019.1080p.Bluray.x264.Aac5.1-[Yts.Mx]',
    },
    {
        title: 'Home Sweet Home Alone (2021) [1080p] [WEBRip] [5.1] [YTS.MX]',
        accessor: 'Home.Sweet.Home.Alone.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Hotel Transylvania (2012) [1080p]',
        accessor: 'Hotel.Transylvania.2012.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'Hotel Transylvania 2 (2015) [1080p]',
        accessor: 'Hotel.Transylvania.2.2015.1080p.BluRay.x264.[YTS.AG]',
    },
    {
        title: 'Hotel Transylvania Transformania (2022) [1080p] [WEBRip] [5.1] [YTS.MX]',
        accessor: 'Hotel.Transylvania.Transformania.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
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
        title: 'Jungle Cruise (2021) [1080p] [BluRay] [5.1] [YTS.MX]',
        accessor: 'Jungle.Cruise.2021.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
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
        title: 'No Time To Die (2021) [1080p]',
        accessor: 'No.Time.To.Die.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
    },
    {
        title: 'Pirates of the Caribbean - Curse of the Black Pearl (2003) [1080p]',
        accessor: 'Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY',
    },
    {
        title: 'Pirates of the Caribbean - Dead Man`s Chest (2006) [1080p]',
        accessor: 'Pirates.of.the.Caribbean.Dead.Mans.Chest.2006.1080p.BrRip.x264.Deceit.YIFY',
    },
    {
        title: 'Pirates of the Caribbean - At Worlds End (2007) [1080p]',
        accessor: 'Pirates.of.the.Caribbean.At.Worlds.End.2007.1080p.BrRip.x264.Deceit.YIFY',
    },
    {
        title: 'Pirates of the Caribbean - On Stranger Tides (2011) [1080p]',
        accessor: 'Pirates.of.the.Caribbean.On.Stranger.Tides.2011.1080p.BrRip.x264.Deceit.YIFY',
    },
    {
        title: 'Pirates Of The Caribbean Dead Men Tell No Tales (2017) [1080p]',
        accessor: 'Pirates.Of.The.Caribbean.Dead.Men.Tell.No.Tales.2017.1080p.BluRay.x264-[YTS.AG]',
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
        title: 'Real Steel (2011) [1080p]',
        accessor: 'Real.Steel.2011.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'Sonic The Hedgehog (2020) [1080p]',
        accessor: 'Sonic.The.Hedgehog.2020.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
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
        title: 'Tangled (2010) [1080p]',
        accessor: 'Tangled.2010.1080p.BluRay.x264.YIFY',
    },
    {
        title: 'The Day After Tomarrow (2004) [1080p]',
        accessor: 'The.Day.After.Tomarrow.2004.1080p.BrRip.x264.YIFY',
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
                <div>
                    <Link to="/movies/indian" className="indian">
                        Indian Movies
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
