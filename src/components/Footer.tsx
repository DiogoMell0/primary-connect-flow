import logo from "@/assets/logo-primary-solutions.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Primary Solutions" className="h-10 w-auto" />
            <p className="text-foreground-muted text-sm max-w-xs leading-relaxed">
              Consultoria e desenvolvimento em Power Platform, automações,
              integrações, agentes de IA e documentação técnica para empresas.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-2 text-foreground-muted text-sm">
              <p>contato@primarysolutions.com.br</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Termos
              </a>
              <a
                href="#contato"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Primary Solutions. Todos os direitos
            reservados.
          </p>
          <a
            href="#contato"
            className="text-primary text-sm hover:underline font-medium"
          >
            Pronto para automatizar sua operação? Fale conosco →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
