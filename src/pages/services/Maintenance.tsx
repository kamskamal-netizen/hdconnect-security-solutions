import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp, MapPin, HardHat, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Maintenance = () => {
  const { maintenance } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: Clock, title: "Support 24/7 Prioritaire", description: "Assistance technique disponible à tout moment avec hotline dédiée et intervention rapide." },
    { icon: PhoneCall, title: "Intervention Garantie", description: "Délai d'intervention contractuel (4h, 8h ou 24h) pour maintenir votre sécurité opérationnelle." },
    { icon: CheckCircle, title: "Maintenance Préventive", description: "Contrôles réguliers pour prévenir les pannes, avec checklist exhaustive et rapport détaillé." },
    { icon: TrendingUp, title: "Mises à Jour Incluses", description: "Installation des dernières mises à jour firmware et patches de sécurité pour une performance optimale." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit Technique", description: "Évaluation de l'état de vos équipements et définition du contrat le plus adapté à vos besoins." },
    { icon: HardHat, title: "2. Visites Préventives", description: "Interventions planifiées (annuelles ou semestrielles) pour nettoyage, vérification et tests complets." },
    { icon: Settings, title: "3. Dépannage Express", description: "Intervention rapide et prioritaire en cas de panne, avec pièces de rechange d'origine." },
    { icon: CheckCircle, title: "4. Reporting et Suivi", description: "Rapports détaillés après chaque intervention et suivi de l'état de santé de votre parc." },
  ];

  const faqItems = [
    { question: "La maintenance est-elle obligatoire ?", answer: "Pour les ERP et certaines installations professionnelles, oui. Pour les particuliers, elle est fortement recommandée pour la garantie et la performance optimale de vos systèmes." },
    { question: "Que comprend une visite de maintenance préventive ?", answer: "Test complet de tous les équipements, nettoyage, vérification des connexions, mise à jour des logiciels, test de la batterie de secours et rapport détaillé." },
    { question: "Puis-je souscrire pour une installation existante ?", answer: "Oui, après un audit technique initial (gratuit) pour évaluer l'état et définir le contrat adapté. Nous sommes compatibles toutes marques." },
    { question: "Que se passe-t-il en cas de panne hors heures ouvrées ?", answer: "Les contrats Premium et Enterprise incluent astreinte 24/7 avec intervention sous 4h même les nuits et week-ends en Île-de-France." },
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
                  {maintenance.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-center md:text-left">
                  {maintenance.description}
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
                <img src={maintenance.heroImage} alt={maintenance.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Arguments Clés (Features) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Les Avantages de nos Contrats de Maintenance
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

        {/* Section 3: Contrats (Simulé) */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Formules de Contrat
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Essentiel</CardTitle>
                <p className="text-muted-foreground mb-6">Pour les particuliers et petites installations.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Support téléphonique 9h-18h</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> 1 visite annuelle préventive</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Tarif préférentiel dépannage</li>
                </ul>
              </Card>
              <Card className="p-8 border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Recommandé
                </div>
                <CardTitle className="text-2xl mb-4 text-primary">Premium</CardTitle>
                <p className="text-muted-foreground mb-6">Pour les PME et sites critiques.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Support 24/7</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> 2 visites annuelles préventives</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Dépannages illimités inclus</li>
                </ul>
              </Card>
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Enterprise</CardTitle>
                <p className="text-muted-foreground mb-6">Pour les grands comptes et multi-sites.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Support dédié 24/7</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Maintenance préventive mensuelle</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> SLA garanti avec pénalités</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Processus d'Installation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Notre Processus de Maintenance
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
              Demandez Votre Devis Maintenance Gratuit
            </h2>
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

        {/* Section 6: FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes sur la Maintenance
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
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

export default Maintenance;
