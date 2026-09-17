import { useReveal } from '@/hooks/useReveal';
import {
  Eye,
  Layers,
  Ruler,
  Palette,
  Package,
  Tag,
  Hash,
  Wrench,
  AlertTriangle,
  Factory,
  BadgeCheck,
  ClipboardList,
  Sparkles,
} from 'lucide-react';

const checklist = [
  { icon: Eye, label: 'Product Appearance' },
  { icon: Layers, label: 'Material and Finish' },
  { icon: Ruler, label: 'Dimensions' },
  { icon: Palette, label: 'Color' },
  { icon: Package, label: 'Packaging' },
  { icon: Tag, label: 'Labels' },
  { icon: Hash, label: 'Quantity' },
  { icon: Wrench, label: 'Accessories' },
  { icon: AlertTriangle, label: 'Visible Defects' },
  { icon: Factory, label: 'Manufacturing Quality' },
  { icon: BadgeCheck, label: 'Branding' },
  { icon: ClipboardList, label: 'Product Specifications' },
];

export default function InspectionChecklist() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            What Can You Check?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Inspect What Matters Before You Buy in Bulk
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            During your live video session, you can direct the representative to
            check any of the following aspects of your products.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {checklist.map((item, i) => (
            <div
              key={item.label}
              className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} group flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-primary-50 flex items-center justify-center flex-shrink-0 transition-colors">
                <item.icon className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
              </div>
              <span className="text-sm font-medium text-neutral-800">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-neutral-500">
          <Sparkles className="w-4 h-4 text-accent-500" />
          <span>
            Inspection scope may depend on your selected service and product
            type.
          </span>
        </div>
      </div>
    </section>
  );
}
