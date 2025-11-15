import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground">
            Une question ? Un projet ? N'hésitez pas à nous contacter pour un devis gratuit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Téléphone</CardTitle>
              <CardDescription>Appelez-nous du lundi au vendredi</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+33123456789" className="text-primary font-semibold text-lg hover:underline">
                01 23 45 67 89
              </a>
              <p className="text-sm text-muted-foreground mt-2">9h - 18h</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Écrivez-nous à tout moment</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:contact@hdconnect.fr" className="text-primary font-semibold text-lg hover:underline break-all">
                contact@hdconnect.fr
              </a>
              <p className="text-sm text-muted-foreground mt-2">Réponse sous 24h</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Adresse</CardTitle>
              <CardDescription>Nos bureaux</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-semibold">Paris, France</p>
              <p className="text-sm text-muted-foreground mt-2">Intervention sur toute l'Île-de-France</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Demander un Devis Gratuit</CardTitle>
            <CardDescription>Remplissez ce formulaire et nous vous recontacterons rapidement</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12">
                Envoyer ma demande
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
