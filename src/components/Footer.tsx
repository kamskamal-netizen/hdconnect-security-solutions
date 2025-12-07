import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { content } from "@/data/content";

const iconMap = { Facebook, Instagram, Linkedin };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = content.company.contact;
  const socialLinks = content.company.social;
  const navLinks = content.nav;
  const servicesLinks = content.services.items.map(item => ({ title: item.title, href: item.link }));
  const quickLinks = [
    { title: "Mentions Légales", href: "/mentions-legales" },
    { title: "Politique de Confidentialité", href: "/politique-confidentialite" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">HD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HD Connect</h3>
                <p className="text-sm text-background/70">Sécurité & Technologie</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Votre partenaire de confiance pour tous vos besoins en systèmes de sécurité.
            </p>
            <div className="flex gap-3">
              {Object.entries(socialLinks).map(([key, href]) => {
                const Icon = iconMap[key.charAt(0).toUpperCase() + key.slice(1)] || Linkedin;
                return (
                  <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {servicesLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-background transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-background transition-colors">{link.title}</a>
                </li>
              ))}
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${contactInfo.phoneMobile}`} className="hover:text-background transition-colors block">{contactInfo.phoneMobile} (Mobile)</a>
                  <a href={`tel:${contactInfo.phoneFixe}`} className="hover:text-background transition-colors block">{contactInfo.phoneFixe} (Fixe)</a>
                  <p className="text-xs mt-1">Intervention 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-background transition-colors break-all block">{contactInfo.email}</a>
                  <p className="text-xs mt-1">Réponse sous 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p className="text-xs">Île-de-France et Grandes Villes</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} HD Connect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
