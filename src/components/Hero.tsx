import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import { content } from "@/data/content";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const heroContent = content.hero;
  const scrollToSection = (id: string, mode?: 'quote' | 'intervention') => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Activer le mode approprié après le scroll
      if (id === "quote" && mode) {
        setTimeout(() => {
          const targetBtn = document.querySelector(
            mode === 'intervention' ? '[data-intervention-btn]' : '[data-quote-btn]'
          ) as HTMLButtonElement;
          if (targetBtn) {
            targetBtn.click();
          }
        }, 500);
      }
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="HD Connect - Installation de sécurité" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">{heroContent.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-center md:text-left">
            {heroContent.title}
            <span className="block text-primary">{heroContent.titleHighlight}</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-center md:text-left">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection("quote", "quote")} 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8"
            >
              {heroContent.ctaPrimary.label}
            </Button>
            <Button 
              onClick={() => scrollToSection("quote", "intervention")} 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              {heroContent.ctaSecondary.label}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {heroContent.trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
