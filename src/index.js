// import * as THREE from 'three';
// import '@three-examples/controls/OrbitControls'; // import side-effects, so THREE can have OrbitControls method
// console.log(THREE)
//
// // import basic from './basic.js';
// import texture from './texture.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
