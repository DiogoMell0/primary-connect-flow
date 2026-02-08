import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511976091472";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre as soluções da Primary Solutions."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const CTASection = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para automatizar processos e{" "}
              <span className="text-gradient">ganhar escala com governança?</span>
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Fale diretamente com nossa equipe pelo WhatsApp. Receba um
              direcionamento inicial com oportunidades, riscos e próximos passos
              — sem compromisso.
            </p>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="card-glow p-8 lg:p-12 inline-block">
            <div className="flex flex-col items-center gap-6">
              <div className="icon-glow w-20 h-20">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Fale Conosco pelo WhatsApp
                </h3>
                <p className="text-foreground-muted mb-6">
                  Resposta rápida em horário comercial.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient px-10 py-4 rounded-xl text-base font-semibold text-primary-foreground inline-flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={20} />
                Iniciar Conversa
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
