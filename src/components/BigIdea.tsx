import { Globe, Building2, MapPin, Package, Video } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const flowSteps = [
  { icon: Globe, label: 'Global Customer', desc: 'You, anywhere in the world' },
  { icon: Building2, label: 'Virtual Office', desc: 'Your dedicated cubicle in China' },
  { icon: MapPin, label: 'Zhongshan, China', desc: 'Strategic manufacturing hub' },
  { icon: Package, label: 'Customer Products', desc: 'Received and held at your office' },
  { icon: Video, label: 'Live Video Inspection', desc: 'Real-time product verification' },
];

export default function BigIdea() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
            The Big Idea
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A Physical Presence in China.
            <span className="block text-primary-400">Managed Remotely.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            We give you access to a virtual office in Zhongshan where your
            products are received and managed. You stay in control — without
            being there.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} max-w-4xl mx-auto`}
        >
          <div className="flex flex-col items-center gap-0">
            {flowSteps.map((step, i) => (
              <div
                key={step.label}
                className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${i + 1} w-full flex flex-col items-center`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex items-center gap-5 w-full max-w-2xl">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-white">
                      {step.label}
                    </div>
                    <div className="text-sm text-neutral-400">{step.desc}</div>
                  </div>
                  <div className="hidden sm:block text-2xl font-bold text-neutral-700">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent my-1" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-display font-bold text-white leading-snug">
              Your products are physically in China.
              <span className="block text-primary-400 mt-1">
                You don't have to be.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
