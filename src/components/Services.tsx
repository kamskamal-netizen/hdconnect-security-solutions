import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Lock, Wifi, Home, Wrench, ArrowRight, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import cameraImage from "@/assets/service-camera.jpg";
import alarmImage from "@/assets/service-alarm.jpg";
import accessImage from "@/assets/service-access.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";
import reseauImage from "@/assets/service-reseau.jpg";
import domotiqueImage from "@/assets/service-domotique.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Shield,
  Lock,
  Wifi,
  Home,
  Wrench,
};

const imageMap: Record<string, string> = {
  "Vidéosurveillance": cameraImage,
  "Systèmes d'Alarme": alarmImage,
  "Contrôle d'Accès": accessImage,
  "Maintenance & Dépannage": maintenanceImage,
  "Réseau & Câblage": reseauImage,
  "Domotique Sécurité": domotiqueImage,
};

const colorMap: Record<string, string> = {
  "Vidéosurveillance": "from-blue-500 to-cyan-500",
  "Systèmes d'Alarme": "from-red-500 to-orange-500",
  "Contrôle d'Accès": "from-green-500 to-emerald-500",
  "Maintenance & Dépannage": "from-purple-500 to-pink-500",
  "Réseau & Câblage": "from-indigo-500 to-blue-500",
  "Domotique Sécurité": "from-amber-500 to-yellow-500",
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-accent mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Solutions Complètes</span>
          </div>
          <h2 className="section-title text-center">
            {content.services.title}
          </h2>
          <p className="section-subtitle text-center">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            const image = imageMap[service.title];
            const colorClass = colorMap[service.title] || "from-primary to-accent";
            
            return (
              <Card 
                key={index} 
                className="group hover-lift overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pt-4">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Link to={service.link}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            Contactez-nous pour un projet sur mesure
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;