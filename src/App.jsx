import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import PrimaryLayout from './layouts/PrimaryLayout'
import Shop from "./pages/Shop.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrimaryLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"shop"} element={<Shop/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App