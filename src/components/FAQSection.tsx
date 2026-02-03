import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como garantem segurança e conformidade dos dados?",
      answer:
        "Seguimos práticas de desenvolvimento seguro (OWASP), criptografia de dados em trânsito e em repouso, controle de acesso granular e auditoria de logs. Também apoiamos adequação à LGPD e outras regulamentações específicas do setor.",
    },
    {
      question: "Qual o modelo de precificação e como estimam ROI?",
      answer:
        "Trabalhamos com escopo fechado por fase ou modelo de alocação contínua, dependendo da natureza do projeto. Durante o diagnóstico inicial, mapeamos potenciais ganhos operacionais e construímos uma estimativa de retorno baseada em métricas reais do seu negócio.",
    },
    {
      question:
        "Integra com sistemas legados (ERP, planilhas, ferramentas internas)?",
      answer:
        "Sim. Nossa plataforma de integração é desenhada para conectar sistemas heterogêneos — ERPs como SAP, TOTVS, Sankhya, além de planilhas, bancos de dados legados e APIs de terceiros. Priorizamos integrações limpas e documentadas.",
    },
    {
      question: "Qual o prazo médio de um projeto?",
      answer:
        "Depende da complexidade. Projetos de automação pontual podem levar de 4 a 8 semanas. Plataformas mais robustas, de 3 a 6 meses. O diagnóstico inicial já entrega uma estimativa realista baseada no escopo mapeado.",
    },
    {
      question: "Vocês oferecem suporte e manutenção pós-implantação?",
      answer:
        "Sim. Oferecemos planos de suporte contínuo com SLAs definidos, monitoramento proativo, correções evolutivas e apoio para novas funcionalidades. O objetivo é garantir que a solução continue performando e evoluindo.",
    },
    {
      question: "Como funciona o diagnóstico inicial?",
      answer:
        "É uma sessão consultiva onde entendemos seu contexto operacional, mapeamos processos-chave, identificamos gargalos e oportunidades. Ao final, entregamos um relatório de viabilidade técnica com recomendações de arquitetura e roadmap sugerido.",
    },
    {
      question: "A documentação faz parte da entrega?",
      answer:
        "Sempre. Toda entrega inclui documentação técnica (arquitetura, fluxos, APIs) e documentação operacional (manuais de uso, runbooks). Isso garante autonomia para sua equipe e facilita futuras evoluções.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-glow border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
