import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Card from './card.jsx';
import Cipher from './img/cipher.png';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './css/origin.css';
import './css/style.css';

function App() {
  const [rotationAngle, setRotationAngle] = useState({ x: 0, y: 0, z: 0 });
  const [inputText, setInputText] = useState('');
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

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

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <div className='fixed top-1/10 left-0 w-full h-auto tracking-wide z-10'>
        <p className='text-zinc-700 text-center font-mono italic'>
          “ 一封來自共濟會斑駁陳舊的信件 ”
        </p>
      </div>
      <Canvas
        className={`z-0 ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        shadows
      >
        <ambientLight intensity={0.15} color={0xffffff} />
        <pointLight
          position={[0, -1.25, -2]}
          intensity={2}
          penumbra={5}
          color={0xaef0fc}
          opacity={0.5}
          castShadow
        />
        <directionalLight position={[0, 10, 0]} intensity={1} color={0xfff6e8} castShadow />
        <spotLight
          position={[0, 6, 5]}
          angle={0.32}
          intensity={45}
          penumbra={0.625}
          target-position={[0, 0, 0]}
          castShadow
        />
        <Card position={[0, 0, 0]} rotationAngle={rotationAngle} text={inputText} />
      </Canvas>
      <div className='fixed top-7/8 left-0 w-full h-auto flex justify-self-center items-center flex-col gap-y-1.5 z-10'>
        <p className='font-Pigpen-Regular text-amber-300 select-none'>Please enter text</p>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <OutlinedInput
            value={inputText}
            onChange={handleInputChange}
            sx={{
              width: 'fit-content',
              backgroundColor: 'hsla(0deg, 0%, 100%, 5%)',
              color: 'white',
              borderRadius: '5px',
              outline: 'none',
              '&:hover': {
                backgroundColor: 'hsla(0deg, 0%, 100%, 10%)',
              },
            }}
          />
          <HelpOutlineIcon
            sx={{
              position: 'fixed',
              transform: 'translate(500%, 0)',
              color: 'hsla(0, 0%, 100%, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: 'hsla(0, 0%, 100%, 1)',
              },
              '&:active': {
                color: 'hsla(0, 0%, 100%, 0.325)',
              },
            }}
          />
        </Box>
      </div>
    </>
  );
}

export default App;
