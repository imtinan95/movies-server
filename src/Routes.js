import React, { Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import Home from "./App"
import MovieView from './components/MovieView'
import MarvelMovieView from './components/MarvelMovieView.js'
import HarryPotterMovieView from './components/_HarryPotter/HarryPotterMovieView.js'
import IndianMovieView from './components/Indian/IndianMovieView'
import Bighero6SeasonView from './components/Seasons/bighero6/Bighero6SeasonView.js'
import MoonKnightSeasonView from './components/Seasons/MoonKnight/MoonKnightSeasonView.js'
import MsMarvelSeasonView from './components/Seasons/msmarvel/MsMarvelSeasonView.js'
import Matroska from './components/matroska.js'

const Home = React.lazy(() => import('./App'))
const Movies = React.lazy(() => import('./components/Movies'))
const Seasons = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./Seasons')), 100)
    })
)
const Marvel = React.lazy(() => import('./components/Marvel'))
const HarryPotter = React.lazy(() =>
  import('./components/_HarryPotter/HarryPotter')
)
const Indian = React.lazy(() => import('./components/Indian/Indian'))
const BigHero6 = React.lazy(() =>
  import('./components/Seasons/bighero6/Bighero6')
)
const MoonKnight = React.lazy(() =>
  import('./components/Seasons/MoonKnight/MoonKnight')
)
const MsMarvel = React.lazy(() =>
  import('./components/Seasons/msmarvel/MsMarvel')
)

function Routes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <h1
            style={{
              color: 'white',
              backgroundColor: 'wheat',
            }}
          >
            Loading
          </h1>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/seasons">
            <Seasons />
          </Route>
          <Route exact path="/movies/watch/:title/:accessor">
            <MovieView />
          </Route>
          <Route exact path="/movies/marvel">
            <Marvel />
          </Route>
          <Route exact path="/movies/marvel/watch/:title/:accessor">
            <MarvelMovieView />
          </Route>
          <Route exact path="/movies/harrypotter">
            <HarryPotter />
          </Route>
          <Route exact path="/movies/harrypotter/watch/:title/:accessor">
            <HarryPotterMovieView />
          </Route>
          <Route exact path="/movies/indian">
            <Indian />
          </Route>
          <Route exact path="/movies/indian/watch/:title/:accessor">
            <IndianMovieView />
          </Route>
          <Route exact path="/seasons/bighero6">
            <BigHero6 />
          </Route>
          <Route exact path="/seasons/bighero6/watch/:title/:accessor">
            <Bighero6SeasonView />
          </Route>
          <Route exact path="/seasons/moonknight">
            <MoonKnight />
          </Route>
          <Route exact path="/seasons/moonknight/watch/:title/:accessor">
            <MoonKnightSeasonView />
          </Route>
          <Route exact path="/seasons/msmarvel">
            <MsMarvel />
          </Route>
          <Route exact path="/seasons/msmarvel/watch/:title/:accessor">
            <MsMarvelSeasonView />
          </Route>

          <Route exact path="/mkv">
            <Matroska />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
export default Routes
