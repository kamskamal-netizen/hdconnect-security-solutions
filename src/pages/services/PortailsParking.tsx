import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { DoorOpen, Car, Phone, Key, Smartphone, MapPin, HardHat, Settings, CheckCircle, Building2, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import portailImage from "@/assets/service-portail.jpg";

const PortailsParking = () => {
  const { portailsParking } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: DoorOpen, title: "Portails Automatiques", description: "Motorisation de portails coulissants et battants, avec télécommandes, digicodes et interphones intégrés." },
    { icon: Car, title: "Portes de Garage", description: "Installation et motorisation de portes sectionnelles, basculantes et enroulables pour un accès facile et sécurisé." },
    { icon: Key, title: "Contrôle d'Accès", description: "Systèmes de badges, télécommandes et contrôle à distance via smartphone pour gérer vos accès." },
    { icon: Phone, title: "Interphones & Vidéophones", description: "Solutions audio et vidéo pour immeubles et résidences, avec ouverture à distance sécurisée." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Visite Technique", description: "Évaluation sur site de vos besoins, mesures et choix de la solution adaptée à votre configuration." },
    { icon: HardHat, title: "2. Installation Pro", description: "Pose du système de motorisation, interphone ou barrière par nos techniciens qualifiés." },
    { icon: Settings, title: "3. Programmation", description: "Configuration des télécommandes, badges et applications mobiles pour tous les utilisateurs." },
    { icon: CheckCircle, title: "4. SAV & Maintenance", description: "Garantie, dépannage rapide et contrats de maintenance pour une tranquillité d'esprit durable." },
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
                  <DoorOpen className="w-4 h-4" />
                  <span>Portails & Parking</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {portailsParking.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {portailsParking.description}
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
                  src={portailImage} 
                  alt="Portail automatique et porte de garage motorisée par HD Connect" 
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
              Pourquoi Choisir HD Connect pour vos Automatismes ?
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

        {/* Section 3: Solutions Résidences vs Professionnels */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Solutions Sur Mesure : Résidences et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl text-primary">Résidences & Copropriétés</CardTitle>
                </div>
                <p className="text-muted-foreground mb-6">Portails, interphones et accès parking pour maisons individuelles et immeubles collectifs.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Portails coulissants et battants motorisés</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Interphones et vidéophones multi-logements</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Portes de garage automatisées</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Gestion des accès par badges</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl text-primary">Entreprises & Parkings</CardTitle>
                </div>
                <p className="text-muted-foreground mb-6">Barrières, contrôle d'accès et systèmes de gestion pour sites professionnels et parkings.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Barrières levantes automatiques</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Bornes escamotables</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Gestion centralisée des accès</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Intégration avec vidéosurveillance</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Installation, Dépannage, Location */}
        <ServicePrestations serviceName="Portails & Automatismes" />

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
                Demandez Votre Devis Automatismes Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Portail, porte de garage, interphone ou barrière de parking : contactez-nous pour une étude personnalisée.
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
              Questions Fréquentes sur les Automatismes
            </h2>
            <div className="space-y-6">
              {portailsParking.faq?.map((item, index) => (
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

export default PortailsParking;
