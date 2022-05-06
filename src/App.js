/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

//css
import './assets/App.css'
import './assets/indexi.css'
import './assets/navBar.css'
// Files
const icon_home = '/index/icons/icon_home.png'
const icon_movie = '/index/icons/icon_movie.png'
const icon_seasons = '/index/icons/icon_seasons.png'

function Home() {
  return (
    <div className="App">
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
      <div>
        <h1>T'is is HomePage of my Website</h1>
        <br />
        <h3>Tap on Movies' Icon to start watching</h3>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
