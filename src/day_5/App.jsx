import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import  './common.css';


const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default App;