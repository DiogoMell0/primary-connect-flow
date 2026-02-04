import { Cog, Headphones } from "lucide-react";

const SolucoesSection = () => {
  const solucoes = [
    {
      icon: Cog,
      title: "Operações & Processos",
      description:
        "Automatização de rotinas, aprovações e fluxos internos com Power Apps + Power Automate. Menos retrabalho, mais rastreabilidade e padronização.",
    },
    {
      icon: Headphones,
      title: "Atendimento & Suporte",
      description:
        "Triagem, roteamento e respostas assistidas com automações e agentes de IA quando fizer sentido. Reduza tempo de atendimento e aumente consistência.",
    },
  ];

  return (
    <section id="solucoes" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Especializadas para{" "}
            <span className="text-gradient">Seu Negócio</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solucoes.map((solucao, index) => (
            <div key={index} className="card-glow p-8 lg:p-10 group">
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
