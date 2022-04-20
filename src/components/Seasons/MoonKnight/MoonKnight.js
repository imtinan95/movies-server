/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import Header from '../../layouts/Header'
import MoonKnightSeason from './MoonKnightSeason'
import './moonknight.css'

// Files
const icon_moonknight =
  'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FText.png?alt=media&token=698bdeb2-e579-4c30-8a4a-6f8fdde7e70b'

// data list
const moon = [
  {
    title: 'Episode 1',
    accessor: 'Moon Knight S01E01',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FText.png?alt=media&token=698bdeb2-e579-4c30-8a4a-6f8fdde7e70b',
  },
  {
    title: 'Episode 2',
    accessor: 'Moon Knight S01E02',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FText.png?alt=media&token=698bdeb2-e579-4c30-8a4a-6f8fdde7e70b',
  },
  {
    title: 'Episode 3',
    accessor: 'Moon Knight S01E03',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FText.png?alt=media&token=698bdeb2-e579-4c30-8a4a-6f8fdde7e70b',
  },
  {
    title: 'Episode 4',
    accessor: 'Moon Knight S01E04',
    poster:
      'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/seasons%2Fmoonknight%2FText.png?alt=media&token=698bdeb2-e579-4c30-8a4a-6f8fdde7e70b',
  },
]

export function MoonKnight() {
  return (
    <div className="moonbody">
      <Header />
      <div className="Moon-Content">
        <h1>Watch Marvel's Moon Knight here</h1>
        <div>
          <Link to="/Seasons">
            <img src={icon_moonknight} width="200" alt="icon_moonknight" />
          </Link>
        </div>
        <br />
        <div className="Moons">
          {moon.map(function (moon) {
            return (
              <MoonKnightSeason
                title={moon.title}
                accessor={moon.accessor}
                poster={moon.poster}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MoonKnight
