import React from 'react';

const ScrollDownButton = () => {
  const scrollToContent = () => {
    const content = document.getElementById('scroll-target'); // Replace 'content' with the ID of your target content section
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
    
      onClick={scrollToContent}
      className="relative justify-center  transform  bg-none text-emerald-300 p- rounded-full border border-slate-200/50 shadow-lg animate-bounce ease-in-out duration-300 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
};

export default ScrollDownButton;