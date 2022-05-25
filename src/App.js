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
const icon_whatsapp = '/index/icons/whatsapp.svg'

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
        <h3>For Further requests or support contact me here</h3>
        <a href="https://api.whatsapp.com/send?phone=923118667776">
          <img src={icon_whatsapp}></img>
        </a>
        <h2>Firebase connected</h2>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
