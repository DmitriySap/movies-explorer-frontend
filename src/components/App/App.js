import React from 'react';
import Main from '../../pages/Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Profile from '../../pages/Profile/Profile';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import CurrentUserContext from '../../context/CurrentUserContext';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import scroll from '../../utils/scroll';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import MoviesHeader from '../MoviesHeader/MoviesHeader';

function App() {
    function isLogged() {
        return true;
    };
    //плавный скролл до якоря
    scroll();
    let location = useLocation();
    const [currentUser, setCurrentUser] = React.useState({});
    return (
        <CurrentUserContext.Provider value = {currentUser}>
            { 
                location.pathname === '/' ||
                location.pathname === '/movies' ||
                location.pathname === '/saved-movies' ||
                location.pathname === '/profile'? (
                    <Header isLogged={isLogged} /> 
                ) : null
            }
            { 
                (location.pathname !== ('/' && '/sign-in') && location.pathname !== '/sign-up') ||
                location.pathname === '/movies' ||
                location.pathname === '/saved-movies' ||
                location.pathname === '/profile'? (
                    <MoviesHeader /> 
                ) : null
            }
            <div className="body">
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="sign-in" element={<Login />} />
                <Route path="sign-up" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="movies" element={<Movies />} />
                <Route path="saved-movies" element={<SavedMovies />} />
                <Route
                    path="*" element={<PageNotFound />}
                />
                </Routes>
            </div>
            {location.pathname === '/' ||
            location.pathname === '/movies' ||
            location.pathname === '/saved-movies' ? (
            <Footer />
          ) : null}
        </CurrentUserContext.Provider>
      );
}

export default App;