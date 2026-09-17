import { useReveal } from '@/hooks/useReveal';
import {
  PackageSearch,
  ShoppingCart,
  Store,
  Building,
  Globe,
} from 'lucide-react';

const audiences = [
  {
    icon: PackageSearch,
    title: 'Importers',
    desc: 'Manage China sourcing without frequent travel.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Sellers',
    desc: 'Review products before committing to larger inventory orders.',
  },
  {
    icon: Store,
    title: 'Amazon Sellers',
    desc: 'Inspect products remotely before shipment.',
  },
  {
    icon: Building,
    title: 'Retailers & Wholesalers',
    desc: 'Keep a closer eye on bulk purchases.',
  },
  {
    icon: Globe,
    title: 'International Buyers',
    desc: 'Have someone on the ground in China while you stay home.',
  },
];

export default function AudienceSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Who Is This For?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Built for International Buyers Who Source From China
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {audiences.map((aud, i) => (
            <div
              key={aud.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} group p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-primary-200 hover:bg-white hover:shadow-lg transition-all text-center`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 group-hover:bg-primary-600 group-hover:border-primary-600 flex items-center justify-center mx-auto mb-5 transition-all">
                <aud.icon className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {aud.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
