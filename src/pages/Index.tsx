import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Building, DoorOpen, ShieldCheck, BadgeCheck, Brain, Clock, SlidersHorizontal, Handshake, ChevronDown } from 'lucide-react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Fox3D from '@/components/Fox3D';
import StatsBar, { TrustStrip } from '@/components/StatsBar';

const services = [
  {
    icon: <Shield size={28} />,
    title: 'Security Guards',
    body: 'Licensed, highly-trained security personnel available 24/7. Our guards pass a rigorous recruitment process ensuring professionalism on every assignment.',
  },
  {
    icon: <Building size={28} />,
    title: 'Corporate & Events',
    body: 'From high-profile corporate functions to large-scale public events — we design and execute bespoke security plans that keep guests and assets protected.',
  },
  {
    icon: <DoorOpen size={28} />,
    title: 'Concierge Security',
    body: 'Redefining first impressions. Our concierge officers combine elite access control with unmatched professionalism for premium buildings.',
  },
];

const whyFeatures = [
  { icon: <ShieldCheck size={22} />, title: 'VETERAN-LED COMMAND', desc: 'Military precision applied to civilian security — real experience, not just credentials.' },
  { icon: <BadgeCheck size={22} />, title: 'VICTORIA POLICE LICENSED', desc: 'Every officer individually licensed. Company licence 946-182-80S. No exceptions.' },
  { icon: <Brain size={22} />, title: 'BEHAVIOURAL INTELLIGENCE TRAINED', desc: 'Our officers are trained in criminal psychology and pre-incident threat recognition.' },
  { icon: <Clock size={22} />, title: '24/7 OPERATIONS, 365 DAYS', desc: 'Incidents don\'t keep business hours. Neither do we — ever.' },
  { icon: <SlidersHorizontal size={22} />, title: 'FULLY BESPOKE SECURITY PLANS', desc: 'Risk-assessed, individually designed security — never a template approach.' },
  { icon: <Handshake size={22} />, title: 'LONG-TERM CLIENT PARTNERSHIPS', desc: 'We build relationships, not just rosters. Our clients stay because we consistently deliver.' },
];

const industries = [
  { emoji: '🏢', title: 'CORPORATE OFFICES', desc: 'Executive environments demand security that\'s professional, discreet, and unwavering. SecureFox corporate security officers protect your people, your assets, and your reputation — without disrupting the flow of business.' },
  { emoji: '🎪', title: 'EVENTS & CONCERTS', desc: 'From intimate private functions to large-scale public events, our event security teams manage crowd dynamics, access control, and incident response so your event runs exactly as planned.' },
  { emoji: '🏬', title: 'SHOPPING CENTRES', desc: 'High foot traffic and complex multi-tenant environments require specialist retail security expertise. SecureFox delivers visible deterrence, loss prevention, and rapid incident response across Melbourne\'s retail sector.' },
  { emoji: '🏠', title: 'RESIDENTIAL BUILDINGS', desc: 'Your residents trust that home is safe. We protect that trust with professional building security, access management, and around-the-clock monitoring for apartment complexes and residential towers.' },
  { emoji: '🎓', title: 'EDUCATIONAL INSTITUTIONS', desc: 'Schools, universities, and training facilities require a security approach that\'s firm but never intimidating. SecureFox provides campus security solutions that prioritise safety without disrupting learning environments.' },
  { emoji: '🏗️', title: 'CONSTRUCTION SITES', desc: 'Plant, equipment, and materials theft costs the Australian construction industry hundreds of millions each year. Our construction site security deters theft, controls site access, and protects your investment overnight.' },
  { emoji: '🏨', title: 'HOTELS & HOSPITALITY', desc: 'Hospitality venues demand security that\'s invisible to guests but razor-sharp in practice. SecureFox hospitality security officers are trained to handle incidents discreetly, protecting your brand as much as your premises.' },
  { emoji: '🏥', title: 'HEALTHCARE FACILITIES', desc: 'Hospitals and medical centres present unique security challenges — emotional visitors, vulnerable patients, and 24-hour operations. Our healthcare security teams are trained to handle these environments with care, empathy, and firm professionalism.' },
];

const steps = [
  { num: '01', title: 'CONFIDENTIAL CONSULTATION', body: 'Everything begins with a conversation. Contact SecureFox by phone, email, or our online form and we\'ll arrange a confidential consultation at a time that suits you — on-site or remote, your choice. We\'ll ask the right questions about your environment, your operational patterns, your existing security measures, and the specific risks or concerns that prompted you to reach out. This isn\'t a sales call. It\'s the beginning of genuinely understanding your security situation.' },
  { num: '02', title: 'PROFESSIONAL RISK ASSESSMENT', body: 'Following your consultation, our senior security team conducts a thorough risk assessment of your environment. This involves a physical inspection of your premises, identification of access points and vulnerabilities, review of existing security infrastructure, assessment of your operational hours and patterns, and evaluation of the specific threat vectors relevant to your industry and location. The output is a detailed understanding of where your security gaps actually are — not where a template assumes they might be.' },
  { num: '03', title: 'BESPOKE SECURITY PROPOSAL', body: 'Based on the risk assessment, we develop a fully tailored security proposal designed specifically for your environment and budget. The proposal outlines our recommended security model, the qualifications and briefing of the officers we\'d deploy, operational procedures and reporting protocols, and clear, transparent pricing with no hidden charges. We present this in person wherever possible, walking you through every element so you can make a fully informed decision. There are no lock-in contracts and no pressure — just a professional proposal you can evaluate at your own pace.' },
  { num: '04', title: 'DEPLOYMENT & ONGOING REVIEW', body: 'Once you\'re ready to proceed, we handle everything. Our officers are fully briefed on your site-specific protocols, your expectations, and the particular security challenges of your environment before their first shift. We don\'t just deploy and disappear — your dedicated SecureFox contact remains available around the clock, and we conduct regular operational reviews to ensure your security package continues to evolve with your needs. As your business changes, your security should change with it.' },
];

const testimonials = [
  { quote: 'We\'ve used several security companies across our Melbourne properties over the years, and SecureFox is genuinely in a different class. Their concierge officers are professional, personable, and switched on — exactly what you want managing the front desk of a premium residential building. Issues that used to escalate now get handled quietly before residents even notice.', name: 'James R.', role: 'Owners Corporation Manager, Melbourne CBD' },
  { quote: 'We run a major annual corporate event with over 800 attendees and I wouldn\'t trust anyone else with the security management. The SecureFox team worked through our access control plan with us from the ground up, had contingencies for everything, and on the night were completely invisible — which is exactly what you want. Not a single incident in three years.', name: 'Sarah M.', role: 'Head of Events, Financial Services Firm, Melbourne' },
  { quote: 'As a shopping centre manager, security is one of my biggest operational headaches. Since bringing SecureFox on board, incident rates have dropped noticeably and our tenants have commented on the improvement in the centre\'s atmosphere. The team is proactive, not reactive — and that makes all the difference.', name: 'David K.', role: 'Centre Manager, Melbourne Metropolitan' },
];

const faqs = [
  { q: 'Are all SecureFox security officers licensed in Victoria?', a: 'Yes — without exception. Every SecureFox security officer holds a current individual security licence issued by the Victoria Police Security Licensing & Regulation Division before they are permitted to work on any client site. Our company holds Business Licence 946-182-80S, and we verify every officer\'s licence currency on an ongoing basis. If you\'d like confirmation of any officer\'s credentials before deployment, we\'re happy to provide it.' },
  { q: 'How quickly can SecureFox deploy security for an urgent requirement?', a: 'For planned events and new ongoing contracts, we request 5–7 business days to complete a proper risk assessment and fully brief our team on your specific site and requirements. For genuinely urgent situations, please call us directly on 1300 911 369 — we understand that security needs don\'t always come with notice, and we\'ll do everything within our power to accommodate short-notice requests without compromising on the quality of our deployment.' },
  { q: 'What areas of Melbourne does SecureFox service?', a: 'SecureFox provides security services across Melbourne\'s entire metropolitan area including the CBD, inner suburbs, eastern suburbs, northern suburbs, western suburbs, and the Mornington Peninsula. We also service selected regional Victoria locations — please contact us directly to discuss your requirements if you\'re located outside of greater Melbourne.' },
  { q: 'How does SecureFox vet its security officers?', a: 'Our vetting process is one of the most thorough in the Melbourne security industry, and we\'re proud of that. Every applicant undergoes a national police background check, individual security licence verification with Victoria Police, professional reference checks with previous employers, a practical security competency assessment, and a face-to-face interview with SecureFox senior management. We reject the majority of applicants. Our clients deserve better than average, so we hire better than average.' },
  { q: 'Do you provide both short-term event security and long-term ongoing contracts?', a: 'Yes to both. SecureFox works with clients on everything from a single-night event security deployment to multi-year ongoing security contracts for commercial and residential properties. Our approach remains the same regardless of duration — a proper site assessment, tailored deployment, and consistent professional standards throughout.' },
  { q: 'What is included in a tailored security proposal from SecureFox?', a: 'Our proposals include a summary of the risk assessment findings, our recommended security model and officer deployment plan, detailed officer briefing and site-specific protocols, operational procedures including reporting, incident response, and escalation protocols, transparent pricing broken down by component with no hidden fees, and proposed review and communication schedule. Everything is presented clearly so you can make a fully informed decision.' },
  { q: 'Can SecureFox work with our existing CCTV and access control systems?', a: 'Yes. SecureFox officers are experienced working alongside a wide range of CCTV, intercoms, and access control systems. As part of our site assessment, we\'ll review your existing security infrastructure and advise whether it adequately supports the security model we\'re recommending — or whether upgrades may be warranted. We can integrate CCTV monitoring into our service offering if required.' },
  { q: 'What is the difference between a security guard and a concierge security officer?', a: 'A security guard\'s primary function is physical deterrence, access control, patrol, and incident response. A concierge security officer performs all of these functions but also serves as the first point of contact for visitors, tenants, and residents — managing sign-ins, handling enquiries, and maintaining a professional front-of-house presence. SecureFox trains both roles to the same rigorous standard, but our concierge officers receive additional customer service and communication training to match the elevated expectations of premium buildings and environments.' },
  { q: 'Are SecureFox security officers trained in first aid?', a: 'Yes. All SecureFox security officers hold a current first aid certification, and our teams are trained in emergency response and evacuation procedures. In environments with specific first-response requirements — such as healthcare facilities or large events — we can deploy officers with advanced first aid or CPR training as part of your tailored security package.' },
  { q: 'How does SecureFox handle incidents and reporting?', a: 'Every incident attended by a SecureFox officer is documented in a detailed written incident report, which is provided to the client promptly following the event. For ongoing contracts, we also provide regular operational reports covering attendance, incidents, observations, and any recommended adjustments to your security package. We believe transparent reporting is a core part of the service — you should always know exactly what is happening on your site.' },
  { q: 'Does SecureFox offer mobile patrol services?', a: 'Yes. Mobile patrol services can be incorporated into any SecureFox security package. Our mobile patrols are an effective and cost-efficient way to provide a visible security presence across larger sites, multiple properties, or locations that don\'t require a full-time stationed officer. Patrols are conducted on randomised schedules to maximise deterrence and can be combined with alarm response services.' },
  { q: 'How do I get a quote from SecureFox?', a: 'Getting a quote is straightforward — contact us via the form on our website, email us at info@securefox.com.au, or call us directly on 1300 911 369. We\'ll arrange a confidential consultation, conduct a proper assessment of your requirements, and provide a transparent written proposal. There\'s no obligation and no pressure — just professional advice from Melbourne\'s most trusted security team.' },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-sf-dark">
        <ParticleCanvas />
        <div className="grid-overlay" />
        <Fox3D />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="section-label hero-anim hero-anim-1">Melbourne's Premier Security</div>
            <h1
              className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              YOUR
              <br />
              <span className="glow-text">SIXTH</span>
              <br />
              SENSE.
            </h1>
            <p className="hero-anim hero-anim-3 mt-6 text-sf-text/50 font-barlow font-300 text-lg max-w-lg leading-relaxed">
              Military-grade expertise meets civilian protection. SecureFox delivers bespoke security
              solutions across Melbourne — 24 hours, 7 days.
            </p>
            <div className="hero-anim hero-anim-4 flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-clip btn-clip-filled">
                Get Protected Now
              </Link>
              <Link to="/services" className="btn-clip btn-clip-outline">
                Our Services
              </Link>
            </div>
            <div className="hero-anim hero-anim-5 flex items-center gap-3 mt-10">
              <span className="pulse-dot" />
              <span className="font-barlow text-sm text-sf-text/50">
                Open 24 Hours — <span className="text-sf-green">1300 911 369</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Why Choose SecureFox */}
      <section className="bg-sf-dark py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="section-label">Why SecureFox</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-4">
            SECURITY YOU CAN <br className="hidden md:block" />
            <span className="glow-text">ACTUALLY TRUST.</span>
          </h2>
          <p className="font-barlow font-300 text-sf-text/50 max-w-[560px] mb-12 leading-relaxed">
            In an industry where anyone can hang a shingle, SecureFox is different.
            Every officer is vetted. Every plan is tailored. Every deployment is
            backed by over 20 years of real operational experience.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="font-barlow font-300 text-[1.1rem] leading-[1.9] text-sf-text/65 space-y-6">
              <p>Founded by a military veteran who has spent two decades operating in some of the most high-pressure security environments in the world, SecureFox was built on a simple but powerful idea: security done properly looks invisible. When you hire SecureFox, your clients, guests, and residents shouldn't feel like they're in a fortress — they should simply feel safe.</p>
              <p>That standard of invisible, professional security is something most Melbourne security companies talk about. SecureFox actually delivers it.</p>
              <p>We achieve this because of how we hire, how we train, and how we deploy. Every SecureFox officer passes a rigorous multi-stage vetting process that includes national police background checks, Victoria Police licence verification, reference screening, and a face-to-face competency assessment with senior management. We turn away the majority of applicants — because our clients deserve only the best.</p>
              <p>Our team is also trained in something most security companies don't even mention: criminal psychology and human behavioural analysis. We don't just post guards at doors. We teach our people how to read environments, identify pre-incident indicators, and position themselves to neutralise threats before they become incidents. This intelligence-led, prevention-first approach is what genuinely sets SecureFox apart.</p>
            </div>

            <div className="space-y-6">
              {whyFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-sf-green/15 bg-sf-green/5 text-sf-green shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-rajdhani font-700 text-sm tracking-wider mb-1">{f.title}</div>
                    <p className="font-barlow font-300 text-sm text-sf-text/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-sf-surface py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="section-label">Industries</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-4">
            PROTECTING MELBOURNE <br className="hidden md:block" />
            <span className="glow-text">ACROSS EVERY SECTOR.</span>
          </h2>
          <p className="font-barlow font-300 text-sf-text/50 max-w-[600px] mb-12 leading-relaxed">
            Security risk looks different in every environment. That's why SecureFox has developed deep specialist expertise across Melbourne's most demanding industries — so your security partner actually understands your world.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="industry-card bg-sf-card border border-sf-white-8 p-6 relative overflow-hidden transition-all duration-300 hover:border-sf-green/20 hover:-translate-y-1 group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-sf-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-3xl mb-4">{ind.emoji}</div>
                <h3 className="font-rajdhani font-700 text-xs md:text-sm tracking-wider mb-3">{ind.title}</h3>
                <p className="font-barlow font-300 text-xs text-sf-text/50 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-sf-dark py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="section-label">What We Offer</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-12">
            FEATURED <span className="glow-text">SERVICES.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="text-sf-green mb-5">{s.icon}</div>
                <h3 className="font-rajdhani font-700 text-lg mb-3 uppercase tracking-wide">{s.title}</h3>
                <p className="font-barlow font-300 text-sm text-sf-text/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="font-rajdhani font-600 text-sm uppercase tracking-wider text-sf-green hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-sf-dark py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="section-label">Our Process</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-4">
            GET PROTECTED IN <br className="hidden md:block" />
            <span className="glow-text">4 SIMPLE STEPS.</span>
          </h2>
          <p className="font-barlow font-300 text-sf-text/50 max-w-[560px] mb-12 leading-relaxed">
            Getting started with SecureFox is straightforward. We've designed our onboarding process to be fast, transparent, and completely focused on your actual security needs — not our sales targets.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-sf-card border border-sf-white-8 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-4 right-6 font-rajdhani font-700 text-sf-green/10 text-[5rem] leading-none select-none pointer-events-none">
                  {s.num}
                </div>
                <div className="relative z-10">
                  <div className="font-rajdhani font-600 text-sf-green text-xs tracking-widest mb-2">STEP {s.num}</div>
                  <h3 className="font-rajdhani font-700 text-lg md:text-xl mb-4">{s.title}</h3>
                  <p className="font-barlow font-300 text-sm text-sf-text/50 leading-[1.9]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sf-surface py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="section-label">Testimonials</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-4">
            TRUSTED BY MELBOURNE <br className="hidden md:block" />
            <span className="glow-text">BUSINESSES EVERY DAY.</span>
          </h2>
          <p className="font-barlow font-300 text-sf-text/50 max-w-[560px] mb-12 leading-relaxed">
            Don't take our word for it. Here's what Melbourne businesses and property managers say about working with SecureFox.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-sf-card border border-sf-white-8 p-8 flex flex-col">
                <div className="font-rajdhani text-5xl text-sf-green/30 leading-none mb-4">"</div>
                <p className="font-barlow font-300 text-sm text-sf-text/60 leading-[1.9] italic flex-1">{t.quote}</p>
                <div className="mt-6 pt-6 border-t border-sf-green/10">
                  <div className="font-rajdhani font-700 text-sm">{t.name}</div>
                  <div className="font-barlow font-300 text-xs text-sf-green/70">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sf-dark py-[120px]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="section-label">FAQ</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-4">
            COMMON QUESTIONS <br className="hidden md:block" />
            <span className="glow-text">ANSWERED.</span>
          </h2>
          <p className="font-barlow font-300 text-sf-text/50 max-w-[560px] mb-12 leading-relaxed">
            Everything you need to know about working with SecureFox. Can't find your answer? Call us on 1300 911 369 — we're available 24/7.
          </p>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-sf-white-8 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-sf-green/5 transition-colors"
                >
                  <span className="font-rajdhani font-600 text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-sf-green shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '600px' : '0px' }}
                >
                  <p className="px-6 pb-6 font-barlow font-300 text-sm text-sf-text/50 leading-[1.9]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustStrip />
    </>
  );
};

export default Home;
