import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Monitor, Zap, Smartphone, Home, Sun, Thermometer, CheckCircle, HardHat, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import domotiqueImage from "@/assets/service-domotique.jpg";

const Domotique = () => {
  const { domotique } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: Smartphone, title: "Contrôle Centralisé", description: "Pilotez tous vos équipements (sécurité, éclairage, chauffage) depuis une interface unique." },
    { icon: Zap, title: "Scénarios Intelligents", description: "Créez des automatisations pour simuler une présence ou optimiser votre consommation d'énergie." },
    { icon: Home, title: "Sécurité Intégrée", description: "Synchronisation totale avec vos systèmes d'alarme et de vidéosurveillance pour une protection complète." },
    { icon: Monitor, title: "Multi-Protocoles", description: "Intégration de tous les standards (KNX, Z-Wave, Zigbee) pour une évolutivité garantie." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit des Besoins", description: "Analyse de vos habitudes et de votre infrastructure pour définir le système domotique idéal." },
    { icon: HardHat, title: "2. Installation et Câblage", description: "Installation des modules, des capteurs et du câblage nécessaire (filaire ou sans fil)." },
    { icon: Settings, title: "3. Programmation des Scénarios", description: "Configuration des automatisations, des interfaces utilisateur et des accès à distance." },
    { icon: CheckCircle, title: "4. Formation et Support", description: "Formation complète à l'utilisation de votre nouveau système et support technique continu." },
  ];

  const faqItems = [
    { question: "Puis-je installer la domotique dans une maison existante ?", answer: "Oui, avec des solutions sans fil (Z-Wave, Zigbee) l'installation se fait sans travaux majeurs. Pour du neuf, nous recommandons du KNX filaire plus robuste." },
    { question: "Mes données sont-elles sécurisées ?", answer: "Oui, nous privilégions les solutions avec contrôle local (pas de cloud obligatoire) et chiffrement bout-en-bout. Vos données restent chez vous." },
    { question: "Que se passe-t-il en cas de panne internet ou électrique ?", answer: "Les automatisations locales continuent de fonctionner. Seul l'accès à distance est temporairement indisponible. Possibilité d'onduleur pour maintien total." },
    { question: "Combien de temps faut-il pour l'installation ?", answer: "Pour une maison de 100m², comptez 2-3 jours pour une installation complète avec formation incluse. Mise en service progressive possible." },
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
                  <Home className="w-4 h-4" />
                  <span>Domotique Intelligente</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {domotique.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {domotique.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#quote">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Demander un devis
                    </Button>
                  </Link>
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                      Intervention Urgente
                    </Button>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={domotiqueImage} 
                  alt="Installation de systèmes domotiques et maison intelligente HD Connect" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Arguments Clés (Features) */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Les Avantages de la Domotique HD Connect
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

        {/* Section 3: Solutions Spécifiques (Particuliers vs Professionnels) */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Domotique : Maison Intelligente et Bâtiment Connecté
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Maison connectée pour plus de confort, de sécurité et des économies d'énergie (chauffage, éclairage, volets).</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Gestion du chauffage par zone</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Scénarios de vie quotidiens</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Simulation de présence en cas d'absence</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Building Management System (BMS) pour l'optimisation énergétique, la gestion des accès et la supervision technique des locaux.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Optimisation énergétique (CVC)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Supervision et reporting centralisés</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Intégration avec les systèmes de sécurité incendie</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Installation, Dépannage, Location */}
        <ServicePrestations serviceName="Domotique" />

        {/* Section 4: Processus d'Installation */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Notre Processus d'Installation Domotique
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
                Demandez Votre Devis Domotique Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Remplissez notre formulaire rapide sur la page d'accueil ou contactez-nous directement pour une étude personnalisée.
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
              Questions Fréquentes sur la Domotique
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
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

export default Domotique;
