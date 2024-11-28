import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div style={{height: screen.height}}>
      <Canvas camera={{position: [3, 3, 3]}}>
        <color attach="background" args={['lightblue']} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[0.5, 0.5,0.5]} />
          <meshNormalMaterial  />
        </mesh>
      </Canvas>   
    </div>
  )
}

export default App
