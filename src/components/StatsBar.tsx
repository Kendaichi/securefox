import { Shield } from 'lucide-react';

const stats = [
  { number: '20+', label: 'Years of Expertise' },
  { number: '24/7', label: 'Operations' },
  { number: '100%', label: 'Licensed & Vetted' },
  { number: '500+', label: 'Clients Protected' },
];

interface StatsBarProps {
  variant?: 'bar' | 'cards';
}

const StatsBar = ({ variant = 'bar' }: StatsBarProps) => {
  if (variant === 'cards') {
    return (
      <section className="bg-sf-surface py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-sf-card border border-sf-green/10 p-8 text-center">
              <div className="font-rajdhani text-3xl md:text-4xl font-700 text-sf-green mb-2">{s.number}</div>
              <div className="font-barlow text-xs text-sf-text/70 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sf-surface border-y border-sf-green/15">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-8 px-6 text-center group transition-colors hover:bg-sf-green/5 ${
              i < stats.length - 1 ? 'md:border-r border-sf-green/10' : ''
            }`}
          >
            <div className="font-rajdhani text-3xl md:text-4xl font-700 text-sf-green mb-1 group-hover:text-shadow-glow transition-all">{s.number}</div>
            <div className="font-barlow text-xs text-sf-text/70 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const TrustStrip = () => (
  <section className="bg-sf-surface py-6 border-y border-sf-green/10">
    <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-center gap-3 text-center">
      <Shield className="text-sf-green shrink-0" size={18} />
      <p className="font-barlow text-xs text-sf-text/55 uppercase tracking-widest">
        Fully licensed by Victoria Police Security · License: 946-182-80S · Open 24 Hours
      </p>
    </div>
  </section>
);

export default StatsBar;
