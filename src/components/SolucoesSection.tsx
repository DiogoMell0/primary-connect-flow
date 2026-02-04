import { Cog, Headphones, AppWindow, Workflow, GitBranch, FileText, Bot, Globe, LayoutDashboard, MessageSquare } from "lucide-react";

const SolucoesSection = () => {
  const solucoes = [
    {
      icon: Cog,
      title: "Operações e Processos",
      description:
        "Automatizamos rotinas e fluxos internos com Power Platform, integrações e documentação para reduzir retrabalho e padronizar a operação.",
      items: [
        { icon: AppWindow, text: "Apps internos (cadastros, solicitações, checklists, auditorias)" },
        { icon: Workflow, text: "Aprovações, alertas, SLAs e rotinas automatizadas" },
        { icon: GitBranch, text: "Integração com sistemas (ERP/CRM/legados) e APIs" },
        { icon: FileText, text: "Documentação técnica e handover para continuidade" },
      ],
    },
    {
      icon: Headphones,
      title: "Atendimento e Experiência Digital",
      description:
        "Estruture atendimento com automações e IA, e fortaleça presença digital com sites e páginas web sob medida para captação e relacionamento.",
      items: [
        { icon: MessageSquare, text: "Triagem e roteamento automatizados de demandas" },
        { icon: Bot, text: "Agentes de IA para atendimento e suporte interno" },
        { icon: Globe, text: "Sites e landing pages para captação e presença digital" },
        { icon: LayoutDashboard, text: "Portais e experiências web quando necessário (Power Pages/Web)" },
      ],
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
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Entregas sob medida para reduzir atrito operacional, integrar sistemas e escalar com governança.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solucoes.map((solucao, index) => (
            <div key={index} className="card-glow p-8 lg:p-10 group flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="icon-glow w-14 h-14 flex-shrink-0">
                  <solucao.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground pt-2">
                  {solucao.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-8 text-base lg:text-lg">
                {solucao.description}
              </p>

              {/* Items List */}
              <ul className="space-y-4 flex-grow">
                {solucao.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm lg:text-base leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;
