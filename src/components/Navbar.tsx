import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why ZhongBridge', href: '/why-us' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav
          className={`max-w-5xl mx-auto rounded-full bg-neutral-50/95 backdrop-blur-md ring-1 ring-neutral-200/70 transition-shadow duration-300 px-4 lg:px-6 ${
            scrolled ? 'shadow-lg' : 'shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between h-14 lg:h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center transition-transform group-hover:scale-105">
                <Building2 className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span className="font-display font-bold text-base text-neutral-900">
                ZhongBridge
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/#contact"
                className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                Talk to Us
              </a>
              <a
                href="/#pricing"
                className="px-5 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
              >
                Get Started
              </a>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 text-neutral-900"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-neutral-950/35 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute right-0 top-0 bottom-0 w-[min(88vw,360px)] h-[100dvh] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-100">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" strokeWidth={2.2} />
                  </div>
                  <span className="font-display font-bold text-base text-neutral-900">
                    ZhongBridge
                  </span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.4, ease: EASE }}
                    className="py-3 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors border-b border-neutral-50"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + navLinks.length * 0.07, duration: 0.4, ease: EASE }}
                  className="mt-4 px-5 py-3 rounded-[5px] bg-primary-600 text-white text-center text-sm font-semibold hover:bg-primary-700 transition-colors"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
