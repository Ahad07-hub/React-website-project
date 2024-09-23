import React   from 'react';

import '../../App.css';
import Herosection from '../Herosection';
import Card from '../Card';
import Footer from '../Footer';

function  Home() {
    return(
        <>
        <Herosection/>
        <Card/>
        <Footer/>
        </>
    )
}

export default Home;