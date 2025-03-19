import React, { useRef } from 'react';
import { TextureLoader, ClampToEdgeWrapping } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import PaperMaterial from '../src/img/paperMaterial.png';
import './css/origin.css';

function Card({ position, rotationAngle, text }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, PaperMaterial);

  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;

  texture.offset.set(0, 0.05);
  texture.repeat.set(0.35, 0.3);
  
  texture.wrapS = texture.wrapT = ClampToEdgeWrapping;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationAngle;
    }
  });

  return (
    <mesh position={position} ref={meshRef} scale={[1, 1, 0.05]}>
      <RoundedBox args={[2, 3, 0.001]} radius={0} smoothness={2}>
        <meshPhongMaterial map={texture} />
      </RoundedBox>
      {/* <meshStandardMaterial attach='material' color='hsl(205, 50%, 25%)' /> */}
      <Text
        position={[0, 0.25, 0.001]}
        fontSize={0.4}
        color='hsl(0, 0%, 0%)'
        anchorX='center'
        anchorY='center'
        font='./src/font/Pigpen-Regular.ttf'
      >
        {text}
      </Text>
    </mesh>
  );
}

export default Card;
