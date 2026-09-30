import { site } from "@/content/site";
import { Reveal } from "./Reveal";

// O caminho que todo projeto percorre, do jeito que ele é hoje até rodar sozinho.
const flow = ["ideia ou problema", "entender", "construir", "entregar", "rodando em produção"];

export function About() {
  return (
    <section id="processo" className="section wrap" aria-labelledby="processo-title">
      <Reveal>
        <h2 id="processo-title" className="h2">
          <span className="h2-sign" aria-hidden="true">&gt;</span> Como eu trabalho
        </h2>
        <p className="statement">{site.about}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="flow" aria-label="Etapas">
          {flow.map((step, i) => (
            <li key={step} data-edge={i === 0 ? "start" : i === flow.length - 1 ? "end" : undefined}>
              <span className="step">{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      <dl className="rules">
        {site.principles.map((pr, i) => (
          <Reveal key={pr.title} delay={i * 0.06} className="rule">
            <dt>{pr.title}</dt>
            <dd>{pr.text}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
