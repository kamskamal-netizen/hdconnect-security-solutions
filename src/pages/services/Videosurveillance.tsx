import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import cameraImage from "@/assets/service-camera.jpg";

const Videosurveillance = () => {
  const features = [
    {
      icon: Camera,
      title: "Caméras HD et 4K",
      description: "Installation de caméras haute définition pour une surveillance optimale de vos locaux"
    },
    {
      icon: Eye,
      title: "Vision nocturne",
      description: "Surveillance 24h/24 grâce à la vision infrarouge avancée"
    },
    {
      icon: Smartphone,
      title: "Accès mobile",
      description: "Visualisez vos caméras en temps réel depuis votre smartphone ou tablette"
    },
    {
      icon: Cloud,
      title: "Stockage sécurisé",
      description: "Enregistrement continu avec stockage local et cloud sécurisé"
    },
    {
      icon: Shield,
      title: "Détection intelligente",
      description: "Analyse vidéo avec détection de mouvement et alertes instantanées"
    },
    {
      icon: Clock,
      title: "Enregistrement continu",
      description: "Archivage automatique avec historique consultable à tout moment"
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
                  Vidéosurveillance IP Professionnelle
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Installation de caméras HD et 4K avec enregistrement continu et accès à distance pour une sécurité optimale de vos locaux
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
                <img src={cameraImage} alt="Vidéosurveillance IP" className="w-full h-full object-cover" />
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
              Nos Solutions Vidéosurveillance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Caméras intérieures et extérieures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Application mobile intuitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Installation rapide et discrète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance et support inclus</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4 text-center">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Systèmes multi-sites centralisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Analyse vidéo intelligente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration avec systèmes existants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support technique 24/7</span>
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
              Prêt à sécuriser vos locaux ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une étude personnalisée et un devis gratuit
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

export default Videosurveillance;
