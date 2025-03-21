import React, { useRef } from 'react';
import { TextureLoader, ClampToEdgeWrapping } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import PaperMaterialFront from '../public/img/paperMaterial_front.png';
import PaperMaterialBack from '../public/img/paperMaterial_back.png';
import Cipher from '../public/img/cipher.png';
import '../scss/css/origin.css';
import Fonts from '../fontsStyle.js';

function Card({ position, rotationAngle, text, setDescription, setObject }) {
  const meshRef = useRef();
  const mapFrontTexture = useLoader(TextureLoader, PaperMaterialFront);
  const mapBackTexture = useLoader(TextureLoader, PaperMaterialBack);
  const textTexture = useLoader(TextureLoader, Cipher);

  mapFrontTexture.wrapS = ClampToEdgeWrapping;
  mapFrontTexture.wrapT = ClampToEdgeWrapping;

  mapFrontTexture.offset.set(0, 0);
  mapFrontTexture.repeat.set(1, 1);

  mapFrontTexture.wrapS = mapFrontTexture.wrapT = ClampToEdgeWrapping;

  mapBackTexture.wrapS = ClampToEdgeWrapping;
  mapBackTexture.wrapT = ClampToEdgeWrapping;

  mapBackTexture.offset.set(0, 0);
  mapBackTexture.repeat.set(1, 1);

  mapBackTexture.wrapS = mapBackTexture.wrapT = ClampToEdgeWrapping;

  useFrame(() => {
    setObject('砂輪機操作文件');
    if (meshRef.current) {
      meshRef.current.rotation.x = rotationAngle.x;
      meshRef.current.rotation.y = rotationAngle.y;
      meshRef.current.rotation.z = rotationAngle.z;

      if (rotationAngle.y > Math.PI / 2 || rotationAngle.y < -Math.PI / 2) {
        setDescription('『 共濟會密碼符號 』');
      } else {
        setDescription('感覺像是一張工業安全的指導文件');
      }
    }
  });

  return (
    <group
      position={position}
      ref={meshRef}
      scale={[1, 1, 0.05]}
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
    >
      <mesh>
        <planeGeometry args={[3, 4.125]} />
        <meshPhongMaterial
          map={mapFrontTexture}
          transparent={true}
          alphaTest={0.5}
          depthWrite={true}
          specular={0x000000}
          shininess={0}
        />
      </mesh>
      <mesh rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3, 4.125]} />
        <meshPhongMaterial
          map={mapBackTexture}
          transparent={true}
          alphaTest={0.5}
          depthWrite={true}
          specular={0x000000}
          shininess={0}
        />
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[3, 3.5]} />
          <meshBasicMaterial map={textTexture} transparent={true} opacity={0.6} />
        </mesh>
      </mesh>
      <Text
        position={[-1.25, 2, 0.01]}
        fontSize={0.4}
        maxWidth={1}
        lineHeight={1.2}
        color='hsla(0, 0%, 0%, 0.8)'
        anchorX='left'
        anchorY='top'
        font={Fonts.fontUrl}
      >
        {text}
      </Text>
    </group>
  );
}

export default Card;
