import React, { Component } from 'react';
import * as THREE from 'three';
import '@three-examples/controls/OrbitControls';

class Texture extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    // create the shape
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    // create a material, colour or image texture
    const  cubeMaterials =
    [
    	new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( './public/img/1.png' ), side: THREE.DoubleSide } ), // Right side
    	new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './public/img/2.png' ), side: THREE.DoubleSide } ), // Left side
    	new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( './public/img/3.png' ), side: THREE.DoubleSide } ), // Top side
    	new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './public/img/4.png' ), side: THREE.DoubleSide } ), // Bottom side
    	new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( './public/img/5.png' ), side: THREE.DoubleSide } ), // Front side
    	new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './public/img/6.png' ), side: THREE.DoubleSide } ) // Back side
    ];

    // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
    const material = new THREE.MeshFaceMaterial( cubeMaterials );

    const cube = new THREE.Mesh(geometry, material);

    const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 5.0 );
		scene.add(ambientLight);
		this.light1 = new THREE.PointLight( 0xff0040, 4, 50 );
		scene.add( this.light1 );
		this.light2 = new THREE.PointLight( 0x0040ff, 3, 50 );
		scene.add( this.light2 );
		this.light3 = new THREE.PointLight( 0x80ff80, 4, 50 );
		scene.add( this.light3 );
		const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1 );
		directionalLight.position.set( 0, 1, 0 );
		scene.add( directionalLight );
		const spotLight = new THREE.SpotLight( 0xFF45F6, 25 );
		spotLight.position.set( 0, 3, 0 );
		scene.add( spotLight );

    camera.position.z = 4
    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    this.mount.appendChild(this.renderer.domElement)
    // check when the browser size has changed and adjust the camera accordingly
    //todo: how to handle responsive resize ?
    // console.log('this.mount', this.mount);
    // window.addEventListener('resize', () => {
    //   console.log('resize');
    //   var WIDTH = this.mount.clientWidth;
    //   var HEIGHT = this.mount.clientHeight;
    //   this.renderer.setSize( WIDTH, HEIGHT );
    //   this.camera.aspect = WIDTH / HEIGHT;
    //   this.camera.updateProjectionMatrix( );
    // });
    const controls = new THREE.OrbitControls( this.camera, this.renderer.domElement ); // give controller
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    const time = Date.now( ) * 0.0005;

		this.light1.position.x = Math.sin( time * 0.7 ) * 30;
		this.light1.position.y = Math.cos( time * 0.5 ) * 40;
		this.light1.position.z = Math.cos( time * 0.3 ) * 30;
		this.light2.position.x = Math.cos( time * 0.3 ) * 30;
		this.light2.position.y = Math.sin( time * 0.5 ) * 40;
		this.light2.position.z = Math.sin( time * 0.7 ) * 30;
		this.light3.position.x = Math.sin( time * 0.7 ) * 30;
		this.light3.position.y = Math.cos( time * 0.3 ) * 40;
		this.light3.position.z = Math.sin( time * 0.5 ) * 30;

    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.005

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '1200px', height: '800px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Texture;
