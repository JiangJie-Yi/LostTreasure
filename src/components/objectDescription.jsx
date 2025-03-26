import React from 'react';
import { useSelector } from 'react-redux';

function ObjectDescription({ descriptionContent, propsName }) {
  // const singleDisplayText = useSelector((state) => state.textString.singleDisplayText);

  return (
    <div className='fixed top-1/10 left-0 w-full h-auto flex flex-col gap-y-1 z-10'>
      <div className='h-7'>
        {/* {singleDisplayText && ( */}
          <p className='text-zinc-100 text-center font-mono text-lg italic opacity-45'>
            {descriptionContent}
          </p>
        {/* )} */}
      </div>
      <p className='h-6 text-amber-500 text-center font-xs text-base tracking-wide opacity-50'>
        {propsName}
      </p>
    </div>
  );
}

export default ObjectDescription;
