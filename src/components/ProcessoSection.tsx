import { Search, PenTool, Zap, Rocket, ArrowRight } from "lucide-react";

const ProcessoSection = () => {
  const passos = [
    {
      icon: Search,
      step: "01",
      title: "Diagnóstico e Estratégia",
      description:
        "Análise profunda do cenário atual, mapeamento de processos e definição de roadmap estratégico.",
      entregavel: "Relatório de Viabilidade Técnica",
    },
    {
      icon: PenTool,
      step: "02",
      title: "Design e Arquitetura",
      description:
        "Prototipagem e definição da infraestrutura, escolha de tecnologias e design de integrações.",
      entregavel: "Blueprint de Arquitetura de Software",
    },
    {
      icon: Zap,
      step: "03",
      title: "Desenvolvimento Ágil",
      description:
        "Sprints iterativos com feedback contínuo, entregas incrementais e validação constante.",
      entregavel: "Incrementos Funcionais Validados",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Implantação e Governança",
      description:
        "Go-live controlado, transferência de conhecimento, suporte contínuo e evolução planejada.",
      entregavel: "Plano de Suporte e Monitoramento",
    },
  ];

  return (
    <section id="processo" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nosso Processo Consultivo:{" "}
            <span className="text-gradient">De Visão a Realidade</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              <div className="card-glow p-6 h-full">
                {/* Step number */}
                <div className="icon-glow w-14 h-14 mb-5">
                  <passo.icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {passo.title}
                </h3>

                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {passo.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-accent font-medium">
                    Entregável:
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {passo.entregavel}
                  </p>
                </div>
              </div>

              {/* Connector Arrow (hidden on last item and mobile) */}
              {index < passos.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-accent/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
