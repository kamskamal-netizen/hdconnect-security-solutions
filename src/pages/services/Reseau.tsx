import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wifi, Cable, Shield, Server, Network, Settings, CheckCircle, Zap, HardHat, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import reseauImage from "@/assets/service-reseau.jpg";

const Reseau = () => {
  const { reseau } = content.pageServices;
  const contactInfo = content.company.contact;

  const features = [
    { icon: Wifi, title: "WiFi Professionnel", description: "Installation de bornes WiFi 6E/7 pour une couverture optimale et des débits ultra-rapides." },
    { icon: Cable, title: "Câblage Certifié", description: "Infrastructure réseau Cat 6A/7 certifiée pour une fiabilité maximale et une garantie 25 ans." },
    { icon: Shield, title: "Sécurité Avancée", description: "Mise en place de pare-feu (Firewall) et de VPN pour protéger votre réseau contre les cyberattaques." },
    { icon: Server, title: "Architecture Évolutive", description: "Conception de réseaux VLAN segmentés pour une performance et une sécurité accrues." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit et Conception", description: "Analyse de vos besoins, étude de site et conception de l'architecture réseau la plus performante." },
    { icon: HardHat, title: "2. Installation Physique", description: "Déploiement du câblage, des baies de brassage et des équipements actifs (switchs, routeurs)." },
    { icon: Settings, title: "3. Configuration et Sécurité", description: "Configuration des VLAN, du WiFi, du Firewall et des VPN pour une sécurité maximale." },
    { icon: CheckCircle, title: "4. Certification et Support", description: "Tests de performance, certification du câblage et support technique continu." },
  ];

  const faqItems = [
    { question: "Combien de bornes WiFi faut-il pour mon local ?", answer: "1 borne couvre environ 100-150m² selon les obstacles. Pour un bureau de 300m², comptez 2-3 bornes avec système mesh pour un roaming transparent." },
    { question: "Puis-je avoir plusieurs réseaux WiFi séparés ?", answer: "Oui, nous configurons des SSID multiples (visiteurs, employés, IoT) avec isolation et niveaux de sécurité différents sur la même infrastructure." },
    { question: "Le câblage est-il vraiment nécessaire avec le WiFi ?", answer: "Pour les postes fixes, serveurs et caméras IP, le câblage offre plus de stabilité, sécurité et débit. Nous recommandons une solution hybride." },
    { question: "Comment protéger mon réseau des cyberattaques ?", answer: "Firewall nouvelle génération, segmentation VLAN, VPN chiffré, filtrage web et mises à jour automatiques. Nous incluons une formation sécurité." },
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
                  <Wifi className="w-4 h-4" />
                  <span>Réseau & Connectivité</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {reseau.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {reseau.description}
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
                  src={reseauImage} 
                  alt="Installation d'infrastructure réseau et câblage informatique HD Connect" 
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
              Les Avantages d'une Infrastructure Réseau HD Connect
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
              Réseau : Solutions Particuliers et Professionnels
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Particuliers</CardTitle>
                <p className="text-muted-foreground mb-6">Installation de WiFi mesh pour une couverture totale de votre domicile et sécurisation de votre réseau domestique.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> WiFi mesh sans zone morte</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Sécurisation des équipements IoT</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Installation de la fibre optique</li>
                </ul>
              </Card>
              <Card className="p-8 hover-lift">
                <CardTitle className="text-2xl mb-4 text-primary">Pour Professionnels</CardTitle>
                <p className="text-muted-foreground mb-6">Infrastructure réseau complète pour PME et grands comptes, incluant câblage, Firewall et VPN sécurisé.</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Câblage Cat 6A/7 certifié</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Firewall et VPN d'entreprise</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Maintenance et monitoring 24/7</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Processus d'Installation */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
              Notre Processus d'Installation Réseau
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
                Demandez Votre Audit Réseau Gratuit
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
              Questions Fréquentes sur l'Infrastructure Réseau
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

export default Reseau;
