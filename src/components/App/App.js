import React, { useState, useEffect } from 'react';
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
import { apiMovies } from '../../utils/MoviesApi';
import { moviesStorage } from '../../utils/storage';

const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [searchedMovies, setSearchedMovies] = useState('');
    const [isFilteredMovies, setIsFilteredMovies] = useState([]);

    const handleGetApiMovies = () => {
        apiMovies.getMovies().then((res) => {
        setMovies(() => res);
        });
    };

    const handleToggleCheckbox = () => {
        setIsChecked((prev) => !prev);
    };

    const handleSearchMovies = (data) => {
        setSearchedMovies(data);
        filteredReqMovies(data);
    };

    // хардкод для проверки изменения визуала хедера
    const handleToggleLoginStatus = () => {
        setIsLogged((prev) => !prev);
    };

    const filteredReqMovies = (data) => {
        const filteredMovies = movies.filter((item) => {
        return (
            item.nameRU.toLowerCase().includes(data.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(data.toLowerCase())
        );
        });
        moviesStorage.setDataStorage(filteredMovies);
        setIsFilteredMovies(filteredMovies);
    };

    useEffect(() => {
        handleGetApiMovies();
    }, []);

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
            <div className="body">
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="signin" element={<Login />} />
                <Route path="signup" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="movies" element={<Movies 
                    movies={movies}
                    isChecked={isChecked}
                    onToggleCheckbox={handleToggleCheckbox}
                    onSearchMovies={handleSearchMovies}
                    onGetApiMovies={handleGetApiMovies}
                />} />
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