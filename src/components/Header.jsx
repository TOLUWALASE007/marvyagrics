import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/marvy_logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0D3333] text-[#C1C1C1] py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Marvy Agric Solutions" className="h-12 w-auto mr-3" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="hover:text-[#019A32] transition">Home</Link>
          <Link to="/services" className="hover:text-[#019A32] transition">Our Services</Link>
          <Link to="/honors" className="hover:text-[#019A32] transition">Honors and Awards</Link>
          <Link to="/careers" className="hover:text-[#019A32] transition">Careers</Link>
          <Link to="/contact" className="hover:text-[#019A32] transition">Contact Us</Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-[#019A32] transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Navigation Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0D3333] border-t border-[#019A32] mt-4">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block hover:text-[#019A32] transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block hover:text-[#019A32] transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/honors" 
                  className="block hover:text-[#019A32] transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Honors and Awards
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="block hover:text-[#019A32] transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block hover:text-[#019A32] transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;