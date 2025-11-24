import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lock, Fingerprint, CreditCard, History, Users, Key } from "lucide-react";
import { Link } from "react-router-dom";
import accessImage from "@/assets/service-access.jpg";

const ControleAcces = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Badge RFID",
      description: "Badges personnalisés pour un accès simple et sécurisé"
    },
    {
      icon: Fingerprint,
      title: "Biométrie avancée",
      description: "Reconnaissance d'empreinte digitale pour une sécurité maximale"
    },
    {
      icon: Key,
      title: "Code PIN",
      description: "Contrôle d'accès par code personnalisé"
    },
    {
      icon: Users,
      title: "Gestion centralisée",
      description: "Administration facile des droits d'accès depuis une interface unique"
    },
    {
      icon: History,
      title: "Historique complet",
      description: "Traçabilité de tous les accès avec horodatage précis"
    },
    {
      icon: Lock,
      title: "Sécurité multicouche",
      description: "Combinaison de plusieurs méthodes d'authentification"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 md:text-left">
                  Contrôle d'Accès Intelligent
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Systèmes de contrôle d'accès par badge, code ou biométrie pour sécuriser vos locaux
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
                <img src={accessImage} alt="Contrôle d'Accès" className="w-full h-full object-cover" />
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
              Nos Solutions de Contrôle d'Accès
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Serrures connectées intelligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Contrôle via smartphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion des accès temporaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Historique des entrées/sorties</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion multi-sites centralisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration pointeuse horaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Droits d'accès personnalisés par zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Reporting et audit de sécurité</span>
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
              Sécurisez vos accès intelligemment
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez nos solutions de contrôle d'accès adaptées à vos besoins
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

export default ControleAcces;
