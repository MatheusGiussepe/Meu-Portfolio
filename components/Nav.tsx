"use client";

import { useEffect, useRef } from "react";

export function Nav() {
  const ref = useRef<HTMLElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // Mostra a borda inferior só depois que a página rola (sem listener de scroll).
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      ref.current?.setAttribute("data-scrolled", String(!entry.isIntersecting));
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />
      <header ref={ref} className="nav">
        <div className="wrap nav-inner">
          <a href="#topo" className="brand" aria-label="Matheus Giussepe, início">
            <span className="brand-user">matheus</span>
            <span className="brand-sep">@</span>
            <span className="brand-host">giussepe</span>
            <span className="brand-path">:~</span>
          </a>
          <nav className="nav-links" aria-label="Seções">
            <a href="#servicos">serviços</a>
            <a href="#sistemas">sistemas</a>
            <a href="#processo">processo</a>
            <a href="#historico">histórico</a>
          </nav>
          <a href="#contato" className="btn btn-primary btn-sm">Falar comigo</a>
        </div>
      </header>
    </>
  );
}
