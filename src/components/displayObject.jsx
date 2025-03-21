import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card from './card';

function DisplayObject({ rotationAngle, setRotationAngle, setDescription, setObject }) {
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = (event) => {
    isDragging.current = true;
    setIsGrabbing(true);
    previousMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseMove = (event) => {
    if (isDragging.current) {
      const deltaX = event.clientX - previousMousePosition.current.x;
      const deltaY = event.clientY - previousMousePosition.current.y;
      setRotationAngle((prevRotation) => ({
        x: (prevRotation.x + deltaY * 0.01) % (2 * Math.PI),
        y: (prevRotation.y + deltaX * 0.01) % (2 * Math.PI),
        z: prevRotation.z,
      }));
      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsGrabbing(false);
  };

  return (
    <Canvas
      className={`z-0 ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
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
      <Card
        position={[0, 0.1, 0]}
        rotationAngle={rotationAngle}
        setObject={setObject}
        setDescription={setDescription}
      />
      <OrbitControls minDistance={4} maxDistance={7} />
    </Canvas>
  );
}

export default DisplayObject;
