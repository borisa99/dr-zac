import React from 'react'

function HeaderHamburgerButton({ handleNav, isOpen }) {
  return (
    <button
      aria-label={isOpen ? 'Close' : 'Open'}
      onClick={handleNav}
      className="relative z-50 h-14 w-14 rounded bg-transparent focus:outline-none xl:hidden"
    >
      <div className="absolute left-6 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform">
        <span
          className={`absolute block h-0.5 w-7 transform bg-current text-blue transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : ' -translate-y-1.5'}`}
        ></span>
        <span
          className={`absolute block  h-0.5 w-5 transform bg-current   text-blue transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`absolute block  h-0.5 w-7 transform bg-current text-blue  transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : ' translate-y-1.5'}`}
        ></span>
      </div>
    </button>
  )
}

export default HeaderHamburgerButton
