import { useReveal } from '@/hooks/useReveal';
import {
  Plane,
  Hotel,
  Car,
  Utensils,
  CalendarX,
  RefreshCw,
  Building2,
  PackagePlus,
  Video,
  MessageSquare,
  Globe2,
  X,
  Check,
} from 'lucide-react';

const travelCosts = [
  { icon: Plane, label: 'International flights' },
  { icon: Hotel, label: 'Hotel stays' },
  { icon: Car, label: 'Local transportation' },
  { icon: Utensils, label: 'Meals and daily expenses' },
  { icon: CalendarX, label: 'Lost working days' },
  { icon: RefreshCw, label: 'Repeated for every order' },
];

const virtualCosts = [
  { icon: Building2, label: 'Virtual office subscription' },
  { icon: PackagePlus, label: 'Product receiving' },
  { icon: Video, label: 'Live video inspection' },
  { icon: MessageSquare, label: 'Remote communication' },
  { icon: Globe2, label: 'Product decisions from anywhere' },
];

export default function ComparisonSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Travel vs Virtual Presence
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Replace Repeated Trips With a Virtual Presence
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            The traditional approach requires significant effort and logistics
            for every order. A virtual office gives you a consistent presence
            without the travel.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto`}
        >
          <div className="p-8 rounded-2xl bg-white border border-neutral-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center">
                <Plane className="w-5 h-5 text-neutral-500" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Traditional China Visit
              </h3>
            </div>
            <ul className="space-y-3">
              {travelCosts.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-error-50 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-error-500" strokeWidth={3} />
                  </div>
                  <item.icon className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-600">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-primary-600 border border-primary-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Virtual China Office
                </h3>
              </div>
              <ul className="space-y-3">
                {virtualCosts.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <item.icon className="w-4 h-4 text-primary-200" />
                    <span className="text-primary-50">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          The difference isn't just cost — it's the ability to verify every
          order without the logistical burden of international travel.
        </p>
      </div>
    </section>
  );
}
