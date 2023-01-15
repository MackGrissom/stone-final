import React from 'react'
import { useFrame } from '@react-three/fiber'
 
const RotatingRectangle = () => {
  const ref = React.useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} 
>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} scale={1.5} />
      <meshNormalMaterial attach="material" />
    </mesh>

   
  )
}
export default RotatingRectangle