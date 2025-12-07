import json
import os

# --- Configuration ---
SERVICES = [
    "Vidéosurveillance", "Systèmes d'alarme", "Contrôle d'accès",
    "Réseau & Connectivité", "Solutions Domotique", "Maintenance"
]

ZONES = {
    "Paris": {"dept": "75", "prio": 1},
    "Créteil": {"dept": "94", "prio": 1},
    "Saint-Maur-des-Fossés": {"dept": "94", "prio": 1},
    "Vitry-sur-Seine": {"dept": "94", "prio": 1},
    "Lyon": {"dept": "69", "prio": 2},
    "Marseille": {"dept": "13", "prio": 2},
    "Bordeaux": {"dept": "33", "prio": 2},
    "Toulouse": {"dept": "31", "prio": 2},
    "Lille": {"dept": "59", "prio": 2},
    "Strasbourg": {"dept": "67", "prio": 2},
    "Nantes": {"dept": "44", "prio": 2},
    "Nice": {"dept": "06", "prio": 2},
}

PAGES_DIR = "src/pages/zones"
# --- Fin Configuration ---

def slugify(text):
    return text.lower().replace(' ', '-').replace("'", "").replace("é", "e").replace("è", "e").replace("à", "a")

def generate_local_page_content(city, dept, service):
    city_slug = slugify(city)
    service_slug = slugify(service)
    
    # Contenu de la page locale (300-600 mots)
    content = f"""
## {service} à {city} ({dept}) : Votre Expert Local en Sécurité

### Pourquoi choisir HD Connect pour votre {service_slug} à {city} ?

HD Connect est votre partenaire de proximité pour l'installation, la maintenance et le dépannage de systèmes de sécurité à {city} et dans tout le département du {dept}. Notre expertise locale nous permet de répondre rapidement et efficacement à vos besoins spécifiques, que vous soyez un particulier ou un professionnel.

Nous comprenons les enjeux de sécurité propres à la région de {city}. C'est pourquoi nous proposons des solutions de {service} sur mesure, garantissant une protection optimale de vos biens et de vos proches.

### Nos Services de {service} à {city}

Nous couvrons l'ensemble des besoins en {service} :
- **Installation** : Mise en place de systèmes de {service} de dernière génération.
- **Maintenance Préventive** : Assurer la longévité et la performance de votre équipement.
- **Dépannage Urgent** : Intervention rapide 24/7 en cas de problème.

### ❓ Mini-FAQ Locale {city}

#### Q: Quel est le délai d'intervention pour un dépannage à {city} ?
R: Grâce à notre présence locale, nous garantissons une intervention en moins de 24 heures pour les urgences à {city} et ses environs.

#### Q: Proposez-vous des devis gratuits pour l'installation de {service} ?
R: Oui, contactez-nous pour obtenir un devis gratuit et sans engagement, adapté à votre situation à {city}.

#### Q: Vos systèmes de {service} sont-ils conformes aux normes françaises ?
R: Absolument. Tous nos équipements et installations respectent les normes de sécurité françaises et européennes en vigueur.

---
*Ceci est un contenu généré. Le contenu réel de la page sera plus riche et optimisé par un rédacteur.*
"""

    # Template React pour la page locale
    template = f"""
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import {{ useSEO }} from '@/hooks/useSEO';

const {city_slug.replace('-', '_').capitalize()}{service_slug.replace('-', '_').capitalize()}Page = () => {{
  useSEO({{
    title: "{service} à {city} ({dept}) - Installation & Dépannage | HD Connect",
    description: "Expert en {service} à {city} ({dept}). Installation, maintenance et dépannage rapide. Demandez votre devis gratuit en ligne.",
    keywords: "{service}, {city}, {dept}, sécurité, installation, dépannage",
  }});

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          {service} à {city} ({dept})
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          {{`{content}`}}
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}};

export default {city_slug.replace('-', '_').capitalize()}{service_slug.replace('-', '_').capitalize()}Page;
"""
    return template

def generate_all_pages():
    if not os.path.exists(PAGES_DIR):
        os.makedirs(PAGES_DIR)

    for city, data in ZONES.items():
        if data['prio'] in [1, 2]: # Générer uniquement pour Prio 1 et 2
            for service in SERVICES:
                # Créer un fichier par ville et par service
                filename = f"{slugify(city)}-{data['dept']}-{slugify(service)}.tsx"
                filepath = os.path.join(PAGES_DIR, filename)
                
                content = generate_local_page_content(city, data['dept'], service)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Généré : {filepath}")

def generate_local_section_data():
    local_data = []
    for city, data in ZONES.items():
        local_data.append({
            "city": city,
            "dept": data['dept'],
            "prio": data['prio'],
            "slug": slugify(city),
            "alt_text": f"Installation de systèmes de sécurité par HD Connect à {city} ({data['dept']})",
            "image_url": f"/assets/local/{slugify(city)}.jpg" # Placeholder
        })
    
    # Créer le dossier data s'il n'existe pas
    data_dir = 'src/data'
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
        
    with open('src/data/local_section_data.json', 'w', encoding='utf-8') as f:
        json.dump(local_data, f, indent=2)
    
    print("Généré : src/data/local_section_data.json")

if __name__ == "__main__":
    # Nettoyer les anciennes pages
    if os.path.exists(PAGES_DIR):
        for f in os.listdir(PAGES_DIR):
            if f.endswith('.tsx'):
                os.remove(os.path.join(PAGES_DIR, f))
            
    # Générer les données de la section "Près de chez vous"
    generate_local_section_data()
    
    # Générer toutes les pages locales (Ville x Service)
    generate_all_pages()
    
    print("Génération des pages locales terminée.")
