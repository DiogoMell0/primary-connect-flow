import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolucoesSection from "@/components/SolucoesSection";
import ModulosSection from "@/components/ModulosSection";
import ProcessoSection from "@/components/ProcessoSection";
import CompromissosSection from "@/components/CompromissosSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SolucoesSection />
        <ModulosSection />
        <ProcessoSection />
        <CompromissosSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
