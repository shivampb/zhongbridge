import { useReveal } from '@/hooks/useReveal';
import { Clock, CalendarDays, Check, ArrowRight } from 'lucide-react';

const sixtyMinuteFeatures = [
  'Quick product checks',
  'Sample inspection',
  'Specific questions',
  'Single-product review',
];

const extendedFeatures = [
  'Multiple products',
  'Larger orders',
  'Detailed sourcing',
  'Repeated inspections',
  'Comparing products',
  'Closely monitoring incoming goods',
];

export default function ExtendedInspection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Extended Inspection
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Need More Than One Hour? Stay Connected Longer.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Customers with larger or more complex sourcing requirements can
            choose extended inspection access, including a 1-week service
            option where available.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto`}
        >
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">60 Minutes</h3>
                <p className="text-sm text-neutral-500">Single session</p>
              </div>
            </div>
            <ul className="space-y-3">
              {sixtyMinuteFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="/#pricing"
              className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              Book a 60-Minute Session
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative p-8 rounded-2xl bg-primary-950 border border-primary-900 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/20 rounded-full blur-[80px]" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center">
                  <CalendarDays className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      Extended / 1 Week
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-accent-500/20 text-accent-300 text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">
                    Multi-day or weekly access
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {extendedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/#pricing"
                className="mt-8 inline-flex items-center gap-2 text-primary-400 font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore Extended Plans
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          Service availability and included features may vary by plan. Contact
          our team to discuss your specific sourcing and inspection needs.
        </p>
      </div>
    </section>
  );
}
