/* eslint-disable camelcase */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/marvel.css'
import MarvelMovies from './MarvelMovies'
// Files
const icon_home = '/index/icons/icon_home.png'
const icon_movie = '/index/icons/icon_movie.png'
const icon_seasons = '/index/icons/icon_seasons.png'
const icon_marvel = '/index/icons/logo_marvel.jpg'

// data list
const phase1 = [
  {
    title: 'Iron Man (2008) [1080p]',
    accessor: 'Iron.Man.2008.1080p.BrRip.x264.YIFY',
  },
  {
    title: 'Iron Man 2 (2010) [1080p]',
    accessor: 'Iron.Man.2.2010.1080p.BrRip.x264.YIFY',
  },
  {
    title: 'Thor (2011) [1080p]',
    accessor: 'Thor.2011.1080p.BrRip.x264.YIFY+HI',
  },
  {
    title: 'Captain America - The First Avenger (2011)',
    accessor: 'Captain.America.The.First.Avenger.1080p.BrRip.x264.YIFY',
  },
  {
    title: 'The Avengers (2012) [1080p]',
    accessor: 'The.Avengers.2012.1080p.BluRay.x264.YIFY',
  },
]
const phase2 = [
  {
    title: 'Iron Man 3 (2013) [1080p]',
    accessor: 'Iron.Man.3.2013.1080p.BluRay.x264.YIFY',
  },
  {
    title: 'Thor The Dark World (2013) [1080p]',
    accessor: 'Thor.The.Dark.World.2013.1080p.BluRay.x264.YIFY',
  },
  {
    title: 'Captain America The Winter Soldier (2014) [1080p]',
    accessor: 'Captain.America.The.Winter.Soldier.2014.1080p.BluRay.x264.YIFY',
  },
  {
    title: 'Guardians of the Galaxy (2014) [1080p]',
    accessor: 'Guardians.of.the.Galaxy.2014.1080p.BluRay.x264.YIFY',
  },
  {
    title: 'Avengers Age of Ultron (2015) [1080p]',
    accessor: 'Avengers.Age.of.Ultron.2015.1080p.BluRay.x264.YIFY',
  },
  {
    title: 'Ant-Man (2015) [1080p]',
    accessor: 'Ant-Man.2015.1080p.BluRay.x264.[YTS.AG]',
  },
]
const phase3 = [
  {
    title: 'Captain America Civil War (2016) [1080p]',
    accessor: 'Captain.America.Civil.War.2016.1080p.BluRay.x264-[YTS.AG]',
  },
  {
    title: 'Doctor Strange (2016) [1080p]',
    accessor: 'Doctor.Strange.2016.1080p.BluRay.x264-[YTS.AG]',
  },
  {
    title: 'Guardians Of The Galaxy Vol. 2 (2017) [1080p]',
    accessor: 'Guardians.Of.The.Galaxy.Vol..2.2017.1080p.BluRay.x264-[YTS.AG]',
  },
  {
    title: 'Spider-Man Homecoming (2017) [1080p]',
    accessor: 'Spider-Man.Homecoming.2017.1080p.BluRay.x264-[YTS.AG]',
  },
  {
    title: 'Thor Ragnarok (2017) [1080p]',
    accessor: 'Thor.Ragnarok.2017.1080p.BluRay.x264-[YTS.AM]',
  },
  {
    title: 'Black Panther (2018) [1080p]',
    accessor: 'Black.Panther.2018.1080p.BluRay.x264-[YTS.AM]',
  },
  {
    title: 'Avengers Infinity War (2018) [1080p]',
    accessor: 'Avengers.Infinity.War.2018.1080p.BluRay.x264-[YTS.AM]',
  },
  {
    title: 'Ant-Man And The Wasp (2018) [1080p]',
    accessor: 'Ant-Man.And.The.Wasp.2018.1080p.BluRay.x264-[YTS.AM]',
  },
  {
    title: 'Captain Marvel (2019) [1080p]',
    accessor: 'Captain.Marvel.2019.1080p.BluRay.x264-[YTS.AM]',
  },
  {
    title: 'Avengers Endgame (2019) [1080p]',
    accessor: 'Avengers.Endgame.2019.1080p.BluRay.x264-[YTS.LT]',
  },
  {
    title: 'Spider-Man Far From Home (2019) [1080p]',
    accessor: 'Spider-Man.Far.From.Home.2019.1080p.BluRay.x264-[YTS.LT]',
  },
]
const phase4 = [
  {
    title: 'Spider-Man No Way Home (2021) [1080p]',
    accessor: 'Spider-Man.No.Way.Home.2021.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
  },
  {
    title: 'Spider-Man Into The Spider-Verse (2018) [1080p]',
    accessor:
      'Spider-Man.Into.The.Spider-Verse.2018.1080p.BluRay.x264-[YTS.AM]',
  },
]
export function Marvel() {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setInputValue('')
  }
  return (
    <div className="MarvelBody">
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

      <h1 className="StyleTextAlignCenter">
        Tis page is dedicated for Marvel Movies
      </h1>
      <div className="StyleTextAlignCenter">
        <Link to="/movies/">
          <img src={icon_marvel} width="200" alt="icon_marvel" />
        </Link>
      </div>

      {/* Phase 1 */}
      <div className="Container-Content">
        <h2 className="StyleTextAlignCenter">Phase - I</h2>
        <br />
        <div className="MarvelMovies">
          {phase1
            .filter(function (movie) {
              return movie.title
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            })
            .map(function (movie) {
              return (
                <MarvelMovies title={movie.title} accessor={movie.accessor} />
              )
            })}
        </div>
      </div>
      {/* Phase2 Series */}
      <div className="Container-Content">
        <h2 className="StyleTextAlignCenter">Phase - II</h2>
        <br />
        <div className="MarvelMovies">
          {phase2
            .filter(function (movie) {
              return movie.title
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            })
            .map(function (movie) {
              return (
                <MarvelMovies title={movie.title} accessor={movie.accessor} />
              )
            })}
        </div>
      </div>
      {/* Phase 3 Series */}
      <div className="Container-Content">
        <h2 className="StyleTextAlignCenter">Phase - III</h2>
        <br />
        <div className="MarvelMovies">
          {phase3
            .filter(function (movie) {
              return movie.title
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            })
            .map(function (movie) {
              return (
                <MarvelMovies title={movie.title} accessor={movie.accessor} />
              )
            })}
        </div>
      </div>
      {/* Phase 4 Series */}
      <div className="Container-Content">
        <h2 className="StyleTextAlignCenter">Phase - IV</h2>
        <br />
        <div className="MarvelMovies">
          {phase4
            .filter(function (movie) {
              return movie.title
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            })
            .map(function (movie) {
              return (
                <MarvelMovies title={movie.title} accessor={movie.accessor} />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Marvel
