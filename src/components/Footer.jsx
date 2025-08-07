import { Link } from 'react-router-dom';
import marvyLogo from '../assets/marvy_logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#0D3333] text-[#C1C1C1] py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img 
            src={marvyLogo} 
            alt="Marvy Agric Solutions Logo"
            className="w-48 h-24 object-contain mb-4"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#019A32] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#019A32] transition">Services</Link></li>
            <li><Link to="/honors" className="hover:text-[#019A32] transition">Honors</Link></li>
            <li><Link to="/careers" className="hover:text-[#019A32] transition">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#019A32] transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>MAgris</li>
            <li>MarvyEngrs</li>
            <li>MarvyMetalWorks</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p>Email: info@marvyagrics.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: KM 15, Owiwi, Sango Ota Road, Akinjole Town Abeokuta, Ogun State 110106, NG</p>
          
          {/* Social Media Icons */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold mb-4 text-[#C1C1C1]">Follow Us</h5>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a 
                href="https://ng.linkedin.com/company/marvyagrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C1C1C1] hover:text-[#0077B5] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/marvyagrics/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C1C1C1] hover:text-[#E4405F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/MarvyAgrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C1C1C1] hover:text-[#1DA1F2] transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Threads */}
              <a 
                href="https://www.threads.com/@marvyagrics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C1C1C1] hover:text-[#000000] transition-colors duration-300"
                aria-label="Threads"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.002c0-3.584.85-6.438 2.495-8.489C5.845 1.209 8.598.028 12.179.004h.007c3.581.024 6.334 1.205 8.184 3.509C22.35 5.562 23.2 8.416 23.2 12.002c0 3.584-.85 6.438-2.495 8.489C18.155 22.791 15.402 23.972 11.821 23.996h-.007zM12.186 2.5c-2.924.019-5.164.784-6.718 2.295C3.914 6.306 3 8.987 3 12.002c0 3.015.914 5.696 2.468 7.207 1.554 1.511 3.794 2.276 6.718 2.295 2.924-.019 5.164-.784 6.718-2.295C20.086 17.698 21 15.017 21 12.002c0-3.015-.914-5.696-2.468-7.207C17.35 3.284 15.11 2.519 12.186 2.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-[#019A32] text-center">
        <p>&copy; {new Date().getFullYear()} Marvy Agric Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;