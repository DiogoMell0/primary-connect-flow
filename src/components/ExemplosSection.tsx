import {
  ClipboardCheck,
  CheckSquare,
  UserPlus,
  Inbox,
  Bell,
  Brain,
} from "lucide-react";

const ExemplosSection = () => {
  const exemplos = [
    {
      icon: ClipboardCheck,
      title: "Solicitações e aprovações com SLA",
    },
    {
      icon: CheckSquare,
      title: "App de inspeção/qualidade (checklists e evidências)",
    },
    {
      icon: UserPlus,
      title: "Fluxo de onboarding/offboarding",
    },
    {
      icon: Inbox,
      title: "Central de demandas do time (triagem e roteamento)",
    },
    {
      icon: Bell,
      title: "Alertas automáticos e relatórios operacionais",
    },
    {
      icon: Brain,
      title: "Base de conhecimento + agente de IA interno",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Exemplos de <span className="text-gradient">Aplicação</span>
          </h2>
          <p className="text-foreground-muted text-base max-w-2xl mx-auto">
            Casos práticos que já implementamos para nossos clientes
          </p>
        </div>

        {/* Chips Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {exemplos.map((exemplo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-background-elevated/50 hover:border-accent/50 transition-colors"
            >
              <exemplo.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">
                {exemplo.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExemplosSection;
