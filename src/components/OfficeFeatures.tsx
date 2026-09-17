import { useReveal } from '@/hooks/useReveal';
import {
  PackagePlus,
  Archive,
  Video,
  BadgeCheck,
  Undo2,
  Boxes,
  Globe2,
  Headset,
} from 'lucide-react';

const features = [
  {
    icon: PackagePlus,
    title: 'Product Receiving',
    desc: 'Have products delivered to your China-based virtual office.',
  },
  {
    icon: Archive,
    title: 'Product Holding',
    desc: 'Keep products at the office according to your selected service.',
  },
  {
    icon: Video,
    title: 'Live Inspection',
    desc: 'Book video sessions with a representative to inspect products in real time.',
  },
  {
    icon: BadgeCheck,
    title: 'Product Verification',
    desc: 'Review product condition and specifications remotely before committing.',
  },
  {
    icon: Undo2,
    title: 'Return Identification',
    desc: 'Identify products requiring return or replacement before shipping.',
  },
  {
    icon: Boxes,
    title: 'Bulk Order Review',
    desc: 'Review products before committing to larger quantities.',
  },
  {
    icon: Globe2,
    title: 'Remote China Presence',
    desc: 'Maintain a practical business presence in China without being physically there.',
  },
  {
    icon: Headset,
    title: 'International Coordination',
    desc: 'Manage your China-side product process from anywhere in the world.',
  },
];

export default function OfficeFeatures() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="virtual-office"
      className="relative py-24 lg:py-32 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Virtual Office Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            What Your Virtual Office Can Do
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            More than a storage location — your virtual office is a complete
            remote product management presence in China.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} group p-6 rounded-xl bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-primary-50 flex items-center justify-center mb-5 transition-colors">
                <feature.icon className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
