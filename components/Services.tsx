import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicos" className="section wrap" aria-labelledby="servicos-title">
      <Reveal>
        <h2 id="servicos-title" className="h2">
          <span className="h2-sign" aria-hidden="true">&gt;</span> O que eu faço
        </h2>
      </Reveal>

      <ul className="services">
        {site.services.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 0.06} className="service">
            <h3 className="service-title">{s.title}</h3>
            <p className="service-text">{s.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
