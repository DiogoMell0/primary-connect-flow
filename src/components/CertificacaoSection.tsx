import { CheckCircle2 } from "lucide-react";
import badgePL900 from "@/assets/badge-pl900.png";

const CertificacaoSection = () => {
  const destaques = [
    "Conhecimento certificado em Power Apps, Power Automate e Power BI",
    "Domínio das capacidades de governança e segurança da plataforma",
    "Aplicação de boas práticas Microsoft em cada projeto entregue",
  ];

  return (
    <section id="certificacao" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="card-glow p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Badge */}
              <div className="flex justify-center order-1 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img
                    src={badgePL900}
                    alt="Certificação Microsoft Power Platform Fundamentals PL-900"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="relative w-full max-w-[320px] md:max-w-[380px] h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="order-2 md:order-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
                  Time Certificado Microsoft
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                  <span className="text-gradient">Certificação PL-900</span>
                </h2>
                <p className="text-foreground-muted text-base md:text-lg leading-relaxed mb-8">
                  Nossos desenvolvedores possuem a certificação{" "}
                  <strong className="text-foreground">
                    Microsoft Power Platform Fundamentals (PL-900)
                  </strong>
                  , garantindo conhecimento oficial sobre todas as capacidades
                  da Power Platform aplicadas aos seus projetos.
                </p>

                <ul className="space-y-3">
                  {destaques.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificacaoSection;
