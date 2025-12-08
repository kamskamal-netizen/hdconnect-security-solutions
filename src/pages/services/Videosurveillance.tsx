import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock, CheckCircle, Zap, HardHat, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center md:text-left">
                  {videosurveillance.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-center md:text-left">
                  {videosurveillance.description}
                </p>
                <Link to="/#quote">
                  <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
                    Demander un devis
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneMobile}`}>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Intervention Urgente
                  </Button>
                </a>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={videosurveillance.heroImage} alt={videosurveillance.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Arguments Clés (Features) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pourquoi Choisir HD Connect pour votre Vidéosurveillance ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Solutions Sur Mesure : Particuliers et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Protégez votre foyer avec des systèmes discrets et faciles à utiliser, axés sur la dissuasion et la surveillance à distance.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Caméras Wi-Fi et autonomes</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Intégration domotique simple</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Stockage local sécurisé</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Installation en moins d'une journée</li>
                </ul>
              </Card>
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Des systèmes robustes et évolutifs, conformes aux réglementations, pour la surveillance de sites complexes et multi-sites.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Systèmes NVR/DVR haute capacité</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Analyse vidéo pour la gestion des flux</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Conformité RGPD et CNIL</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Contrats de maintenance 24/7</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Processus d'Installation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Notre Processus d'Installation en 4 Étapes
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center p-6 border rounded-lg bg-card shadow-sm">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Formulaire de Contact (Quote) */}
        <section id="quote" className="py-20 bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Demandez Votre Devis Vidéosurveillance Gratuit
            </h2>
            {/* Note: Le formulaire complet est sur la page d'accueil, ici on met un CTA simple */}
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-8">
                Remplissez notre formulaire rapide sur la page d'accueil ou contactez-nous directement pour une étude personnalisée.
              </p>
              <Link to="/#quote">
                <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
                  Accéder au Formulaire de Devis
                </Button>
              </Link>
              <a href={`tel:${contactInfo.phoneMobile}`}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Appeler un Expert
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ (Déjà présente, réutilisée) */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes sur la Vidéosurveillance
            </h2>
            <div className="space-y-6">
              {videosurveillance.faq.map((item, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border">
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
