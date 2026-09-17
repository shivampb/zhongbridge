import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  selector?: string;
  stagger?: number;
  y?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = options?.selector
      ? Array.from(container.querySelectorAll(options.selector))
      : Array.from(container.children);

    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y: options?.y ?? 24 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: options?.stagger ?? 0.08,
          clearProps: 'opacity,transform',
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return ref;
}
