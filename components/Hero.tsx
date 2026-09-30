"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  });

  // Anos de experiência calculados a partir do primeiro trabalho em content/site.ts.
  const desde = Number(site.experience.at(-1)?.period.match(/\d{4}/)?.[0]);
  const anos = desde ? new Date().getFullYear() - desde : 0;

  const status: [string, string][] = [
    ["experiência", `${anos}+ anos`],
    ["faço", "sites, sistemas, automação e IA"],
    ["entrega", "do levantamento ao deploy"],
    ["stack", "Next.js, React, Node.js, PostgreSQL"],
  ];

  return (
    <section id="topo" className="hero wrap">
      <div className="hero-main">
        <motion.p className="prompt" {...item(0)}>
          <span className="prompt-sign" aria-hidden="true">$</span> whoami
        </motion.p>
        <motion.h1 className="hero-title" {...item(1)}>
          {site.headline}
          <span className="cursor" aria-hidden="true" />
        </motion.h1>
        <motion.p className="hero-intro" {...item(2)}>{site.intro}</motion.p>
        <motion.div className="hero-actions" {...item(3)}>
          <a href="#contato" className="btn btn-primary">
            Falar comigo <ArrowUpRight size={16} weight="bold" />
          </a>
          <a href="#sistemas" className="btn btn-ghost">Ver sistemas</a>
        </motion.div>
      </div>

      <motion.dl className="readout" aria-label="Resumo" {...item(4)}>
        {status.map(([k, v]) => (
          <div key={k} className="readout-row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
