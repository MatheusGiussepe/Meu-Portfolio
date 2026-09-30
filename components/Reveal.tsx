"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * Entrada suave ao rolar a página.
 * O conteúdo nasce visível no HTML (bom para SEO e para quem não roda JS);
 * a animação só é aplicada quando o JS carregou e o sistema não pede menos movimento.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
