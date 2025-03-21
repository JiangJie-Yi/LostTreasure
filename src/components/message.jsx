import React from 'react';

function Message({ descriptionCt, objectName }) {
  return (
    <div className='fixed top-1/10 left-0 w-full h-auto flex flex-col gap-y-4 z-10'>
      <p className='text-zinc-100 text-center font-mono text-lg italic opacity-45'>
        {descriptionCt}
      </p>
      <p className='text-amber-500 text-center font-mono text-base tracking-wide opacity-50'>
        {objectName}
      </p>
    </div>
  );
}

export default Message;
