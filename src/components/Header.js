import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/Constants";

const Header = props => {
    const key = props.match.params.hero
    console.log(key)
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-3">{characters[key].name}</h1>
        </header>
    );
};

export default Header;