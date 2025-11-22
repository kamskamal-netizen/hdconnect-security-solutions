import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, Zap, Smartphone, Home, Sun, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const Domotique = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Contrôle centralisé",
      description: "Pilotez tous vos équipements depuis une interface unique"
    },
    {
      icon: Zap,
      title: "Automatisation intelligente",
      description: "Scénarios personnalisés pour automatiser votre quotidien"
    },
    {
      icon: Sun,
      title: "Gestion éclairage",
      description: "Contrôle intelligent de l'éclairage intérieur et extérieur"
    },
    {
      icon: Thermometer,
      title: "Contrôle climatique",
      description: "Optimisation du chauffage et de la climatisation"
    },
    {
      icon: Home,
      title: "Sécurité intégrée",
      description: "Synchronisation avec alarme, caméras et accès"
    },
    {
      icon: Monitor,
      title: "Compatible tous systèmes",
      description: "Intégration avec les principales marques du marché"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Solutions Domotique Intelligentes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Intégration de systèmes domotiques pour une sécurité et un confort intelligents
              </p>
              <Link to="/#quote">
                <Button size="lg" className="mr-4">
                  Demander un devis
                </Button>
              </Link>
              <Link to="/#contact">
                <Button size="lg" variant="outline">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Caractéristiques et Avantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Solutions Domotique
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maison connectée complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Contrôle vocal (Alexa, Google Home)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Scénarios personnalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Économies d'énergie intelligentes</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Building Management System (BMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion énergétique optimisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration sécurité complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Supervision et reporting centralisés</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformez votre habitat en maison intelligente
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez le confort et la sécurité d'une installation domotique professionnelle
            </p>
            <Link to="/#quote">
              <Button size="lg">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Domotique;
