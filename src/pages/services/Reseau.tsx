import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Cable, Shield, Server, Network, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Reseau = () => {
  const features = [
    {
      icon: Wifi,
      title: "Réseau WiFi professionnel",
      description: "Installation de bornes WiFi haute performance pour une couverture optimale"
    },
    {
      icon: Cable,
      title: "Câblage structuré",
      description: "Infrastructure réseau filaire certifiée pour une fiabilité maximale"
    },
    {
      icon: Shield,
      title: "VPN sécurisé",
      description: "Configuration de réseaux privés virtuels pour vos connexions à distance"
    },
    {
      icon: Server,
      title: "Firewall avancé",
      description: "Protection réseau contre les intrusions et menaces externes"
    },
    {
      icon: Network,
      title: "Architecture réseau",
      description: "Conception et déploiement d'architectures réseau évolutives"
    },
    {
      icon: Settings,
      title: "Maintenance réseau",
      description: "Support technique et maintenance préventive de votre infrastructure"
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
                Réseau & Connectivité
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Installation de réseaux sécurisés pour vos équipements connectés professionnels et résidentiels
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
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
              Nos Solutions Réseau
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>WiFi mesh pour toute la maison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Sécurisation réseau domestique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Installation box et équipements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support et dépannage rapide</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Infrastructure réseau entreprise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Sécurité avancée et pare-feu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>VPN pour télétravail sécurisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance et monitoring 24/7</span>
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
              Optimisez votre infrastructure réseau
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bénéficiez d'un réseau performant et sécurisé adapté à vos besoins
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

export default Reseau;
