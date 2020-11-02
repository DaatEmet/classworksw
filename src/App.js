import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {aboutMePage, homePage} from "./utils/Constants";
import AboutMe from "./components/AboutMe";
import {Route} from "react-router-dom";

const App = () => {

    return (
        <div className='container-fluid'>
            <Route path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]} exact component={Header}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
