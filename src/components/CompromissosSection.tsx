import { Shield, FileText, Link2, Eye } from "lucide-react";

const CompromissosSection = () => {
  const compromissos = [
    {
      icon: Shield,
      title: "Governança desde o início",
      description:
        "Permissões, rastreabilidade e padrões incorporados desde o primeiro dia.",
    },
    {
      icon: FileText,
      title: "Documentação entregável",
      description:
        "Arquitetura, fluxos, regras de negócio e runbooks em cada entrega.",
    },
    {
      icon: Link2,
      title: "Integrações limpas e sustentáveis",
      description:
        "Monitoramento, modularidade e código preparado para evoluções.",
    },
    {
      icon: Eye,
      title: "Transparência de escopo e evolução",
      description:
        "Priorização por impacto, comunicação clara e roadmap compartilhado.",
    },
  ];

  return (
    <section id="compromissos" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Compromissos</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Princípios que guiam cada projeto que entregamos
          </p>
        </div>

        {/* Compromissos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {compromissos.map((compromisso, index) => (
            <div key={index} className="card-glow p-6 text-center">
              <div className="icon-glow w-14 h-14 mx-auto mb-5">
                <compromisso.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">
                {compromisso.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {compromisso.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompromissosSection;
