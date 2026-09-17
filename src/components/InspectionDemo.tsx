import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReveal } from '@/hooks/useReveal';
import { useStaggerReveal } from '@/hooks/useStaggerReveal';
import {
  Video,
  User,
  MapPin,
  Mic,
  Camera,
  Maximize2,
  ArrowRight,
  Package,
  Ruler,
  Tag,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Palette,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const overlayItems = [
  { icon: Package, label: 'Product Quantity', value: '500 units' },
  { icon: Layers, label: 'Packaging', value: 'Original carton' },
  { icon: CheckCircle2, label: 'Condition', value: 'Good' },
  { icon: Ruler, label: 'Dimensions', value: '25 × 15 × 8 cm' },
  { icon: Palette, label: 'Color', value: 'Matches sample' },
  { icon: Tag, label: 'Labels', value: 'Verified' },
  { icon: AlertTriangle, label: 'Visible Defects', value: '0 found' },
];

export default function InspectionDemo() {
  const { ref, isVisible } = useReveal();
  const checklistRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.06, y: 16 });
  const stackRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: card1Ref.current,
        start: 'top top+=88',
        end: () => `+=${card2Ref.current?.offsetHeight ?? 0}`,
        pin: true,
        pinSpacing: false,
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inspection"
      className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Live Product Inspection
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            See Your Products. Before They Leave China.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Book a 60-minute video session. A representative physically opens,
            handles, and shows your products in real time — while you watch and
            direct the inspection from anywhere.
          </p>
        </div>

        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} />

        <div ref={stackRef} className="relative mb-20">
          <div
            ref={card1Ref}
            className="relative grid lg:grid-cols-2 bg-white ring-1 ring-neutral-200"
          >
            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-[5px] bg-primary-50 text-primary-700 text-xs font-semibold mb-5">
                <User className="w-3.5 h-3.5" />
                You — Customer
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950 mb-4">
                Join the Call From Anywhere
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Log in at your scheduled time and watch your representative
                inspect the product live — no software to install, no travel
                required.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-success-500" />
                    <div className="absolute inset-0 rounded-full bg-success-500 animate-ping" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-900">
                    Connected
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Video className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  Live video — 00:23:45 elapsed
                </div>
                <div className="flex items-center gap-4 text-neutral-500">
                  <Mic className="w-4 h-4" />
                  <Camera className="w-4 h-4" />
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6937870/pexels-photo-6937870.jpeg?auto=compress&cs=tinysrgb&w=1260"
                alt="Customer watching a live video inspection on a laptop"
                className="w-full h-[320px] lg:h-[560px] object-cover rounded-none"
              />
            </div>
          </div>

          <div
            ref={card2Ref}
            className="relative z-10 grid lg:grid-cols-2 bg-white ring-1 ring-neutral-200"
          >
            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-[5px] bg-primary-50 text-primary-700 text-xs font-semibold mb-5">
                <MapPin className="w-3.5 h-3.5" />
                Representative — Zhongshan
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950 mb-4">
                Every Detail, Verified Live
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Your representative opens the packaging on camera and walks
                through quantity, condition, and specifications so you can
                approve{' '}
                <mark className="bg-primary-200/70 text-neutral-900 px-1 rounded-sm">
                  with confidence.
                </mark>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {overlayItems.slice(0, 4).map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-neutral-400 text-[10px] uppercase tracking-wide">
                        {item.label}
                      </div>
                      <div className="text-neutral-900 text-sm font-medium truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1260"
                alt="China representative handling and inspecting a product"
                className="w-full h-[320px] lg:h-[560px] object-cover rounded-none"
              />
            </div>
          </div>
        </div>

        <div ref={checklistRef} className="grid lg:grid-cols-3 gap-4 mb-12">
          {overlayItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-3 text-center`}>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8 italic">
            "You're not watching a warehouse camera. You're communicating
            directly with someone physically handling your products."
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a 60-Minute Inspection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
