import { useReveal } from '@/hooks/useReveal';
import {
  Package,
  Truck,
  Bell,
  CalendarCheck,
  Box,
  Eye,
  AlertTriangle,
  Flag,
  CheckCircle2,
  ArrowDown,
} from 'lucide-react';

const timeline = [
  { icon: Package, label: '500 units ordered', detail: 'You place your bulk order with the supplier.' },
  { icon: Truck, label: 'Supplier sends products', detail: 'The supplier ships your products to Zhongshan.' },
  { icon: Box, label: 'Products arrive at your office', detail: 'Your virtual office receives the shipment.' },
  { icon: Bell, label: 'You receive notification', detail: 'We notify you that your products have arrived.' },
  { icon: CalendarCheck, label: 'You book a 60-minute inspection', detail: 'Choose a time that works for you.' },
  { icon: Eye, label: 'Representative opens the shipment', detail: 'Live video session begins. Products are unboxed on camera.' },
  { icon: Eye, label: 'You inspect the products live', detail: 'Direct the representative to check quality, quantity, and details.' },
  { icon: AlertTriangle, label: 'You identify 20 defective units', detail: 'Spot issues in real time without being there.' },
  { icon: Flag, label: 'Defective units flagged for return', detail: 'Those units are set aside for replacement.' },
  { icon: CheckCircle2, label: 'Approved products continue to fulfillment', detail: '480 good units proceed toward shipping.' },
];

export default function TrustScenario() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
            How It Works in Real Life
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            You Ordered 500 Units. What Happens Next?
          </h2>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            A concrete look at how the virtual office and live inspection work
            together — from order to approved shipment.
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} relative pl-20`}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {item.detail}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-neutral-600 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  {i < timeline.length - 1 && (
                    <ArrowDown className="absolute left-[18px] -bottom-4 w-5 h-5 text-primary-500/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-success-600/10 border border-success-600/20 flex items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-success-400 flex-shrink-0" />
            <p className="text-neutral-200">
              <span className="font-semibold text-white">Result:</span> 480
              units approved and shipped. 20 defective units caught before they
              cost you money — all without leaving your office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
