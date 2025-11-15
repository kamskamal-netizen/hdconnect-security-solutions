import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">HD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HD Connect</h1>
              <p className="text-xs text-muted-foreground">Sécurité & Technologie</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("apropos")} className="text-foreground hover:text-primary transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">01 23 45 67 89</span>
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Devis Gratuit
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("accueil")} className="text-left text-foreground hover:text-primary transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("apropos")} className="text-left text-foreground hover:text-primary transition-colors">
                À Propos
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <a href="tel:+33123456789" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">01 23 45 67 89</span>
              </a>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Devis Gratuit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
