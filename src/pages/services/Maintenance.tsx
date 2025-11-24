import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  const features = [
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique disponible à tout moment pour vos urgences"
    },
    {
      icon: PhoneCall,
      title: "Interventions rapides",
      description: "Délai d'intervention garanti pour maintenir votre sécurité"
    },
    {
      icon: CheckCircle,
      title: "Maintenance préventive",
      description: "Contrôles réguliers pour prévenir les pannes et dysfonctionnements"
    },
    {
      icon: TrendingUp,
      title: "Mises à jour systèmes",
      description: "Installation des dernières mises à jour logicielles et firmware"
    },
    {
      icon: Shield,
      title: "Contrats personnalisés",
      description: "Formules adaptées à vos besoins et à votre budget"
    },
    {
      icon: Wrench,
      title: "Réparations garanties",
      description: "Pièces détachées d'origine et travaux garantis"
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
                Maintenance & Support Technique
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Service de maintenance préventive et support technique réactif pour tous vos équipements de sécurité
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
              Nos Services de Maintenance
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

        {/* Contracts Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Contrats de Maintenance
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Essentiel</h3>
                <p className="text-muted-foreground mb-6">Pour les particuliers</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support téléphonique 9h-18h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>1 visite annuelle préventive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Mise à jour logicielles incluses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Tarif préférentiel dépannage</span>
                  </li>
                </ul>
                <Link to="/#quote">
                  <Button variant="outline" className="w-full">Choisir</Button>
                </Link>
              </div>

              <div className="p-8 rounded-lg bg-card border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Premium</h3>
                <p className="text-muted-foreground mb-6">Pour les professionnels</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>2 visites annuelles préventives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Dépannages illimités inclus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Pièces de rechange prioritaires</span>
                  </li>
                </ul>
                <Link to="/#quote">
                  <Button className="w-full">Choisir</Button>
                </Link>
              </div>

              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
                <p className="text-muted-foreground mb-6">Sur mesure</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support dédié 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance préventive mensuelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>SLA garanti avec pénalités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Reporting et audits réguliers</span>
                  </li>
                </ul>
                <Link to="/#quote">
                  <Button variant="outline" className="w-full">Nous contacter</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Assurez la pérennité de vos installations
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Souscrivez à un contrat de maintenance adapté à vos besoins
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

export default Maintenance;
