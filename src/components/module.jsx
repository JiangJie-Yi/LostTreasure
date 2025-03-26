import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MouseTrigger from './function/mouseTrigger';
import MdFile from './mdFile';

function Module({
  rotationAngle,
  setRotationAngle,
  setObjectChildModule,
  setDescriptionChildModule,
}) {
  const {
    isHoveringObject,
    isBackFacing,
    setIsBackFacing,
    setIsHoveringObject,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = MouseTrigger(setRotationAngle);

  const cursorStyle = isBackFacing
    ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6.5C7.05 6.5 3.23 9.11 1 12c2.23 2.89 6.05 5.5 11 5.5s8.77-2.61 11-5.5c-2.23-2.89-6.05-5.5-11-5.5zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>') 12 12, auto`
    : isHoveringObject
      ? 'grab'
      : 'default';

  return (
    <>
      {/* <UserInterface /> */}
      <Canvas
        style={{ cursor: cursorStyle }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        shadows
      >
        <ambientLight intensity={0.15} color={0xffffff} />
        <pointLight
          position={[0, -1.75, -2]}
          intensity={10}
          penumbra={50}
          color={0xaef0fc}
          opacity={0.125}
          castShadow
        />
        <directionalLight position={[0, 10, 0]} intensity={1} color={0xfff6e8} castShadow />
        <spotLight
          position={[0, 6, 5]}
          angle={0.32}
          intensity={55}
          penumbra={0.525}
          target-position={[0, 0, 0]}
          castShadow
        />
        <MdFile
          position={[0, 0, 0]}
          rotationAngle={rotationAngle}
          setObjectChildMdfile={setObjectChildModule}
          setDescriptionChildMdfile={setDescriptionChildModule}
          setIsHoveringObjectChildMdfile={setIsHoveringObject}
          setIsBackFacingChildMdfile={setIsBackFacing}
        />
        <OrbitControls minDistance={4} maxDistance={7} />
      </Canvas>
    </>
  );
}

export default Module;
