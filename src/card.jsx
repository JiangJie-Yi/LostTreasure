import React, { useRef } from 'react';
import { TextureLoader, ClampToEdgeWrapping, DoubleSide } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import PaperMaterial from '../src/img/paperMaterial.png';
import Cipher from '../src/img/cipher.png';
import './css/origin.css';

function Card({ position, rotationAngle, text }) {
  const meshRef = useRef();
  const mapTexture = useLoader(TextureLoader, PaperMaterial);
  const textTexture = useLoader(TextureLoader, Cipher);

  mapTexture.wrapS = ClampToEdgeWrapping;
  mapTexture.wrapT = ClampToEdgeWrapping;

  mapTexture.offset.set(0, 0);
  mapTexture.repeat.set(1, 1);

  mapTexture.wrapS = mapTexture.wrapT = ClampToEdgeWrapping;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotationAngle.x;
      meshRef.current.rotation.y = rotationAngle.y;
      meshRef.current.rotation.z = rotationAngle.z;
    }
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={[1, 1, 0.05]}
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
    >
      <planeGeometry args={[3, 4.125]} />
      <meshPhongMaterial
        map={mapTexture}
        transparent={true}
        alphaTest={0.5}
        depthWrite={true}
        specular={0x000000}
        shininess={0}
        side={DoubleSide}
      />
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[3, 3.5]} />
        <meshBasicMaterial map={textTexture} transparent={true} opacity={0.6} side={DoubleSide} />
      </mesh>
      <Text
        position={[-1.25, 2, 0.01]}
        fontSize={0.4}
        maxWidth={1}
        lineHeight={1.2}
        color='hsla(0, 0%, 0%, 0.8)'
        anchorX='left'
        anchorY='top'
        font='./src/font/Pigpen-Regular.ttf'
      >
        {text}
      </Text>
    </mesh>
  );
}

export default Card;
