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

import img7 from '../public/img/7.png'; // todo: how to use import in child component then let webpack track the usage and build
import img8 from '../public/img/8.png';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
