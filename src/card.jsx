import React, { useRef } from 'react';
import { TextureLoader, ClampToEdgeWrapping, DoubleSide } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import PaperMaterial from '../src/img/paperMaterial.png';
import './css/origin.css';

function Card({ position, rotationAngle, text }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, PaperMaterial);

  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;

  texture.offset.set(0, 0);
  texture.repeat.set(1, 1);

  texture.wrapS = texture.wrapT = ClampToEdgeWrapping;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotationAngle.x;
      meshRef.current.rotation.y = rotationAngle.y;
      meshRef.current.rotation.z = rotationAngle.z;
    }
  });

  return (
    <mesh position={position} ref={meshRef} scale={[1, 1, 0.05]}>
      <planeGeometry args={[2.5, 3]} />
      <meshPhongMaterial
        map={texture}
        transparent={true}
        alphaTest={0.5}
        depthWrite={true}
        specular={0x000000}
        shininess={0}
        side={DoubleSide}
      />
      <Text
        position={[0, 0.25, 0.001]}
        fontSize={0.4}
        maxWidth={0.1}
        lineHeight={0.25}
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
