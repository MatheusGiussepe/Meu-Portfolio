import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const channels: { label: string; value: string; href: string; external?: boolean }[] = [
    { label: "whatsapp", value: site.phone, href: site.whatsapp, external: true },
    { label: "e-mail", value: site.email, href: `mailto:${site.email}` },
    { label: "github", value: "MatheusGiussepe", href: site.links.github, external: true },
    { label: "linkedin", value: "matheusgiussepe", href: site.links.linkedin, external: true },
  ];

  return (
    <section id="contato" className="section wrap contact" aria-labelledby="contato-title">
      <Reveal>
        <h2 id="contato-title" className="contact-title">
          Tem um projeto em mente ou um processo travando a equipe?
        </h2>
        <p className="contact-text">Me conta a ideia. Eu te mostro como tirar do papel e colocar para rodar.</p>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Falar comigo <ArrowUpRight size={18} weight="bold" />
        </a>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="channels">
          {channels.map((c) => (
            <div key={c.label} className="channel">
              <dt>{c.label}</dt>
              <dd>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {c.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
