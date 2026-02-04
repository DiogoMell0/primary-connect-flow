import { Bot, Zap, Sparkles, Brain, ShieldCheck, FileText, AppWindow, Workflow, LayoutDashboard, BarChart3, GitBranch } from "lucide-react";

const ServicosSection = () => {
  const servicos = [
    {
      icon: Bot,
      title: "Agentes de IA e Copilot",
      description:
        "Automatize atendimento e processos internos com agentes de IA sob medida, respostas assistidas, triagem inteligente e base de conhecimento com governança.",
      items: [
        { icon: Brain, text: "Agentes de IA para atendimento e suporte interno" },
        { icon: Sparkles, text: "Copilot aplicado a rotinas e produtividade" },
        { icon: FileText, text: "Base de conhecimento e respostas padronizadas" },
        { icon: ShieldCheck, text: "Regras, limites e rastreabilidade por padrão" },
      ],
    },
    {
      icon: Zap,
      title: "Power Platform e Automação",
      description:
        "Digitalize processos com aplicativos, portais e automações, integrando sistemas e gerando indicadores para decisões rápidas e confiáveis.",
      items: [
        { icon: AppWindow, text: "Power Apps para apps internos sob medida" },
        { icon: Workflow, text: "Power Automate para fluxos e aprovações com SLA" },
        { icon: LayoutDashboard, text: "Power Pages para portais e experiências externas" },
        { icon: BarChart3, text: "Power BI para dashboards e performance operacional" },
        { icon: GitBranch, text: "n8n para integrações e orquestração entre sistemas" },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Serviços</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicos.map((servico, index) => (
            <div key={index} className="card-glow p-8 lg:p-10 group flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="icon-glow w-14 h-14 flex-shrink-0">
                  <servico.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground pt-2">
                  {servico.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-8 text-base lg:text-lg">
                {servico.description}
              </p>

              {/* Items List */}
              <ul className="space-y-4 flex-grow">
                {servico.items.map((item, itemIndex) => (
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

export default ServicosSection;
