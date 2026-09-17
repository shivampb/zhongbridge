import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, FileCheck2, Video, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const features = [
  {
    icon: FileCheck2,
    title: 'Real Business Address',
    desc: 'A registered virtual office in Zhongshan, ready for your paperwork.',
  },
  {
    icon: Video,
    title: 'Live Inspections',
    desc: 'Walk through your products with a local rep, over live video.',
  },
  {
    icon: ShieldCheck,
    title: 'No Travel Needed',
    desc: 'Handle sourcing, receiving, and QC without ever flying out.',
  },
];

export default function Hero() {
  return (
    <>
      <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
        <img
          src="https://res.cloudinary.com/cjzo6qye/image/upload/v1789630085/ChatGPT_Image_Sep_17_2026_12_54_37_PM.png"
          alt="Local representative inspecting products in Zhongshan, China"
          className="absolute inset-0 w-full h-full object-cover object-left scale-110 origin-left"
        />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-light text-white leading-[1.1] tracking-tight text-[clamp(1.5rem,3.2vw,2.9rem)] max-w-2xl"
          >
            <span className="whitespace-nowrap">Your Business Presence</span>
            <br />
            <span className="whitespace-nowrap text-primary-950">
              In Zhongshan, Without The Flight.
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 text-white/90 font-light leading-[1.6] max-w-lg text-[clamp(1rem,2.2vw,1.2rem)]"
          >
            A virtual office in Zhongshan. Real address, live product
            inspections,{' '}
            <mark className="bg-primary-200/80 text-primary-950 px-1 rounded-sm">
              zero flights.
            </mark>
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 whitespace-nowrap pl-7 pr-2 py-2 rounded-[5px] bg-white text-primary-800 font-medium text-base hover:bg-primary-50 transition-colors"
            >
              Start Your Transformation
              <span className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-primary-600 text-white">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#how-it-works"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-8 left-6 lg:left-8 z-10 flex items-center justify-center w-11 h-11 rounded-[5px] border border-white/30 text-white hover:bg-white/10 transition-colors"
          aria-label="Scroll to how it works"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-primary-950/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-xs font-semibold tracking-wider text-white/50 uppercase">
              Why Buyers Trust Us
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-2 text-white/80">
                  <Icon className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[5px] bg-primary-50 ring-1 ring-primary-100 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary-100 p-2"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-[5px] bg-primary-600 text-white shadow-sm">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-primary-950 text-base">{title}</p>
                  <p className="text-primary-500 text-sm leading-snug mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
