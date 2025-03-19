import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Card from './card.jsx';
import './css/origin.css';
import './css/style.css';

function App() {
  const [isRotating, setIsRotating] = useState(false);

  const rotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <spotLight position={[0, 5, 5]} angle={0.3} intensity={0.7} />
        <Card position={[0, 0, 0]} isRotating={isRotating} />
      </Canvas>
      <div className='fixed top-1/2 left-1/2 select-none'>
        <button
          className=' w-fit h-fit border-2 bg-amber-500 text-white p-3 flex justify-center items-center rounded-md cursor-pointer cursor-pointer'
          onClick={rotation}
        >
          Click Rotate
        </button>
      </div>
    </>
  );
}

export default App;
