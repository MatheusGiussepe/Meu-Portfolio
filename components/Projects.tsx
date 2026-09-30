import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

const stateLabel = { producao: "em produção", desenvolvimento: "em desenvolvimento" } as const;

export function Projects() {
  return (
    <section id="sistemas" className="section wrap" aria-labelledby="sistemas-title">
      <Reveal>
        <h2 id="sistemas-title" className="h2">
          <span className="h2-sign" aria-hidden="true">&gt;</span> Sistemas que eu construí
        </h2>
      </Reveal>

      <div className="systems">
        {site.projects.map((p, i) => (
          <Reveal key={p.title} as="div" delay={i * 0.05}>
            <article className="sys">
              <div className="sys-meta">
                <span className="state" data-state={p.state}>{stateLabel[p.state]}</span>
                <span className="sys-year">{p.year}</span>
              </div>

              <div className="sys-text">
                <h3 className="sys-title">{p.title}</h3>
                <p className="sys-desc">{p.description}</p>
                <ul className="sys-stack" aria-label="Tecnologias">
                  {p.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
                {p.live && (
                  <a className="sys-link" href={p.live} target="_blank" rel="noreferrer">
                    Abrir <ArrowUpRight size={14} weight="bold" />
                  </a>
                )}
              </div>

              <div className="sys-media">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Tela do ${p.title}`}
                    fill
                    sizes="(min-width: 960px) 40vw, 100vw"
                  />
                ) : (
                  <span className="sys-placeholder" aria-hidden="true">{p.title}</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
