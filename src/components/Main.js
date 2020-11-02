import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import ErrorPage from "./ErrorPage";
import {Route, Switch} from "react-router-dom";

const Main = props => {
    return (
        <Switch>
            <Route path={['/', `/${homePage}`]} exact component={Home}/>
            <Route path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]} exact component={AboutMe}/>
            <Route path={`/${starWarsPage}`} exact component={StarWars}/>
            <Route path={`/${contactPage}`} exact component={Contact}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
}

export default Main;