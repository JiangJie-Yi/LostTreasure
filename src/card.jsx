import React, { useRef } from 'react';
// import { createRoot } from 'react-dom/client';
import { useFrame } from '@react-three/fiber';

function Card(props) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && props.isRotating) {
      meshRef.current.rotation.x += 0.0;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.0;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry attach='geometry' args={[1.25, 1.75, 0.01]} />
      <meshStandardMaterial attach='material' color='hsl(200, 100%, 70%)' />
    </mesh>
  );
}

export default Card;
