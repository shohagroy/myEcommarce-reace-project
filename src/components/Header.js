import React from 'react';
import Banar from './Banar';
import ExploreProduct from './ExploreProduct';
import Hero from './Hero';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div>
            <Navigation/>
            <Hero/>
            <Banar/>
            <ExploreProduct/>
        </div>
    );
};

export default Header;