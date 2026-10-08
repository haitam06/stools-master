import React, { useEffect, useState } from 'react';
import './App.css';
import TextExtractor from './components/img2text/TextExtractor';
import Imagetopdf from './components/img2pdf/imagetopdf';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Qr from './components/qrcodegen/Qr';
import Header from './components/header/header'
import Loader from './components/loader/loader';
import About from './components/about/about';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='text-extractor' element={<TextExtractor/>}/>
        <Route path='image-to-pdf' element={<Imagetopdf/>}/>
        <Route path='qrcode-generator' element={<Qr/>}/>
      </Routes>
    </div>
  );
}

export default App;
