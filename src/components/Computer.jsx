import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computer = () => {

    const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
      <mesh>
        <hemisphereLight 
         intensity={0.15}
         groundColor="black"
        />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1}/>
        <spotLight
         position={[-20, 50, 10]}
         angle={0.12}
         intensity={1}
         castShadow
         shadow-mapSize={1024}
        />
        <primitive object={computer.scene}
        scale={0.75}
        position={[0, -3.5, -1.5]}
        rotate={[-0.01, -0.2, -0.1]}
        />
      </mesh>
  )
}

const ComputerCanvas = () => {
    return (
        <Canvas
         frameloop='demand'
         shadows
         camera={{position: [20, 3, 5], fov: 25 }}
         gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={null}>
                <OrbitControls 
                 enableZoom={false}
                 maxPolarAngle={Math.PI / 2}
                 minPolarAngle={Math. PI / 2}
                />
                <Computer/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas
