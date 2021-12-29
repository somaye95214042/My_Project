import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";




const Layout = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setInterval(() => { 
            setShowModal(true)
        }, 3000);
    }, []);


    if(showModal){
        return (
            <div>
                <Router>
                    <Header/>
                    <Contents/>
                </Router>
                <Footer/>
            </div>
        )
    }

    else {
        return (
            <div className={'loading'}>
                <h1>The Page is Loading ...</h1>
            </div>
        )
    }
}

export default Layout;