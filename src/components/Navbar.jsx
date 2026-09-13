import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="mx-6 rounded-full ">
      <div className='rounded-full bg-[#e08712] px-6 py-2 font-playfair text-[#24140E]'>

     
      
      <div className="flex h-12 items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            C<span className="text-xl">offelix</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="transition hover:text-[#51362d]">
            Home
          </a>

          <a href="#menu" className="transition hover:text-[#51362d]">
            Menu
          </a>

          <a href="#about" className="transition hover:text-[#51362d]">
            About
          </a>

          <a href="#contact" className="transition hover:text-[#51362d]">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            className="rounded-full px-5 py-2 font-medium transition hover:bg-[#24140E] hover:text-[#e08712]"
          >
            Login
          </button>

          <button
            className="rounded-full bg-[#24140E] px-5 py-2 font-medium text-[#e08712] transition hover:bg-[#55392f]"
          >
            Register
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden bg-[#e08712]"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>
       </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#51362d] rounded-lg bg-[#e08712] py-4 px-2 md:hidden">
          
          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#51362d]"
            >
              Home
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#51362d]"
            >
              Menu
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#51362d]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#51362d]"
            >
              Contact
            </a>

            {/* Mobile Buttons */}
            <div className="flex gap-2 pt-2">
              
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-5 py-2 font-medium hover:bg-[#24140E] hover:text-[#e08712]"
              >
                Login
              </button>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#24140E] px-5 py-2 font-medium text-[#e08712]"
              >
                Register
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar