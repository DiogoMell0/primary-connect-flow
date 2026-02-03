import { Factory, Building2 } from "lucide-react";

const SolucoesSection = () => {
  const solucoes = [
    {
      icon: Factory,
      title: "Setor Industrial",
      description:
        "Automação de chão de fábrica, integrações ERP/MES, rastreabilidade de ponta a ponta, indicadores de performance em tempo real e redução de retrabalho através de sistemas inteligentes.",
    },
    {
      icon: Building2,
      title: "Empresas de Serviços",
      description:
        "Plataformas internas personalizadas, automação de fluxos operacionais, integrações via API com sistemas existentes, dashboards analíticos e governança de dados com segurança.",
    },
  ];

  return (
    <section id="solucoes" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Especializadas para{" "}
            <span className="text-gradient">Setores Exigentes</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solucoes.map((solucao, index) => (
            <div
              key={index}
              className="card-glow p-8 lg:p-10 group"
            >
              <div className="icon-glow w-16 h-16 mb-6">
                <solucao.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {solucao.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {solucao.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;
