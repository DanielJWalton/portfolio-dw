import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

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
    const bakedTexture = textureLoader.load('baked3.jpg')
    bakedTexture.flipY = false
    bakedTexture.encoding = THREE.sRGBEncoding
    /**
     * Materials
     */
    // Baked material
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })

    /**
     * Polelight Material
     */
    const ScreenLight = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

    loader.load(
      glbPath,
      gltf => {
        console.log(gltf.scene.children)
        gltf.scene.traverse(child => {
          child.material = bakedMaterial
        })

        const obj = gltf.scene
        obj.name = 'progPc'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        // // Get each object
        const ScreenA = gltf.scene.children.find(child => child.name === 'S_A')
        const ScreenB = gltf.scene.children.find(child => child.name === 'S_B')
        const ScreenC = gltf.scene.children.find(child => child.name === 'S_C')
        const RingA = gltf.scene.children.find(child => child.name === 'R_A')
        const RingB = gltf.scene.children.find(child => child.name === 'R_B')
        const RingC = gltf.scene.children.find(child => child.name === 'R_C')
        const KeyA = gltf.scene.children.find(child => child.name === 'K_A')

        // Apply materials
        ScreenA.material = ScreenLight
        ScreenB.material = ScreenLight
        ScreenC.material = ScreenLight
        RingA.material = ScreenLight
        RingB.material = ScreenLight
        RingC.material = ScreenLight
        KeyA.material = ScreenLight

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
  })
}
