import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Bell, Smartphone, Radio, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import alarmImage from "@/assets/service-alarm.jpg";

const Alarme = () => {
  const features = [
    {
      icon: ShieldAlert,
      title: "Détection intelligente",
      description: "Capteurs de mouvement et d'ouverture avec détection avancée pour éviter les fausses alarmes"
    },
    {
      icon: Bell,
      title: "Sirènes intégrées",
      description: "Alarmes sonores puissantes pour dissuader les intrus"
    },
    {
      icon: Smartphone,
      title: "Notifications instantanées",
      description: "Alertes en temps réel sur votre smartphone en cas d'intrusion"
    },
    {
      icon: Radio,
      title: "Télésurveillance",
      description: "Connexion directe avec un centre de télésurveillance 24/7"
    },
    {
      icon: Home,
      title: "Protection périmétrique",
      description: "Sécurisation complète de votre propriété intérieur et extérieur"
    },
    {
      icon: Building2,
      title: "Contrôle centralisé",
      description: "Gestion simple via clavier, badge ou application mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Systèmes d'Alarme Anti-Intrusion
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Alarmes connectées avec détection intelligente pour protéger vos locaux contre les intrusions
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
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={alarmImage} alt="Systèmes d'Alarme" className="w-full h-full object-cover" />
              </div>
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
              Nos Solutions d'Alarme
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Alarme sans fil facile à installer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Application mobile gratuite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Détecteurs de mouvement intelligents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Option télésurveillance disponible</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Systèmes multi-zones personnalisables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Télésurveillance professionnelle 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration avec contrôle d'accès</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance préventive incluse</span>
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
              Protégez votre propriété dès maintenant
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Demandez une évaluation gratuite de vos besoins en sécurité
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

export default Alarme;
