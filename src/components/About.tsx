import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { content } from "@/data/content";
import { Award, Users, Clock, ThumbsUp, CheckCircle } from "lucide-react";

const iconMap = { Award, Users, Clock, ThumbsUp };

const About = () => {
  const aboutContent = content.about;return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center md:text-left">
              {aboutContent.title}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg text-center md:text-left">
              {aboutContent.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">Nos valeurs</h3>
              <ul className="space-y-2 text-foreground">
                {/* Les valeurs ne sont pas dans le content.ts actuel, je les laisse en dur pour l'instant */}
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span><span className="font-semibold">Expertise:</span> 10 ans d'expérience dans le domaine.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span><span className="font-semibold">Réactivité:</span> Intervention rapide en Île-de-France.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span><span className="font-semibold">Qualité:</span> Utilisation de matériel certifié et premium.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutContent.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Award; // Fallback
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
