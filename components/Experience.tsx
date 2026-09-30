import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="historico" className="section wrap" aria-labelledby="historico-title">
      <Reveal>
        <h2 id="historico-title" className="h2">
          <span className="h2-sign" aria-hidden="true">&gt;</span> Histórico
        </h2>
      </Reveal>

      <ol className="log">
        {site.experience.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 0.08}>
            <div className="log-row" data-current={job.current ? "true" : "false"}>
              <p className="log-period">{job.period}</p>
              <div>
                <h3 className="log-role">{job.role}</h3>
                <p className="log-company">{job.company}</p>
                <p className="log-summary">{job.summary}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
