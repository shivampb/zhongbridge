import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const negativeBottom = options?.rootMargin?.match(/(-?\d+)%\s+0px$/);
    const startOffset = negativeBottom ? 100 - Math.abs(Number(negativeBottom[1])) : 85;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${startOffset}%`,
      once: true,
      onEnter: () => {
        setIsVisible(true);
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'opacity,transform' }
        );
      },
    });

    return () => trigger.kill();
  }, []);

  return { ref, isVisible };
}
