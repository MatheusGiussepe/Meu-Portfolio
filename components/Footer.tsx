import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <small>{site.fullName}, {new Date().getFullYear()}</small>
        <a href="#topo" className="footer-top">voltar ao topo</a>
      </div>
    </footer>
  );
}
