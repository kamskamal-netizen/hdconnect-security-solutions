import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Radio, Tv, Satellite, Signal, Antenna, MapPin, HardHat, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import antenneImage from "@/assets/service-antenne.jpg";

const AntenneSatellite = () => {
  const { antenneSatellite } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: Antenna, title: "Antennes TNT HD", description: "Installation d'antennes râteaux pour une réception optimale de toutes les chaînes gratuites de la TNT en haute définition." },
    { icon: Satellite, title: "Paraboles Satellite", description: "Pose et orientation précise de paraboles pour Astra, Hotbird et autres satellites, avec accès à des centaines de chaînes." },
    { icon: Tv, title: "Antennes Collectives", description: "Solutions complètes pour immeubles et copropriétés avec amplification et distribution vers tous les logements." },
    { icon: Signal, title: "Dépannage & Réglage", description: "Intervention rapide pour résoudre les problèmes de réception : pixelisation, perte de signal, chaînes manquantes." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Diagnostic Gratuit", description: "Nous évaluons la qualité de réception à votre adresse et identifions la meilleure solution technique." },
    { icon: HardHat, title: "2. Installation Sécurisée", description: "Pose professionnelle de l'antenne ou parabole, fixation sécurisée et passage de câbles discret." },
    { icon: Settings, title: "3. Réglage & Optimisation", description: "Orientation précise, mesure du signal et configuration de votre téléviseur pour une réception parfaite." },
    { icon: CheckCircle, title: "4. Garantie & Support", description: "Garantie sur l'installation et intervention rapide en cas de dérèglement ou de problème de réception." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Section 1: Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="badge-primary mb-6">
                  <Radio className="w-4 h-4" />
                  <span>Antenne & Satellite</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {antenneSatellite.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {antenneSatellite.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#quote">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Demander un devis
                    </Button>
                  </Link>
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                      Dépannage Urgence
                    </Button>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={antenneImage} 
                  alt="Installation d'antenne satellite et TNT par HD Connect" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Arguments Clés */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Pourquoi Choisir HD Connect pour vos Antennes ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover-lift">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="icon-container-sm flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Solutions Particuliers vs Copropriétés */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Solutions Sur Mesure : Particuliers et Copropriétés
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Maisons individuelles et appartements : profitez d'une réception TV optimale avec nos solutions sur mesure.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Antenne TNT intérieure ou extérieure</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Parabole satellite individuelle</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Amplificateur de signal si nécessaire</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Intervention rapide en cas de panne</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Copropriétés</CardTitle>
                <p className="text-muted-foreground mb-6">Immeubles et résidences : systèmes collectifs performants pour tous les résidents.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Antenne collective TNT et satellite</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Tête d'amplification et répartiteurs</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Câblage vers tous les appartements</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Contrat de maintenance annuel</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Installation, Dépannage, Location */}
        <ServicePrestations serviceName="Antennes & Satellite" />

        {/* Section 4: Processus d'Installation */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Notre Processus d'Installation en 4 Étapes
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center p-6 border rounded-2xl bg-card shadow-sm hover-lift">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: CTA Devis */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis Antenne Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Installation, dépannage ou mise à niveau de votre système TV : contactez-nous pour un devis personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#quote">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Accéder au Formulaire de Devis
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    Appeler un Expert
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-title text-center mb-12">
              Questions Fréquentes sur les Antennes
            </h2>
            <div className="space-y-6">
              {antenneSatellite.faq?.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border hover-lift">
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AntenneSatellite;
