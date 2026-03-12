import { Link } from 'react-router-dom';
import logo from '@/assets/securefox-logo.avif';

const Footer = () => {
  return (
    <footer className="bg-sf-surface border-t-2 border-sf-green/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="SecureFox" className="h-8 w-auto" />
        </Link>
        <p className="text-xs text-sf-text/40 font-barlow">
          © {new Date().getFullYear()} SecureFox Security Services Pty Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy', to: '/privacy-policy' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs font-rajdhani uppercase tracking-wider text-sf-text/50 hover:text-sf-green transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
