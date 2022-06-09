/* eslint-disable camelcase */
import { Link } from 'react-router-dom'

//css
import './../assets/App.css'
import './../assets/indexi.css'
import '../assets/movies.css'
import '../assets/navBar.css'
import { useState, useEffect } from 'react'
import Movie from './Movie'
// import Read from './Read'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { firestore } from './Firebase'

// const data = [
//   {
//     title: 'Charlie and the Chocolate Factory (2005) [1080p]',
//     accessor:
//       'Charlie.and.the.Chocolate.Factory.2005.1080p.BrRip.x264.BOKUTOX.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FCharlie.and.the.Chocolate.Factory.2005.1080p.BrRip.x264.BOKUTOX.YIFY.jpg?alt=media&token=15d3af73-3abe-494c-a77e-e8244e7b0bff',
//   },
//   {
//     title: 'Morbius (2022) [1080p]',
//     accessor: 'Morbius.2022.1080p.WEBRip.x264.AAC-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FMorbius.2022.1080p.WEBRip.x264.AAC-%5BYTS.MX%5D.jpg?alt=media&token=6f628c02-9dda-4254-93ed-49ea151d837b',
//   },
//   {
//     title: 'The Bad Guys (2022) [1080p]',
//     accessor: 'The.Bad.Guys.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FThe.Bad.Guys.2022.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=2908a7f4-0e58-430a-b9fc-92cce8cda511',
//   },
//   {
//     title: 'Alita Battle Angel (2019)',
//     accessor: 'Alita.Battle.Angel.2019.1080p.BluRay.x264-[YTS.LT]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FAlita.Battle.Angel.2019.1080p.BluRay.x264-%5BYTS.LT%5D.jpg?alt=media&token=8565eb7d-2891-44f5-b7e4-0ccfd5aed736',
//   },
//   {
//     title: 'Alpha (2018) [BluRay] [1080p]',
//     accessor: 'Alpha.2018.1080p.BluRay.x264-[YTS.AM]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FAlpha.2018.1080p.BluRay.x264-%5BYTS.AM%5D.jpg?alt=media&token=b45ab4b5-8a8d-4801-816d-a232f8852392',
//   },
//   {
//     title: 'Big Hero 6 (2014) [1080p]',
//     accessor: 'Big.Hero.6.2014.1080p.BluRay.x264.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FBig.Hero.6.2014.1080p.BluRay.x264.YIFY.jpg?alt=media&token=0edade83-576e-41cb-a9a8-6553ca577e43',
//   },
//   {
//     title: 'Central Intelligence (2016) [1080p]',
//     accessor: 'Central.Intelligence.2016.1080p.BluRay.x264-[YTS.AG]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FCentral.Intelligence.2016.1080p.BluRay.x264-%5BYTS.AG%5D.jpg?alt=media&token=a39b673f-ed9f-46f4-8599-dd51ea2e370e',
//   },
//   {
//     title: 'FallGuys',
//     accessor: 'FallFies',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FFallFies.jpg?alt=media&token=b532ed60-c84d-4b6d-8b97-9bec69239d67',
//   },
//   {
//     title: 'Gemini Man (2019) [2160p]',
//     accessor: 'Gemini.Man.2019.1080p.Bluray.x264.Aac5.1-[Yts.Mx]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FGemini.Man.2019.1080p.Bluray.x264.Aac5.1-%5BYts.Mx%5D.jpg?alt=media&token=05b114d1-94d3-49d3-99e5-04772d6dbc9a',
//   },
//   {
//     title: 'Home Sweet Home Alone (2021) [1080p] [WEBRip] [5.1] [YTS.MX]',
//     accessor: 'Home.Sweet.Home.Alone.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FHome.Sweet.Home.Alone.2021.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=977cdc9d-ba8f-4ac7-9d55-27ac53fd642b',
//   },
//   {
//     title: 'Luca (2021) [1080p]',
//     accessor: 'Luca.2021.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FLuca.2021.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=801fa4d8-9772-46b2-b382-2af0cfb817ee',
//   },
//   {
//     title: 'Maleficent (2014) [1080p]',
//     accessor: 'Maleficent.2014.1080p.BluRay.x264.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FMaleficent.2014.1080p.BluRay.x264.YIFY.jpg?alt=media&token=9d032eb5-0f31-4e48-ab8c-94b326c8af32',
//   },
//   {
//     title: 'Maleficent Mistress Of Evil (2019) [1080p]',
//     accessor: 'Maleficent.Mistress.Of.Evil.2019.1080p.BluRay.x264-[YTS.LT]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FMaleficent.Mistress.Of.Evil.2019.1080p.BluRay.x264-%5BYTS.LT%5D.jpg?alt=media&token=5f56e90d-71a1-4db8-905f-7342309064b9',
//   },
//   {
//     title: 'Mr Bean (1997) [1080p]',
//     accessor: 'Mr.Bean.1997.1080p.BRrip.x264.GAZ.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FMr.Bean.1997.1080p.BRrip.x264.GAZ.YIFY.jpg?alt=media&token=28963b49-ef5e-45f1-b137-fed06c94712a',
//   },
//   {
//     title: 'Mr Beans Holiday (2007) [1080p]',
//     accessor: 'Mr.Beans.Holiday.2007.1080p.BRrip.x264.GAZ',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FMr.Beans.Holiday.2007.1080p.BRrip.x264.GAZ.jpg?alt=media&token=fada2ebc-38a7-40b2-afac-866ba729f89f',
//   },
//   {
//     title: 'Pirates of the Caribbean - Curse of the Black Pearl (2003) [1080p]',
//     accessor:
//       'Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FPirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY.jpg?alt=media&token=21c0583e-e3ca-47ef-899a-f11462888b42',
//   },
//   {
//     title: 'Pirates of the Caribbean - Dead Man`s Chest (2006) [1080p]',
//     accessor:
//       'Pirates.of.the.Caribbean.Dead.Mans.Chest.2006.1080p.BrRip.x264.Deceit.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FPirates.of.the.Caribbean.Dead.Mans.Chest.2006.1080p.BrRip.x264.Deceit.YIFY.jpg?alt=media&token=2f867148-1d8d-4fe0-bb19-df16260c4996',
//   },
//   {
//     title: 'Pirates of the Caribbean - At Worlds End (2007) [1080p]',
//     accessor:
//       'Pirates.of.the.Caribbean.At.Worlds.End.2007.1080p.BrRip.x264.Deceit.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FPirates.of.the.Caribbean.At.Worlds.End.2007.1080p.BrRip.x264.Deceit.YIFY.jpg?alt=media&token=c11bdde0-88cf-4afc-b236-41bcfb95e584',
//   },
//   {
//     title: 'Pirates of the Caribbean - On Stranger Tides (2011) [1080p]',
//     accessor:
//       'Pirates.of.the.Caribbean.On.Stranger.Tides.2011.1080p.BrRip.x264.Deceit.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FPirates.of.the.Caribbean.On.Stranger.Tides.2011.1080p.BrRip.x264.Deceit.YIFY.jpg?alt=media&token=d6c6e03d-df40-47a3-979c-35dc1e259699',
//   },
//   {
//     title: 'Pirates Of The Caribbean Dead Men Tell No Tales (2017) [1080p]',
//     accessor:
//       'Pirates.Of.The.Caribbean.Dead.Men.Tell.No.Tales.2017.1080p.BluRay.x264-[YTS.AG]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FPirates.Of.The.Caribbean.Dead.Men.Tell.No.Tales.2017.1080p.BluRay.x264-%5BYTS.AG%5D.jpg?alt=media&token=49fe32ab-72ec-4b47-a274-333f99e71b1e',
//   },
//   {
//     title: 'Ratatouille (2007) [1080p]',
//     accessor: 'Ratatouille.2007.1080p.BrRip.x264.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FRatatouille.2007.1080p.BrRip.x264.YIFY.jpg?alt=media&token=1cc9f6cd-cdf8-4eca-8dd9-f2dd40da483c',
//   },
//   {
//     title: 'Sonic The Hedgehog 2',
//     accessor: 'Sonic.The.Hedgehog.2.2022.1080p.x264.AAC-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FSonic.The.Hedgehog.2.2022.1080p.x264.AAC-%5BYTS.MX%5D.jpg?alt=media&token=2594d86a-90f8-4047-be68-9e73aa4c2dc8',
//   },
//   {
//     title: 'The Royal Treatment (2022) [1080p]',
//     accessor: 'The.Royal.Treatment.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FThe.Royal.Treatment.2022.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=cc2699cf-4235-4fe5-8f77-44e2fff34156',
//   },
//   {
//     title: 'Turning Red (2022) [1080p]',
//     accessor: 'Turning.Red.2022.1080p.WEBRip.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FTurning.Red.2022.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=02bce9d5-05d5-4ae9-8936-b725809b0815',
//   },
//   {
//     title: 'Unbroken (2014) [1080p]',
//     accessor: 'Unbroken.2014.1080p.BluRay.x264.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FUnbroken.2014.1080p.BluRay.x264.YIFY.jpg?alt=media&token=2c0f8b31-6f28-457a-abc0-560ee50fc211',
//   },
//   {
//     title: 'Wall-E',
//     accessor: 'WALL-E.2008.1080p.BrRip.x264.YIFY',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FWALL-E.2008.1080p.BrRip.x264.YIFY.jpg?alt=media&token=efa0ecbe-32e4-4b7f-b7d8-0cc5b7014343',
//   },
//   {
//     title: 'We Bare Bears The Movie (2020) [1080p]',
//     accessor: 'We.Bare.Bears.The.Movie.2020.1080p.BluRay.x264.AAC5.1-[YTS.MX]',
//     poster:
//       'https://firebasestorage.googleapis.com/v0/b/movie-server-c0e30.appspot.com/o/moviesPosters%2FWe.Bare.Bears.The.Movie.2020.1080p.BluRay.x264.AAC5.1-%5BYTS.MX%5D.jpg?alt=media&token=2f0e7a11-5bdc-45c9-9986-468689bdf7e7',
//   },
// ]

// Files
const icon_home = '/index/icons/icon_home.png'
const icon_movie = '/index/icons/icon_movie.png'
const icon_seasons = '/index/icons/icon_seasons.png'
const icon_marvel = '/index/icons/logo_marvel.jpg'
const icon_harryPotter = '/index/icons/logo_harry-potter.png'

export function Movies() {
  const [inputValue, setInputValue] = useState('')
  const [movies, setMovies] = useState([])

  function handleChange(event) {
    setInputValue(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setInputValue('')
  }

  // async function addMovies() {
  //   console.log('addMovies()')
  //   for (const $movie of data) {
  //     // const movieRef = addDoc(collection(firestore, 'movies'), $movie)
  //     await setDoc(doc(firestore, 'movies', $movie.accessor), $movie)
  //   }
  //   console.log('addMovies()')
  // }

  async function fetchMovies() {
    const q = await query(
      collection(firestore, 'movies'),
      orderBy('title', 'asc')
    )
    const querySnapshot = await getDocs(q)
    const $movies = []
    querySnapshot.forEach(($doc) => {
      $movies.push({ id: $doc.id, ...$doc.data() })
    })
    setMovies($movies)
  }

  async function addMovie({ accessor, poster, title }) {
    await setDoc(doc(firestore, 'movies', accessor), {
      accessor,
      poster,
      title,
    })
  }

  useEffect(() => {
    ;(async function () {
      // await addMovies()
      await fetchMovies()
      // addMovie({
      //   accessor: 'my_new_accessor',
      //   poster: 'http://www.google.com/',
      //   title: 'My New Movie',
      // })
    })()
  }, [])

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
        <h1>T'is pPoster is for Watching Movies</h1>
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
        <div>{/* <Read /> */}</div>
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
                  key={movie.id}
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
