/* eslint-disable camelcase */
import { Link } from 'react-router-dom'

//css
import './../assets/App.css'
import './../assets/indexi.css'
import '../assets/movies.css'
import '../assets/navBar.css'
import { useState } from 'react'
import Movie from './Movie'

// Files
const icon_home = '/index/icons/icon_home.png'
const icon_movie = '/index/icons/icon_movie.png'
const icon_seasons = '/index/icons/icon_seasons.png'
const icon_marvel = '/index/icons/logo_marvel.jpg'
const icon_harryPotter = '/index/icons/logo_harry-potter.png'
// data list
const movies = [
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
  {
    title: 'Harold Kumar Go To Amsterdam (2008) [BLURAY] [1080p] [BluRay] [5.1] [YTS.BZ]',
    accessor: 'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ]',
    poster:
      'Harold.Kumar.Go.To.Amsterdam.2008.BLURAY.1080p.BluRay.x264.AAC5.1-[YTS.BZ].jpg',
  },
]

export function Movies() {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setInputValue('')
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
              return movie.title
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            })
            .map(function (movie) {
              return (
                <Movie
                  key={movie.accessor || movie.title}
                  title={movie.title}
                  accessor={movie.accessor}
                  poster={movie.poster}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Movies
