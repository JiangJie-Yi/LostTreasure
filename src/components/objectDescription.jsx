import React from 'react';

function OobjectDescription({ props, descriptionContent }) {
  return (
    <div className='fixed top-1/10 left-0 w-full h-auto flex flex-col gap-y-4 z-10'>
      <p className='text-zinc-100 text-center font-mono text-lg italic opacity-45'>
        {descriptionContent}
      </p>
      <p className='text-amber-500 text-center font-mono text-base tracking-wide opacity-50'>
        {props}
      </p>
    </div>
  );
}

export default OobjectDescription;
