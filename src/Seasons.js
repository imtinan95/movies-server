import { Link } from 'react-router-dom'
import './assets/seasons.css'

import Header from './components/layouts/Header'

const icon_bighero6 = '/index/icons/logo_bighero6.png'
const icon_moonknight =
  'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FPoster.jpg?alt=media&token=ea4e3fbf-927b-4c47-b3d0-8f59d6a5b1f8'
const icon_msmarvel =
  'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmsmarvel%2FPoster.jpg?alt=media&token=b00e1f9e-b470-4b78-98d6-a0c24786c0ac'

export function Seasons() {
  return (
    <div className="seasonbody">
      <Header />
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
        <div className="Seasons">
          <Link to="/seasons/moonknight">
            <img src={icon_moonknight} width="200" alt="icon_moonknight" />
          </Link>
        </div>
        <div className="Seasons">
          <Link to="/seasons/msmarvel">
            <img src={icon_msmarvel} width="200" alt="icon_msmarvel" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Seasons
