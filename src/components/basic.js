import React, { Component } from 'react';
import * as THREE from 'three';

class Basic extends Component {
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
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)

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

export default Basic;
