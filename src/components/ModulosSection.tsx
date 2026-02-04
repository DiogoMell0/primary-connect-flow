import { LayoutGrid, Network, Bot } from "lucide-react";

const ModulosSection = () => {
  const modulos = [
    {
      icon: LayoutGrid,
      title: "Power Apps & Fluxos Operacionais",
      description:
        "Apps internos + automações de aprovação, cadastros, OS, auditorias e solicitações.",
    },
    {
      icon: Network,
      title: "Integrações & Orquestração",
      description:
        "Conectamos Power Platform com ERP/CRM/legados via conectores/APIs com monitoramento e manutenção sustentável.",
    },
    {
      icon: Bot,
      title: "Agentes de IA com Governança",
      description:
        "Agentes para atendimento e processos internos com limites, base de conhecimento e rastreabilidade.",
    },
  ];

  return (
    <section id="modulos" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Aceleradores para{" "}
            <span className="text-gradient">Implantação Rápida</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modulos.map((modulo, index) => (
            <div key={index} className="card-glow p-8 text-center">
              <div className="icon-glow w-16 h-16 mx-auto mb-6">
                <modulo.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {modulo.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed text-sm">
                {modulo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulosSection;
