import React from 'react';
import "./Carousel"
import {Carousel} from "./Carousel";
import slides from './img/carousel_Img.json';

const App = () => {
    const data = slides.slides;

    return (
        <div className="App">
            <Carousel data={data} />
        </div>
    );
};

export default App;
