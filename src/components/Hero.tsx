import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  const bullets = [
    "Apps internos sob medida (fluxos, aprovações, cadastros, checklists)",
    "Automação de atendimento e operações (SLA, triagem, alertas, relatórios)",
    "Integrações + documentação técnica para continuidade (handover)",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Power Platform, Automação e IA para{" "}
              <span className="text-gradient">reduzir atrito operacional</span>{" "}
              e escalar com governança.
            </h1>

            <p className="text-lg md:text-xl text-foreground-muted max-w-xl leading-relaxed">
              Implementamos Power Apps, Power Automate e Power BI, criamos
              integrações e agentes de IA para atendimento e processos internos
              — com documentação completa e entregas previsíveis.
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground-muted"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="btn-primary-gradient px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 group"
              >
                Agendar Diagnóstico
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#solucoes"
                className="btn-secondary-outline px-8 py-4 rounded-xl text-base font-semibold text-foreground inline-flex items-center justify-center"
              >
                Explorar Soluções
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform scale-75" />
              <img
                src={heroImage}
                alt="Power Platform, automação e integração de sistemas"
                className="relative z-10 w-full max-w-lg mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
