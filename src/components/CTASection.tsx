import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    segmento: "",
    desafio: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para reduzir atrito operacional e{" "}
              <span className="text-gradient">ganhar escala com segurança?</span>
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Agende um diagnóstico consultivo gratuito e receba um mapeamento
              inicial do seu cenário com recomendações personalizadas.
            </p>
          </div>

          {/* Form Card */}
          <div className="card-glow p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="icon-glow w-20 h-20 mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-foreground-muted">
                  Nossa equipe entrará em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="input-dark"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-dark"
                      placeholder="seu@empresa.com.br"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      className="input-dark"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="segmento"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Segmento
                    </label>
                    <select
                      id="segmento"
                      name="segmento"
                      required
                      value={formData.segmento}
                      onChange={handleChange}
                      className="input-dark cursor-pointer"
                    >
                      <option value="">Selecione o segmento</option>
                      <option value="industria">Indústria</option>
                      <option value="servicos">Serviços</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="desafio"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Descreva seu principal desafio
                  </label>
                  <textarea
                    id="desafio"
                    name="desafio"
                    rows={4}
                    required
                    value={formData.desafio}
                    onChange={handleChange}
                    className="input-dark resize-none"
                    placeholder="Conte-nos sobre o processo ou sistema que gostaria de otimizar..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary-gradient w-full px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 group"
                  >
                    Agendar Diagnóstico
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                <p className="text-center text-foreground-muted text-sm">
                  Sem compromisso. Resposta em até 24h úteis.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
