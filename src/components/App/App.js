import React, { useState, useEffect } from 'react';
import Main from '../../pages/Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Profile from '../../pages/Profile/Profile';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import scroll from '../../utils/scroll';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import MoviesHeader from '../MoviesHeader/MoviesHeader';
import { apiMovies } from '../../utils/MoviesApi';
import { moviesStorage, searchReqStorage, jwtToken, checkboxStatus } from '../../utils/storage';
import { DESKTOP_CARD_QUANTITY, MOBILE_CARD_QUANTITY, TABLET_CARD_QUANTITY, TIME_DURATION, MESSAGE_EDIT_COMPLETE } from '../../utils/constants';
import { authApi } from '../../utils/Auth';
import { savedMoviesApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

const App = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [searchedMovies, setSearchedMovies] = useState('');
    const [isFilteredMovies, setIsFilteredMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [slicedMovies, setSlicedMovies] = useState([]);
    const [resizeState, setResizeState] = useState(DESKTOP_CARD_QUANTITY);
    const [authError, setAuthError] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [savedUserMovies, setSavedUserMovies] = useState([]);
    const [isLoadingApp, setIsLoadingApp] = useState(true);
    const [errorStatus, setErrorStatus] = useState(false);

    const handleGetApiMovies = async () => {
      setIsLoading(() => true);
      try {
        const res = await apiMovies.getMovies();
        setMovies(() => res);
      } catch (err) {
        console.log(err);
        setErrorStatus(true);
      } finally {
        setIsLoading(() => false);
      }
    };

    const handleToggleCheckbox = () => {
        setIsChecked((prev) => !prev);
    };

    const handleSetAuthError = (err) => {
      setAuthError(err);
    };

    const handleSetErrorStatus = (status) => {
      setErrorStatus(status);
    };

    const handleSetSavedUserMovies = (newMovieList) => {
      setSavedUserMovies(newMovieList);
    };

    const handleLogOutUser = () => {
      setIsLogged(false);
      setUserInfo({});
      setMovies([]);
      setSearchedMovies('');
      setIsChecked(false);
      setIsFilteredMovies([]);
      setSlicedMovies([]);
      setSavedUserMovies([]);
      setAuthError('');
      jwtToken.removeItemDataStorage();
      moviesStorage.removeItemDataStorage();
      searchReqStorage.removeItemDataStorage();
      checkboxStatus.removeItemDataStorage();
      navigate('/');
    };

    const handleCheckboxToggle = async () => {
        const searchReq = searchReqStorage.getDataStorage();
        await checkboxStatus.getDataStorage();
        if (movies.length) {
          setSearchedMovies(searchReq);
          filteredReqMovies(searchReq);
        }
        checkboxStatus.setDataStorage(isChecked);
      };

      const handlerToggleResize = () => {
        if (window.innerWidth > 1280) {
          setResizeState(DESKTOP_CARD_QUANTITY);
        } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
          setResizeState(TABLET_CARD_QUANTITY);
        } else if (window.innerWidth < 768) {
          setResizeState(MOBILE_CARD_QUANTITY);
        }
      };

      const handleSetUserInfo = async (newInfo) => {
        try {
          const res = await authApi.editProfile(newInfo.name, newInfo.email);
          setUserInfo(res);
          setAuthError(MESSAGE_EDIT_COMPLETE);
        } catch (err) {
          if (err.status) {
            handleLogOutUser();
          }
          setAuthError(err.message);
        }
      };

      const handleChechToken = async () => {
        const token = jwtToken.getDataStorage();
        if (token) {
          try {
            const res = await authApi.checkToken(token);
            setIsLogged(true);
            setUserInfo({
              name: res.name,
              email: res.email,
            });
            setIsLoadingApp(false);
          } catch (err) {
            if (err.status) {
              handleLogOutUser();
            }
            setIsLogged(false);
            navigate('/');
            console.log(err.message);
          }
        }
        setIsLoadingApp(false);
      };

      const handleSearchMovies = (searchReq) => {
        setSearchedMovies(searchReq);
        filteredReqMovies(searchReq);
        searchReqStorage.setDataStorage(searchReq);
        checkboxStatus.setDataStorage(isChecked);
      };

    const getStartSliceMovies = (slicedArr) => {
        if (slicedArr) {
          const newArr = slicedArr.slice(0, resizeState.cards);
          setSlicedMovies(newArr);
        }
      };

    const handleGetStorageData = async () => {
        const movies = await moviesStorage.getDataStorage();
        const chechbox = await checkboxStatus.getDataStorage();
        const searchReq = await searchReqStorage.getDataStorage();
        if (movies) {
          setIsFilteredMovies(movies);
        }
        if (chechbox) {
          setIsChecked(() => chechbox);
        }
        if (searchReq) {
          setSearchedMovies(searchReq);
        }
        getStartSliceMovies(movies);
      };

      const filteredReqMovies = (searchReq) => {
        if (searchReq) {
          const filteredMovies = movies.filter((item) => {
            const titleRU = item.nameRU
              .toLowerCase()
              .includes(searchReq.toLowerCase());
            const titleEN = item.nameEN
              .toLowerCase()
              .includes(searchReq.toLowerCase());
            if (isChecked && item.duration <= TIME_DURATION) {
              return titleRU || titleEN;
            } else if (!isChecked && item.duration > TIME_DURATION) {
              return titleRU || titleEN;
            }
          });
          moviesStorage.setDataStorage(filteredMovies);
          setIsFilteredMovies(filteredMovies);
          getStartSliceMovies(filteredMovies);
        }
      };

    const handlePaginateMovies = () => {
        const endMoviesList = slicedMovies.length;
        const newLength = slicedMovies.length + resizeState.more;
        const newArr = isFilteredMovies.slice(endMoviesList, newLength);
        setSlicedMovies([...slicedMovies, ...newArr]);
      };

      const handleAuthorizationUser = async (email, password) => {
        try {
          const res = await authApi.login(email, password);
          if (res.token) {
            jwtToken.setDataStorage(res.token);
            setIsLogged(() => true);
            navigate('/movies');
          }
        } catch (err) {
          setAuthError(err.message);
        }
      };

      const handleLikeMovies = async (movieCard) => {
        try {
          const res = await savedMoviesApi.savedMovie(movieCard);
          setSavedUserMovies([...savedUserMovies, res]);
        } catch (err) {
          if (err.status) {
            handleLogOutUser();
          }
          console.log(err.message);
        }
      };
    
      const handleDislikeMovies = async (id) => {
        try {
          await savedMoviesApi.deleteMovie(id);
          const afterDelMovie = savedUserMovies.filter((item) => item._id !== id);
          setSavedUserMovies(afterDelMovie);
        } catch (err) {
          if (err.status) {
            handleLogOutUser();
          }
          console.log(err.message);
        }
      };

      const handleGetSavedMovies = async () => {
        setErrorStatus(false);
        setIsLoading(() => true);
        try {
          const res = await savedMoviesApi.getSavedMovies();
          setSavedUserMovies(res);
        } catch (err) {
          if (err.status) {
            handleLogOutUser();
          }
          setErrorStatus(true);
        } finally {
          setIsLoading(() => false);
        }
      };

      const handleRegistrationUser = async (name, email, password) => {
        try {
          await authApi.register(name, email, password);
          handleAuthorizationUser(email, password);
        } catch (err) {
          setAuthError(err.message);
        }
      };

    useEffect(() => {
        handleGetApiMovies();
    }, []);

    useEffect(() => {
      window.addEventListener('resize', handlerToggleResize);
  
      return () => {
        window.addEventListener('resize', handlerToggleResize);
      };
    }, []);

    useEffect(() => {
      handleChechToken();
    }, [isLogged]);

    //плавный скролл до якоря
    scroll();
    let location = useLocation();
    return (
      <>
      {isLoadingApp ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value = {userInfo}>
            {isLogged  ? (
              <MoviesHeader />
            ) : (
              <Header />
            )
            }
            <div className="body">
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="signin" element={<Login 
                  isLogged={isLogged}
                  authError={authError}
                  onAuthUser={handleAuthorizationUser}
                  onSetAuthError={handleSetAuthError}
                />} />
                <Route path="signup" element={<Register 
                  isLogged={isLogged}
                  authError={authError}
                  onRegisterUser={handleRegistrationUser}
                  onSetAuthError={handleSetAuthError}
                />} />
                <Route path="profile" element={
                  <ProtectedRoute isLogged={isLogged}>
                    <Profile 
                      authError={authError}
                      onLogOutUser={handleLogOutUser}
                      onSetUserInfo={handleSetUserInfo}
                      onSetErrorInfo={handleSetAuthError}
                      onChechToken={handleChechToken}
                    />
                  </ProtectedRoute>
                } />
                <Route path="movies" element={
                  <ProtectedRoute isLogged={isLogged}>
                    <Movies 
                        movies={slicedMovies}
                        isChecked={isChecked}
                        isLoading={isLoading}
                        moviesInStorage={isFilteredMovies}
                        userMovies={savedUserMovies}
                        errorStatus={errorStatus}
                        searchRequire={searchedMovies}
                        onGetApiMovies={handleGetApiMovies}
                        onToggleCheckbox={handleToggleCheckbox}
                        onSearchMovies={handleSearchMovies}
                        onPaginateMovies={handlePaginateMovies}
                        onGetStorageData={handleGetStorageData}
                        onLikeMovie={handleLikeMovies}
                        onGetSavedMovies={handleGetSavedMovies}
                        onDislikeMovies={handleDislikeMovies}
                        onCheckboxToggle={handleCheckboxToggle}
                    />
                  </ProtectedRoute>
                } />
                <Route path="saved-movies" element={
                  <ProtectedRoute isLogged={isLogged}>
                    <SavedMovies 
                    userMovies={savedUserMovies}
                    isChecked={isChecked}
                    errorStatus={errorStatus}
                    isLoading={isLoading}
                    onGetSavedMovies={handleGetSavedMovies}
                    onDislikeMovies={handleDislikeMovies}
                    onSetSavedUserMovies={handleSetSavedUserMovies}
                    onToggleCheckbox={handleToggleCheckbox}
                    onSetErrorStatus={handleSetErrorStatus}
                    onChechToken={handleChechToken}
                  />
                  </ProtectedRoute>
                } />
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
      )}
        </>
      );
}

export default App;