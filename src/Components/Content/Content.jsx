import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Listing, OverView} from "../Pages"


const Content = () => {
    return (
        <Routes>
<Route exact path='/listing' element={<Listing />} />
<Route exact path='/' element={<OverView />} />
      </Routes>
    );
};


export default Content;