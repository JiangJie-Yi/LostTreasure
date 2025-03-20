import React from 'react';

function Message({ description }) {
  return (
    <div className='fixed top-1/10 left-0 w-full h-auto flex flex-col gap-y-4 z-10'>
      <p className='text-zinc-100 text-center font-mono text-lg italic opacity-45'>{description}</p>
      <p className='text-amber-500 text-center font-mono text-base tracking-wide opacity-50'>
        砂輪機操作文件
      </p>
    </div>
  );
}

export default Message;
