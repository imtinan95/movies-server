import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Home from "./App"
import MovieView from './components/MovieView';
import MarvelMovieView from './components/MarvelMovieView.js';
import Matroska from './components/matroska.js';
import HarryPotterMovieView from './components/_HarryPotter/HarryPotterMovieView.js';

const Home = React.lazy(() => import('./App'));
const Movies = React.lazy(() => import('./components/Movies'));
const HarryPotter = React.lazy(() => import('./components/_HarryPotter/HarryPotter'));
const Seasons = React.lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./Seasons')), 100);
        })
);
const Marvel = React.lazy(() => import('./components/Marvel'));
function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1 style={{ color: 'white', backgroundColor: 'wheat' }}>Loading</h1>}>
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
                    <Route exact path="/mkv">
                        <Matroska />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
export default Routes;
