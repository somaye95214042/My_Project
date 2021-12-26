import React from 'react';
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Article from "../Pages/Article";
import {Routes, Route} from "react-router-dom";

const Contents = () => {
    return (
        <div className={'content'}>
            <Routes>
                <Route path='/' exact={true} element={<Home/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/blog/article/:id' element={<Article/>} />
            </Routes>
        </div>
    )
}

export default Contents;