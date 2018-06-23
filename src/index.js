require('./a.js')
require('./b.js')
const a = 'a';
// var THREE = require('three');
import * as THREE from 'three';
import '@three-examples/controls/OrbitControls'; // import side-effects, so THREE can have OrbitControls method
console.log(a, THREE)
