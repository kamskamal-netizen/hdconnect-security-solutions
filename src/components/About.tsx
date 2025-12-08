import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/data/content";
import { Award, Users, Clock, CheckCircle, Shield, Zap, ThumbsUp } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const iconMap: Record<number, React.ComponentType<{ className?: string }>> = {
  0: Award,
  1: Users,
  2: Clock,
};

const values = [
  {
    icon: Shield,
    title: "Expertise",
    description: "10 ans d'expérience dans le domaine de la sécurité électronique."
  },
  {
    icon: Zap,
    title: "Réactivité",
    description: "Intervention rapide en Île-de-France sous 24 à 48 heures."
  },
  {
    icon: ThumbsUp,
    title: "Qualité",
    description: "Utilisation exclusive de matériel certifié et de marques premium."
  }
];

const About = () => {
  const aboutContent = content.about;

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="badge-primary mb-6">
              <Award className="w-4 h-4" />
              <span>À Propos de HD Connect</span>
            </div>
            
            <h2 className="section-title text-center md:text-left mb-6">
              {aboutContent.title}
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg text-center md:text-left mb-8">
              {aboutContent.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-8">
            {/* Team Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutTeamImage} 
                alt="Équipe HD Connect - Experts en sécurité"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Notre équipe d'experts</p>
                <p className="text-white/80 text-sm">Professionnels certifiés à votre service</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {aboutContent.stats.map((stat, index) => {
                const Icon = iconMap[index] || Award;
                return (
                  <Card key={index} className="stats-card border-border/50">
                    <CardContent className="p-4 md:p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;