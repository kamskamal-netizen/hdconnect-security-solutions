import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { ShieldAlert, Bell, Smartphone, Radio, Home, Building2, CheckCircle, Zap, HardHat, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Alarme = () => {
  const { alarme } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: ShieldAlert, title: "Détection Multi-Zones", description: "Capteurs de mouvement PIR et d'ouverture magnétiques avec détection avancée pour éviter les fausses alarmes." },
    { icon: Bell, title: "Sirènes Puissantes", description: "Alarmes sonores 110dB certifiées pour dissuader les intrus avec protection anti-sabotage." },
    { icon: Smartphone, title: "Contrôle à Distance", description: "Armez, désarmez et recevez des notifications instantanées sur votre smartphone, où que vous soyez." },
    { icon: Radio, title: "Télésurveillance 24/7", description: "Connexion directe avec un centre de télésurveillance agréé APSAD pour une intervention rapide (optionnel)." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit de Sécurité", description: "Évaluation gratuite de votre site pour déterminer le niveau de risque et les zones à protéger." },
    { icon: HardHat, title: "2. Installation Certifiée", description: "Installation rapide et conforme aux normes NF&A2P par nos techniciens qualifiés." },
    { icon: Settings, title: "3. Configuration et Test", description: "Configuration complète du système, des codes d'accès et tests de déclenchement pour une fiabilité totale." },
    { icon: CheckCircle, title: "4. Formation et Support", description: "Formation à l'utilisation et support technique continu pour toutes vos questions." },
  ];

  const faqItems = [
    { question: "Mon alarme peut-elle être reliée à mon assurance ?", answer: "Oui, nos systèmes certifiés NF&A2P sont reconnus par les assureurs et peuvent vous faire bénéficier d'une réduction de prime allant jusqu'à 10%." },
    { question: "Comment éviter les fausses alarmes ?", answer: "Nos détecteurs de nouvelle génération analysent le type de mouvement et éliminent 99% des fausses alarmes (animaux domestiques, courants d'air, etc.)." },
    { question: "L'alarme fonctionne-t-elle en cas de coupure de courant ?", answer: "Oui, toutes nos centrales intègrent une batterie de secours permettant un fonctionnement de 12 à 48h en autonomie complète." },
    { question: "Puis-je armer/désarmer à distance ?", answer: "Absolument, via l'application mobile vous contrôlez votre alarme de n'importe où et recevez l'historique de tous les événements." },
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
                  {alarme.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-center md:text-left">
                  {alarme.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#quote">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Demander un devis
                    </Button>
                  </Link>
                  <a href={`tel:${contactInfo.phoneMobile}`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                      Intervention Urgente
                    </Button>
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={alarme.heroImage} alt={alarme.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Arguments Clés (Features) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Les Avantages de nos Systèmes d'Alarme
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
              Alarme : Solutions Particuliers et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Systèmes d'alarme sans fil, faciles à installer et à gérer via une application mobile, pour une protection optimale de votre foyer.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Alarme sans fil certifiée NF&A2P</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Détecteurs compatibles animaux domestiques</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Batterie de secours intégrée</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Option de télésurveillance</li>
                </ul>
              </Card>
              <Card className="p-8">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Protection Grade 2 ou 3, adaptée aux exigences des assurances, avec gestion multi-sites et télésurveillance 24/7.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Systèmes filaires ou hybrides robustes</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Télésurveillance avec levée de doute vidéo</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Intégration avec contrôle d'accès et vidéosurveillance</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Contrat de maintenance préventive</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Processus d'Installation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Notre Processus d'Installation d'Alarme
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
              Demandez Votre Devis Alarme Gratuit
            </h2>
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-8">
                Remplissez notre formulaire rapide sur la page d'accueil ou contactez-nous directement pour une étude personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#quote">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Accéder au Formulaire de Devis
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneMobile}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    Appeler un Expert
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes sur les Systèmes d'Alarme
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

export default Alarme;
