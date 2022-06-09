/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import Header from '../../layouts/Header'
import MsMarvelSeason from './MsMarvelSeason'
import './MsMarvel.css'

// Files
const icon_MsMarvel =
  'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmsmarvel%2FText.png?alt=media&token=307d9383-6ea8-4962-b04e-5cd2f35e49d5'

// data list
const msMarvel = [
  {
    title: 'Episode 1',
    accessor: 'Ms. Marvel S01E01',
    poster: '',
  },
]

export function MsMarvel() {
  return (
    <div className="marvelbody">
      <Header />
      <div className="Marvel-Content">
        <h1>Watch Marvel's Ms. Marvel here</h1>
        <div>
          <Link to="/Seasons">
            <img src={icon_MsMarvel} width="200" alt="icon_MsMarvel" />
          </Link>
        </div>
        <br />
        <div className="Marvels">
          {msMarvel.map(function (marvel) {
            return (
              <MsMarvelSeason
                title={marvel.title}
                accessor={marvel.accessor}
                poster={marvel.poster}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MsMarvel
