import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import scroll from '../../utils/smoothScroll';
import Main from '../../pages/Main/Main';
import Nails from '../../pages/Nails/Nails';
import Hairstyle from '../../pages/Hairstyle/Hairstyle';
import Other from '../../pages/Other/Other';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

const App = () => {
    //плавный скролл до якоря
    useEffect(() => {
      scroll()
    }, [])
    return (
      <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/nail-services' element={<Nails />} />
        <Route path='/hairdressing-services' element={<Hairstyle />} />
        <Route path='/other' element={<Other />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </>
      )
}

export default App;