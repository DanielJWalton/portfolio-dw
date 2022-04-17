import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
// import * as dat from 'lil-gui'

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import screenVertexShader from '../public/portal/vertex.glsl'
import screenFragmentShader from '../public/portal/fragment.glsl'
import firefliesVertexShader from '../public/fireflies/vertex.glsl'
import firefliesFragmentShader from '../public/fireflies/fragment.glsl'

/**
 * Base
 */
// Debug
const debugObject = {}
// const gui = new dat.GUI({
//   width: 400
// })

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    /**
     * Loaders
     */
    // Texture loader
    const textureLoader = new THREE.TextureLoader()

    // Draco loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')

    // GLTF loader
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    /**
     * Textures
     */
    const pcTexture = textureLoader.load('BAKED.jpg')
    pcTexture.flipY = false
    pcTexture.encoding = THREE.sRGBEncoding

    /**
     * Materials
     */
    // Baked material
    const pcMaterial = new THREE.MeshBasicMaterial({ map: pcTexture })
    pcMaterial.opacity = true

    const catMaterial = new THREE.MeshBasicMaterial()
    catMaterial.color = new THREE.Color('black')

    const butterflyMaterial = new THREE.MeshBasicMaterial()
    butterflyMaterial.color = new THREE.Color('red')

    // screen light material
    debugObject.screenColorStart = '#0C0032'
    debugObject.screenColorEnd = '#3500D3'

    debugObject.danWColorStart = '#F2F2F2'
    debugObject.danWColorEnd = '#F2F2F2'
    // gui.addColor(debugObject, 'screenColorStart').onChange(() => {
    //   screenLightMaterial.uniforms.uColorStart.value.set(
    //     debugObject.screenColorStart
    //   )
    // })

    // gui.addColor(debugObject, 'screenColorEnd').onChange(() => {
    //   screenLightMaterial.uniforms.uColorEnd.value.set(
    //     debugObject.screenColorEnd
    //   )
    // })

    const screenLightMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color(debugObject.screenColorStart) },
        uColorEnd: { value: new THREE.Color(debugObject.screenColorEnd) }
      },
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader
    })

    const danWLightMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color(debugObject.danWColorStart) },
        uColorEnd: { value: new THREE.Color(debugObject.danWColorEnd) }
      },
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader
    })

    // Material
    const firefliesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 100 }
      },
      vertexShader: firefliesVertexShader,
      fragmentShader: firefliesFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    // gui
    //   .add(firefliesMaterial.uniforms.uSize, 'value')
    //   .min(0)
    //   .max(500)
    //   .step(1)
    //   .name('firefliesSize')

    loader.load(
      glbPath,
      gltf => {
        console.log(gltf.scene.children)
        gltf.scene.traverse(child => {
          child.material = pcMaterial
        })
        const obj = gltf.scene
        obj.name = 'piece'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        // Get each object
        const ScreenA = gltf.scene.children.find(child => child.name === 'S_A')
        const ScreenB = gltf.scene.children.find(child => child.name === 'S_B')
        const ScreenC = gltf.scene.children.find(child => child.name === 'S_C')
        const Rings = gltf.scene.children.find(
          child => child.name === 'GlowRings'
        )
        const Rope = gltf.scene.children.find(
          child => child.name === 'GlowRope'
        )
        const GlowTorus = gltf.scene.children.find(
          child => child.name === 'GlowTorus'
        )
        const KeyA = gltf.scene.children.find(child => child.name === 'K_A')
        const DanW = gltf.scene.children.find(child => child.name === 'DanW')
        const Magic = gltf.scene.children.find(child => child.name === 'Magic')
        const Cat = gltf.scene.children.find(child => child.name === 'Cat')
        const Butterfly = gltf.scene.children.find(
          child => child.name === 'Butterfly'
        )
        // Apply materials
        ScreenA.material = screenLightMaterial
        ScreenB.material = screenLightMaterial
        ScreenC.material = screenLightMaterial
        Rings.material = screenLightMaterial
        Rope.material = screenLightMaterial
        GlowTorus.material = screenLightMaterial
        KeyA.material = screenLightMaterial
        DanW.material = danWLightMaterial
        Magic.material = danWLightMaterial
        Cat.material = catMaterial
        Butterfly.material = butterflyMaterial
        scene.add(obj)
        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )

    /**
     * Fireflies
     */
    // Geometry
    const firefliesGeometry = new THREE.BufferGeometry()
    const firefliesCount = 30
    const positionArray = new Float32Array(firefliesCount * 3)
    const scaleArray = new Float32Array(firefliesCount)

    for (let i = 0; i < firefliesCount; i++) {
      positionArray[i * 3 + 0] = (Math.random() - 0.5) * 4
      positionArray[i * 3 + 1] = Math.random() * 1.5
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 4

      scaleArray[i] = Math.random()
    }

    firefliesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    )
    firefliesGeometry.setAttribute(
      'aScale',
      new THREE.BufferAttribute(scaleArray, 1)
    )

    // Points
    const fireflies = new THREE.Points(firefliesGeometry, firefliesMaterial)
    scene.add(fireflies)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update fireflies
      firefliesMaterial.uniforms.uPixelRatio.value = Math.min(
        window.devicePixelRatio,
        2
      )
      // material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)
    })
    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update materials
      screenLightMaterial.uniforms.uTime.value = elapsedTime
      firefliesMaterial.uniforms.uTime.value = elapsedTime

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  })
}
