import { useReveal } from '@/hooks/useReveal';
import { MapPin, Factory, Ship, Train, Plane } from 'lucide-react';

const connections = [
  { city: 'Guangzhou', distance: '130 km', icon: Train },
  { city: 'Shenzhen', distance: '100 km', icon: Train },
  { city: 'Hong Kong', distance: '80 km', icon: Ship },
  { city: 'Macau', distance: '50 km', icon: Plane },
];

export default function WhyZhongshan() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-600/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
              Why Zhongshan?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Gateway to China's Manufacturing Network
            </h2>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              Zhongshan sits in the heart of the Greater Bay Area, one of the
              world's most concentrated manufacturing regions. Its proximity to
              Guangzhou, Shenzhen, and Hong Kong gives your virtual office
              direct access to suppliers, factories, and logistics networks.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: 'Manufacturing Hub', desc: 'Home to thousands of factories across electronics, lighting, hardware, and more.' },
                { icon: Ship, label: 'Logistics Access', desc: 'Connected to major ports and airports for efficient shipping and receiving.' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <item.icon className="w-6 h-6 text-primary-400 mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} relative`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/10" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary-600 flex flex-col items-center justify-center shadow-2xl shadow-primary-600/30">
                <MapPin className="w-7 h-7 text-white mb-1" />
                <span className="text-white font-bold text-lg">Zhongshan</span>
                <span className="text-primary-200 text-xs">Guangdong</span>
              </div>

              {connections.map((conn, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={conn.city}
                    className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${i + 1} absolute top-1/2 left-1/2`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
                        <conn.icon className="w-5 h-5 text-primary-400 mb-1" />
                        <span className="text-white text-xs font-semibold">
                          {conn.city}
                        </span>
                        <span className="text-neutral-400 text-[10px]">
                          {conn.distance}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="absolute top-1/2 left-1/2 pointer-events-none"
                      style={{
                        transform: `translate(${-x * 0.5}px, ${-y * 0.5}px)`,
                        width: '2px',
                        height: '2px',
                      }}
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2={-x * 0.7}
                        y2={-y * 0.7}
                        stroke="rgba(31, 147, 255, 0.3)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-center text-sm text-neutral-400">
              Greater Bay Area — Guangdong, China
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
