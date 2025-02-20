import About from 'pages/AboutPage/ui/About';
import { AboutPageAsync } from 'pages/AboutPageLazy';
import Main from 'pages/ManePage/ui/Main';
import { MAinPageAsync } from 'pages/MainPageLazy';
import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
    
    return (
        <div className='app'>
            <Link to={'/'} > Главная</Link>
            <Link to={'/about'} >О нас</Link>
     
        <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
        <Route
                        path={'/about'}
                        element={<AboutPageAsync />}> 
            </Route>
            <Route
                        path={'/'}
                        element={<MAinPageAsync />}> 
            </Route>
            </Routes>
      </Suspense>
       
        </div>

    )
}

export default App;