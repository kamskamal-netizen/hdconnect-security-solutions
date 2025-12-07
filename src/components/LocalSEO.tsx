import { MapPin, Search, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Données pour la grille de cartes SEO (désormais générées par script)
const seoLocations = [  { city: "Paris", dept: "75", priority: 1, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Créteil", dept: "94", priority: 1, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Vincennes", dept: "94", priority: 1, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Lyon", dept: "69", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Bordeaux", dept: "33", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Marseille", dept: "13", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Lille", dept: "59", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Nantes", dept: "44", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Toulouse", dept: "31", priority: 2, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Nice", dept: "06", priority: 3, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Strasbourg", dept: "67", priority: 3, icon: <MapPin className="w-6 h-6 text-primary" /> },
  { city: "Montpellier", dept: "34", priority: 3, icon: <MapPin className="w-6 h-6 text-primary" /> },
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
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Mo",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tu",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "We",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Th",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Fr",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "serviceType": [
      "Installation de caméras de surveillance",
      "Installation de systèmes d'alarme",
      "Contrôle d'accès",
      "Dépannage et maintenance d'équipements de sécurité"
    ],
    "areaServed": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75001"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75002"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75003"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75004"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75005"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75006"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75007"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75008"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75009"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75010"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75011"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75012"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75013"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75014"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75015"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75016"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75017"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75018"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75019"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "75020"
        }
      }
    ]
  };
  return (
    <section id="local-seo" className="py-20 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            <MapPin className="w-8 h-8 inline-block mr-2 text-primary" />
            Nous sommes présents près de chez vous
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            HD Connect intervient rapidement pour le dépannage, l'installation et la location d'équipements de sécurité dans les zones clés de France.
          </p>
        </div>

        {/* Grille de villes générée par script Python */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Bordeaux">Bordeaux</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Créteil">Créteil</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Ivry-sur-Seine">Ivry-sur-Seine</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Lille">Lille</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Lyon">Lyon</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Marseille">Marseille</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Nantes">Nantes</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Paris">Paris</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Saint-Maur-des-Fossés">Saint-Maur-des-Fossés</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Toulouse">Toulouse</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Val-de-Marne">Val-de-Marne</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Vincennes">Vincennes</a>
          </div>
          <div className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <a href="/services?zone=Vitry-sur-Seine">Vitry-sur-Seine</a>
          </div>
        </div>
       {/* Texte contextuel pour le SEO */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-inner border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Notre Couverture Nationale</h3>
          <p className="text-gray-700 leading-relaxed">
            Nous intervenons principalement dans la région de **Paris (75) et la petite couronne (94)**, incluant des villes comme Créteil et Vincennes, pour garantir une réactivité maximale. Notre expertise s'étend également aux grandes métropoles françaises telles que **Lyon, Bordeaux, Marseille, Lille, Nantes et Toulouse**. Que vous soyez un particulier ou un professionnel, HD Connect est votre partenaire sécurité, assurant le dépannage, l'installation et la location de vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Contactez-nous pour vérifier notre disponibilité dans votre quartier.
          </p>
          <Button asChild className="mt-6">
            <Link to="#quote">
              <Search className="w-4 h-4 mr-2" /> Vérifier mon éligibilité
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;
