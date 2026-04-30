import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicosSection from "@/components/ServicosSection";
import CertificacaoSection from "@/components/CertificacaoSection";
import SolucoesSection from "@/components/SolucoesSection";
import ModulosSection from "@/components/ModulosSection";
import ProcessoSection from "@/components/ProcessoSection";
import CompromissosSection from "@/components/CompromissosSection";
import ExemplosSection from "@/components/ExemplosSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicosSection />
        <CertificacaoSection />
        <SolucoesSection />
        <ModulosSection />
        <ProcessoSection />
        <CompromissosSection />
        <ExemplosSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
