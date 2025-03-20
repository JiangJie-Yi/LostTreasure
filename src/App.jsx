import React, { useState } from 'react';
import Card from './components/card.jsx';
import Message from './components/message.jsx';
import DisplayObject from './components/displayObject.jsx';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './scss/css/origin.css';
import './scss/css/style.css';

function App() {
  const [rotationAngle, setRotationAngle] = useState({ x: 0, y: 0, z: 0 });
  const [description, setDescription] = useState('');
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <Message description={description} />
      <DisplayObject
        rotationAngle={rotationAngle}
        setRotationAngle={setRotationAngle}
        setDescription={setDescription}
      />
      <div className='fixed bottom-1/8 left-0 w-full h-auto flex justify-self-center items-center flex-col gap-y-1.5 z-10'>
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
