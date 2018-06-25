import * as THREE from 'three';
import '@three-examples/controls/OrbitControls';

import img1 from '../public/img/1.png';
import img2 from '../public/img/2.png';
import img3 from '../public/img/3.png';
import img4 from '../public/img/4.png';
import img5 from '../public/img/5.png';
import img6 from '../public/img/6.png';

var scene = new THREE.Scene( );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// check when the browser size has changed and adjust the camera accordingly
window.addEventListener( 'resize', function( )
{
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	renderer.setSize( WIDTH, HEIGHT );
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix( );
} );

// CUBE
var geometry = new THREE.CubeGeometry( 20, 20, 20 );
var cubeMaterials =
[
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/1.png' ), side: THREE.DoubleSide } ), // Right side
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/2.png' ), side: THREE.DoubleSide } ), // Left side
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/3.png' ), side: THREE.DoubleSide } ), // Top side
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/4.png' ), side: THREE.DoubleSide } ), // Bottom side
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/5.png' ), side: THREE.DoubleSide } ), // Front side
	new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/6.png' ), side: THREE.DoubleSide } ) // Back side
];

console.log('work one', new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( './public/img/1.png' ), side: THREE.DoubleSide } ));

// Create a MeshFaceMaterial, which allows the cube to have different materials on each face
var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, cubeMaterial );
scene.add( cube );

camera.position.z = 3;

var controls = new THREE.OrbitControls( camera, renderer.domElement );

// game logic
var update = function( )
{
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.005;
};

// draw scene
var render = function( )
{
	renderer.render( scene, camera );
};

// run game loop (update, render, repeat)
var GameLoop = function( )
{
	requestAnimationFrame( GameLoop );

	update( );
	render( );
};

GameLoop( );
