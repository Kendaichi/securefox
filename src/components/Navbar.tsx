import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/securefox-logo.avif';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sf-dark/80 backdrop-blur-xl border-b border-sf-green/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[88px]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="SecureFox Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-rajdhani font-600 text-sm uppercase tracking-wider transition-colors pb-1 ${
                location.pathname === link.to
                  ? 'text-sf-green'
                  : 'text-sf-text/70 hover:text-sf-green'
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sf-green rounded-full shadow-[0_0_8px_rgba(18,243,8,0.8)]" />
              )}
            </Link>
          ))}
          <Link to="/contact" className="btn-clip btn-clip-filled text-xs ml-2">
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sf-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-sf-surface/95 backdrop-blur-md border-t border-sf-green/15 px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block font-rajdhani font-600 text-sm uppercase tracking-wider py-2 ${
                location.pathname === link.to ? 'text-sf-green' : 'text-sf-text/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-clip btn-clip-filled text-xs block text-center mt-4">
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
