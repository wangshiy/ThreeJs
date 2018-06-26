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
    // instantiate a loader
		const loader = new THREE.ObjectLoader( );
		// load a resource
		loader.load(
			// resource URL
			'../../public/models/skull.json',
			// Function when resource is loaded
			( object ) => {
				scene.add( object );
			}
		);

    const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.1 );
    scene.add( ambientLight );

    camera.position.z = 27
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

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
