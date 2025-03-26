import React, { useRef } from 'react';
import { TextureLoader, ClampToEdgeWrapping } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplayState } from '../slice/textStringSlice.js';
import PaperMaterialFront from '../public/img/paperMaterial_front.png';
import PaperMaterialBack from '../public/img/paperMaterial_back.png';
import Cipher from '../public/img/cipher.png';
import '../scss/css/origin.css';

function MdFile({
  position,
  rotationAngle,
  setObjectChildMdfile,
  setDescriptionChildMdfile,
  setIsHoveringObjectChildMdfile,
  setIsBackFacingChildMdfile,
}) {
  const propsName = useSelector((state) => state.textString.propsName);
  const descriptionContent = useSelector((state) => state.textString.descriptionContent);

  const dispatch = useDispatch();
  // const singleDisplayText = useSelector((state) => state.textString.singleDisplayText);
  // const handleFlip = () => {
  //   if (!singleDisplayText) {
  //     dispatch(setDisplayState('這段文字只顯示一次'));
  //   }
  // };

  const [currentSegment, setCurrentSegment] = React.useState(null);
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
    const normalizeAngle = (angle) => {
      while (angle < -Math.PI) angle += 2 * Math.PI; // 如果角度小於 -180°，加回到範圍內
      while (angle > Math.PI) angle -= 2 * Math.PI; // 如果角度大於 180°，減回到範圍內
      return angle;
    };

    const getSegment = (angle) => {
      if (angle >= -Math.PI / 4 && angle <= Math.PI / 4) {
        return 0; // 正面：-45° - 45°
      } else if (angle > Math.PI / 4 && angle <= (3 * Math.PI) / 4) {
        return 1; // 反面：45° - 135°
      } else if (angle > (3 * Math.PI) / 4 || angle <= -(3 * Math.PI) / 4) {
        return 2; // 正面：135° - 180° 或 -180° - -135°
      } else if (angle > -(3 * Math.PI) / 4 && angle < -Math.PI / 4) {
        return 3; // 反面：-135° - -45°
      }
      return -1; // 無效區間
    };

    if (meshRef.current) {
      meshRef.current.rotation.x = rotationAngle.x;
      meshRef.current.rotation.y = rotationAngle.y;
      meshRef.current.rotation.z = rotationAngle.z;

      // 標準化角度到 -Math.PI ~ Math.PI
      const normalizedY = normalizeAngle(rotationAngle.y);
      const segment = getSegment(normalizedY);

      if (segment !== currentSegment) {
        setCurrentSegment(segment);
        if (segment === 0 || segment === 2) {
          setIsBackFacingChildMdfile(false);
          setObjectChildMdfile(propsName.GRINDING_MACHINE_OPERATION_FILE_1);
          setDescriptionChildMdfile(descriptionContent.GRINDING_MACHINE_OPERATION_FILE_FRONT);
          setTimeout(() => {
            setDescriptionChildMdfile('');
          }, 1750);
        } else if (segment === 1 || segment === 3) {
          setIsBackFacingChildMdfile(true);
          setObjectChildMdfile();
          setDescriptionChildMdfile(descriptionContent.GRINDING_MACHINE_OPERATION_FILE_BACK_1);
          setTimeout(() => {
            setDescriptionChildMdfile(descriptionContent.GRINDING_MACHINE_OPERATION_FILE_BACK_2);
            setTimeout(() => {
              setDescriptionChildMdfile(descriptionContent.GRINDING_MACHINE_OPERATION_FILE_BACK_3);
              setTimeout(() => {
                setObjectChildMdfile(propsName.GRINDING_MACHINE_OPERATION_FILE_2);
                setDescriptionChildMdfile('');
              }, 1750);
            }, 1750);
          }, 1750);
        }
      }
    }
  });

  return (
    <>
      <group
        position={position}
        ref={meshRef}
        scale={[1, 1, 0.05]}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <mesh
          // onClick={handleFlip}
          ref={meshRef}
          position={position}
          onPointerOver={() => {
            setIsHoveringObjectChildMdfile(true);
          }}
          onPointerOut={() => {
            setIsHoveringObjectChildMdfile(false);
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
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
      </group>
    </>
  );
}

export default MdFile;
