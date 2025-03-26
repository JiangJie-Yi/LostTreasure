import React from 'react';

function OobjectDescription({ propsName, descriptionContent }) {
  return (
    <div className='fixed top-1/10 left-0 w-full h-auto flex flex-col gap-y-1 z-10'>
      <p className='h-7 text-zinc-100 text-center font-mono text-lg italic opacity-45'>
        {descriptionContent}
      </p>
      <p className='h-6 text-amber-500 text-center font-xs text-base tracking-wide opacity-50'>
        {propsName}
      </p>
    </div>
  );
}

export default OobjectDescription;
