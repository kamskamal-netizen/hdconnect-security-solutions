import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mainLocations = [
  { city: "Paris", dept: "75", highlight: true },
  { city: "Créteil", dept: "94", highlight: true },
  { city: "Vincennes", dept: "94", highlight: true },
  { city: "Lyon", dept: "69", highlight: false },
  { city: "Bordeaux", dept: "33", highlight: false },
  { city: "Marseille", dept: "13", highlight: false },
  { city: "Lille", dept: "59", highlight: false },
  { city: "Nantes", dept: "44", highlight: false },
  { city: "Toulouse", dept: "31", highlight: false },
  { city: "Nice", dept: "06", highlight: false },
  { city: "Strasbourg", dept: "67", highlight: false },
  { city: "Montpellier", dept: "34", highlight: false },
];

const idfCities = [
  "Ivry-sur-Seine", "Saint-Maur-des-Fossés", "Vitry-sur-Seine", 
  "Champigny-sur-Marne", "Maisons-Alfort", "Fontenay-sous-Bois"
];

const LocalSEO = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Sécurité et Vidéosurveillance",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr",
    "telephone": "+33 6 27 13 53 04",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=HD+Connect+Paris",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Mo", "Tu", "We", "Th", "Fr"], "opens": "09:00", "closes": "18:00" }
    ],
    "serviceType": [
      "Installation de caméras de surveillance",
      "Installation de systèmes d'alarme",
      "Contrôle d'accès",
      "Dépannage et maintenance d'équipements de sécurité"
    ]
  };

  return (
    <section id="local-seo" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="badge-primary mb-3">
            <MapPin className="w-4 h-4" />
            <span>Zones d'Intervention</span>
          </div>
          <h2 className="section-title text-center">
            Nous intervenons près de chez vous
          </h2>
          <p className="section-subtitle text-center">
            HD Connect assure des interventions rapides pour le dépannage, l'installation et la location d'équipements de sécurité dans toute la France.
          </p>
        </div>

        {/* Main Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
          {mainLocations.map((location) => (
            <div 
              key={location.city}
              className={`p-3 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 ${
                location.highlight 
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg' 
                  : 'bg-card border border-border hover:border-primary/30 hover:shadow-md'
              }`}
            >
              <MapPin className={`w-4 h-4 mx-auto mb-1 ${location.highlight ? 'text-white' : 'text-primary'}`} />
              <p className="font-semibold text-sm">{location.city}</p>
              <p className={`text-xs ${location.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                ({location.dept})
              </p>
            </div>
          ))}
        </div>

        {/* IDF Cities */}
        <div className="bg-card rounded-2xl border border-border p-5 md:p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            Également en Île-de-France
          </h3>
          <div className="flex flex-wrap gap-2">
            {idfCities.map((city) => (
              <span 
                key={city}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              + toute l'Île-de-France
            </span>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-foreground to-foreground/90 rounded-2xl p-6 md:p-8 text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Notre Couverture Nationale</h3>
            <p className="text-background/80 leading-relaxed mb-4 text-sm md:text-base">
              Nous intervenons principalement dans la région de <strong className="text-background">Paris (75) et la petite couronne (94)</strong>, incluant des villes comme Créteil et Vincennes, pour garantir une réactivité maximale. Notre expertise s'étend également aux grandes métropoles françaises.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Vérifier mon éligibilité
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;