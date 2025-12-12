import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight, Play } from "lucide-react";
import { content } from "@/data/content";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const heroContent = content.hero;
  
  const scrollToSection = (id: string, mode?: 'quote' | 'intervention') => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
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

  const trustBadges = [
    { label: "Installation sous 48h", icon: CheckCircle },
    { label: "Support 24h/24 7j/7", icon: CheckCircle },
    { label: "Garantie 5 ans", icon: CheckCircle },
  ];

  return (
    <section id="accueil" className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="HD Connect - Solutions de sécurité professionnelles" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="badge-primary mb-8 animate-fade-in">
            <Shield className="w-5 h-5" />
            <span>Expert en Sécurité depuis 10 ans en Île-de-France</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] text-center md:text-left">
            Protégez votre{" "}
            <span className="text-gradient">entreprise</span>
            <br />
            et votre{" "}
            <span className="text-gradient">domicile</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-center md:text-left max-w-2xl">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button 
              onClick={() => scrollToSection("quote", "quote")} 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all group"
            >
              {heroContent.ctaQuote}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection("quote", "intervention")} 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group"
            >
              <Play className="mr-2 w-5 h-5 text-accent" />
              Intervention Urgente
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={badge.label} 
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;