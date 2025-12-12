import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock, CheckCircle, Zap, HardHat, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import cameraImage from "@/assets/service-camera.jpg";

const Videosurveillance = () => {
  const { videosurveillance } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: Camera, title: "Caméras IP et 4K", description: "Qualité d'image supérieure pour une identification précise, même dans des conditions de faible luminosité." },
    { icon: Eye, title: "Analyse Vidéo Intelligente", description: "Détection de mouvement, franchissement de ligne, et reconnaissance pour des alertes proactives." },
    { icon: Smartphone, title: "Accès à Distance Sécurisé", description: "Consultez vos flux en direct et vos enregistrements depuis votre mobile ou PC, où que vous soyez." },
    { icon: Cloud, title: "Stockage Hybride", description: "Enregistrement local NVR/DVR sécurisé avec option de sauvegarde cloud pour une redondance maximale." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Étude de Site Gratuite", description: "Nos experts se déplacent pour évaluer vos besoins et les spécificités de votre environnement." },
    { icon: HardHat, title: "2. Installation Professionnelle", description: "Installation rapide et discrète par nos techniciens certifiés, sans perturber votre activité." },
    { icon: Settings, title: "3. Configuration et Formation", description: "Configuration complète du système et formation de vos équipes à l'utilisation de l'interface." },
    { icon: CheckCircle, title: "4. Maintenance et Support", description: "Contrat de maintenance préventive et support technique 24/7 pour une tranquillité d'esprit durable." },
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
                  <Camera className="w-4 h-4" />
                  <span>Vidéosurveillance HD</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {videosurveillance.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {videosurveillance.description}
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
                  src={cameraImage} 
                  alt="Installation de caméras de vidéosurveillance professionnelles HD Connect" 
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
              Pourquoi Choisir HD Connect pour votre Vidéosurveillance ?
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
              Solutions Sur Mesure : Particuliers et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Protégez votre foyer avec des systèmes discrets et faciles à utiliser, axés sur la dissuasion et la surveillance à distance.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Caméras Wi-Fi et autonomes</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Intégration domotique simple</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Stockage local sécurisé</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Installation en moins d'une journée</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Des systèmes robustes et évolutifs, conformes aux réglementations, pour la surveillance de sites complexes et multi-sites.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Systèmes NVR/DVR haute capacité</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Analyse vidéo pour la gestion des flux</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Conformité RGPD et CNIL</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Contrats de maintenance 24/7</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Installation, Dépannage, Location */}
        <ServicePrestations serviceName="Vidéosurveillance" />

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
                Demandez Votre Devis Vidéosurveillance Gratuit
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
              Questions Fréquentes sur la Vidéosurveillance
            </h2>
            <div className="space-y-6">
              {videosurveillance.faq.map((item, index) => (
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

export default Videosurveillance;
