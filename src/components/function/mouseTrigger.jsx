import { useRef, useState } from 'react';

function MouseTrigger(setRotationAngle) {
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const [isHoveringObject, setIsHoveringObject] = useState(false);
  const [isBackFacing, setIsBackFacing] = useState(false);

  const handleMouseDown = (event) => {
    isDragging.current = true;
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
  };

  return {
    isHoveringObject,
    setIsHoveringObject,
    isBackFacing,
    setIsBackFacing,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}

export default MouseTrigger;
