import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Lock, Fingerprint, CreditCard, History, Users, Key, CheckCircle, Zap, HardHat, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import accessImage from "@/assets/service-access.jpg";

const ControleAcces = () => {
  const { controleacces } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: CreditCard, title: "Badges RFID/NFC", description: "Solutions de badges sécurisés et personnalisés pour une gestion simple des accès." },
    { icon: Fingerprint, title: "Biométrie Avancée", description: "Reconnaissance d'empreinte digitale ou faciale pour une sécurité maximale et sans contact." },
    { icon: Key, title: "Gestion Centralisée", description: "Administration facile des droits d'accès, des horaires et des zones depuis une interface web unique." },
    { icon: History, title: "Traçabilité Complète", description: "Historique certifié de tous les accès avec horodatage précis pour le reporting et l'audit." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit des Flux", description: "Analyse de vos besoins en sécurité et des flux de personnes pour définir la solution la plus adaptée." },
    { icon: HardHat, title: "2. Installation Matérielle", description: "Installation des lecteurs, serrures électriques et contrôleurs par nos techniciens certifiés." },
    { icon: Settings, title: "3. Configuration Logicielle", description: "Mise en place des droits d'accès, des horaires et intégration avec vos systèmes existants (RH, pointeuse)." },
    { icon: CheckCircle, title: "4. Formation et Support", description: "Formation complète de vos équipes à l'utilisation du logiciel de gestion et support technique continu." },
  ];

  const faqItems = [
    { question: "Puis-je gérer les accès temporaires (visiteurs, prestataires) ?", answer: "Oui, vous pouvez créer des badges temporaires avec date de validité limitée ou des codes PIN à usage unique via l'interface web ou mobile." },
    { question: "Le système peut-il gérer plusieurs bâtiments ?", answer: "Absolument, notre solution centralise la gestion de tous vos sites avec droits d'accès différenciés par bâtiment, étage ou zone." },
    { question: "Que se passe-t-il en cas de coupure internet ?", answer: "Le système fonctionne en mode autonome. Les contrôleurs stockent les droits localement et synchronisent automatiquement au retour de la connexion." },
    { question: "Puis-je intégrer la pointeuse horaire ?", answer: "Oui, nos systèmes incluent la gestion du temps de travail avec exports Excel/PDF pour la paie et conformité légale." },
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
                  <Lock className="w-4 h-4" />
                  <span>Contrôle d'Accès</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {controleacces.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {controleacces.description}
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
                  src={accessImage} 
                  alt="Installation de systèmes de contrôle d'accès biométriques HD Connect" 
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
              Les Avantages de nos Solutions de Contrôle d'Accès
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
              Contrôle d'Accès : Particuliers et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Interphones vidéo connectés, digicodes et serrures intelligentes pour sécuriser l'entrée de votre domicile.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Interphonie vidéo IP</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Gestion des accès à distance</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Claviers à code et lecteurs de badges discrets</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Installation sur porte existante</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Systèmes centralisés pour la gestion des accès de zones sensibles, avec traçabilité et intégration RH.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Lecteurs biométriques et badges haute sécurité</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Gestion des droits par zone et horaire</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Intégration avec la vidéosurveillance</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Conformité RGPD</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Processus d'Installation */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Notre Processus d'Installation de Contrôle d'Accès
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
                Demandez Votre Devis Contrôle d'Accès Gratuit
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
              Questions Fréquentes sur le Contrôle d'Accès
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

export default ControleAcces;
