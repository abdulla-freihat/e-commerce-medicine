

import React from 'react';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = 'bg-red-600';
  }
  if (props.status === 'success') {
    specialClasses = 'bg-teal-500';
  }

  const cssClasses = `  ${specialClasses}`;

  return (
    <div className='max-w-[1640px] mx-auto'>
   
    <section className={`w-full h-12 ${cssClasses} flex justify-between px-10 items-center text-white `}>
      <h2 className="text-base font-bold">{props.title}</h2>
      <p className="text-sm">{props.message}</p>
    </section>
    </div>

  );
};

export default Notification;
