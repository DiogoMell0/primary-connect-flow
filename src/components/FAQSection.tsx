import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como garantem segurança e conformidade (LGPD)?",
      answer:
        "Seguimos boas práticas de segurança desde o início: permissões granulares, auditoria de logs, criptografia de dados e controle de acesso. Apoiamos adequação à LGPD com mapeamento de dados e políticas de retenção.",
    },
    {
      question: "Qual o modelo de precificação?",
      answer:
        "Trabalhamos com escopo fechado por fase ou modelo de alocação contínua, dependendo da complexidade do projeto. O diagnóstico inicial já inclui estimativa de investimento e cronograma.",
    },
    {
      question:
        "Integra com sistemas legados (ERP, planilhas, ferramentas internas)?",
      answer:
        "Sim. Conectamos Power Platform com ERPs (SAP, TOTVS, Sankhya), CRMs, planilhas, bancos de dados e APIs de terceiros. Priorizamos integrações sustentáveis e bem documentadas.",
    },
    {
      question: "Qual prazo médio para ver valor?",
      answer:
        "Projetos pontuais de automação podem gerar resultados em 4 a 8 semanas. Plataformas mais robustas levam de 3 a 6 meses. O diagnóstico inicial entrega estimativa realista baseada no escopo.",
    },
    {
      question: "Vocês fazem sustentação e evolução contínua?",
      answer:
        "Sim. Oferecemos planos de suporte com SLAs definidos, monitoramento proativo, correções e novas funcionalidades. O objetivo é garantir que a solução continue evoluindo com o negócio.",
    },
    {
      question: "Como funciona o diagnóstico inicial?",
      answer:
        "É uma sessão consultiva onde entendemos seu contexto, mapeamos processos-chave e identificamos oportunidades. Ao final, você recebe um mapa de processos, recomendações prioritárias e um direcionamento claro.",
    },
    {
      question: "A documentação faz parte da entrega?",
      answer:
        "Sempre. Toda entrega inclui documentação técnica (arquitetura, fluxos, APIs) e operacional (manuais, runbooks). Isso garante autonomia para sua equipe e facilita handover.",
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
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-base font-medium">
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
