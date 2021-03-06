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

import img1 from '../public/img/1.png';
import img2 from '../public/img/2.png';
import img3 from '../public/img/3.png';
import img4 from '../public/img/4.png';
import img5 from '../public/img/5.png';
import img6 from '../public/img/6.png';
import img7 from '../public/img/7.png'; // todo: how to use import in child component then let webpack track the usage and build
import img8 from '../public/img/8.png';
import img9 from '../public/img/9.png';
import Ceiling from '../public/img/Ceiling.jpg';
import Ground from '../public/img/Ground.jpg';
import Wall from '../public/img/Wall.jpg';
import skull from '../public/models/skull.json';
import front from '../public/img/front.png';
import back from '../public/img/back.png';
import up from '../public/img/up.png';
import down from '../public/img/down.png';
import right from '../public/img/right.png';
import left from '../public/img/left.png';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
