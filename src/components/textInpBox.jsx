import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setInputText } from '../slice/textInpSlice.js';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function TextInpBox() {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    dispatch(setInputText(event.target.value));
  };

  return (
    <>
      <div className='fixed bottom-1/8 left-0 w-full h-auto flex justify-self-center items-center flex-col gap-y-1.5 z-10'>
        <p className='font-Pigpen-Regular text-amber-300 select-none'>Please enter text</p>
      </div>
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
    </>
  );
}

export default TextInpBox;
