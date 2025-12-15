// Fichier de centralisation du contenu statique pour HD Connect

export const content = {
  // --- Informations Générales ---
  company: {
    name: "HD Connect",
    slogan: "Votre sécurité, notre expertise.",
    contact: {
      email: "kamal@hdconnect.fr",
      phoneMobile: "+33 6 27 13 53 04",
      phoneFixe: "+33 1 83 64 36 40",
      address: "Paris, France",
    },
    social: {
      linkedin: "#",
      facebook: "#",
    },
  },

  // --- Navigation ---
  nav: [
    { label: "Services", href: "/#services" },
    { label: "À Propos", href: "/#about" },
    { label: "Devis", href: "/#quote" },
    { label: "Contact", href: "/#contact" },
  ],

  // --- Section Hero ---
  hero: {
    title: "Sécurité Intelligente pour Particuliers et Professionnels",
    subtitle: "Vidéosurveillance, Alarmes et Contrôle d'Accès. Installation, Dépannage et Location en Île-de-France et Grandes Villes.",
    ctaQuote: "Demander un Devis Gratuit",
    ctaContact: "Contactez-nous",
  },

  // --- Section Services ---
  services: {
    title: "Nos Solutions de Sécurité Complètes",
    subtitle: "Protégez ce qui compte le plus avec des technologies de pointe et une expertise locale.",
    items: [
      {
        title: "Vidéosurveillance",
        description: "Dissuadez les intrus et surveillez vos biens à distance grâce à nos systèmes de vidéosurveillance haute définition. Nous installons des caméras IP discrètes et performantes, des enregistreurs NVR sécurisés et configurons l'accès à distance sur votre smartphone ou ordinateur.",
        icon: "Camera",
        link: "/services/videosurveillance",
      },
      {
        title: "Systèmes d'Alarme",
        description: "Protégez votre domicile ou votre entreprise contre les effractions avec nos systèmes d'alarme anti-intrusion. Nous proposons des solutions sans fil, connectées à votre smartphone, avec des détecteurs de mouvement, d'ouverture et des sirènes puissantes pour une protection optimale.",
        icon: "Shield",
        link: "/services/alarme",
      },
      {
        title: "Contrôle d'Accès",
        description: "Contrôlez qui entre et sort de vos locaux avec nos solutions de contrôle d'accès modernes. Nous installons des interphones vidéo, des digicodes, des lecteurs de badges et des systèmes biométriques pour une gestion simple et sécurisée des accès.",
        icon: "Lock",
        link: "/services/controle-acces",
      },
      {
        title: "Maintenance & Dépannage",
        description: "Un système de sécurité n'est efficace que s'il est parfaitement fonctionnel. Nous proposons des contrats de maintenance préventive et intervenons rapidement pour tout dépannage afin de garantir la fiabilité de vos installations.",
        icon: "Wrench",
        link: "/services/maintenance",
      },
      {
        title: "Réseau & Câblage",
        description: "Une infrastructure réseau fiable est la base de tout système de sécurité moderne. Nous réalisons l'installation et la certification de votre câblage informatique (RJ45) et fibre optique pour une connectivité sans faille.",
        icon: "Wifi",
        link: "/services/reseau",
      },
      {
        title: "Domotique Sécurité",
        description: "Simplifiez la gestion de votre sécurité en l'intégrant à votre système domotique. Contrôlez vos alarmes, caméras et accès depuis une seule application, et créez des scénarios automatisés pour une tranquillité d'esprit absolue.",
        icon: "Home",
        link: "/services/domotique",
      },
      {
        title: "Antennes & Satellite",
        description: "Installation et dépannage d'antennes hertziennes, paraboles et systèmes TNT. Nous assurons une réception optimale de vos chaînes TV, que ce soit pour des maisons individuelles, des copropriétés ou des locaux professionnels.",
        icon: "Radio",
        link: "/services/antenne-satellite",
      },
      {
        title: "Portails & Parking",
        description: "Automatisation et sécurisation de vos accès : portails coulissants et battants, portes de garage, barrières de parking, interphones et vidéophones d'immeuble. Solutions pour résidences et professionnels.",
        icon: "DoorOpen",
        link: "/services/portails-parking",
      },
    ],
  },

  // --- Section À Propos ---
  about: {
    title: "HD Connect : L'Expertise Sécurité à Votre Service",
    content: [
      "Fort d'une décennie d'expérience dans le domaine de la sécurité électronique, HD Connect s'est imposé comme un partenaire de confiance pour les particuliers et les professionnels. Notre mission est de vous fournir des solutions de sécurité sur mesure, alliant les dernières technologies à une installation irréprochable, pour une tranquillité d'esprit totale.",
      "Notre équipe d'experts est dédiée à l'installation, la maintenance et le dépannage de systèmes de vidéosurveillance, d'alarmes et de contrôle d'accès. Basés en Île-de-France, nous intervenons rapidement à Paris et dans les grandes métropoles pour répondre à tous vos besoins de sécurité, que vous soyez un particulier soucieux de protéger sa famille ou un professionnel désireux de sécuriser ses locaux.",
    ],
    stats: [
      { value: "10+", label: "Années d'Expérience" },
      { value: "500+", label: "Clients Satisfaits" },
      { value: "24/7", label: "Support Technique" },
    ],
  },

  // --- Section Contact ---
  contact: {
    title: "Contactez-nous pour un Devis Personnalisé",
    subtitle: "Notre équipe est à votre écoute pour répondre à vos questions et vous conseiller sur la meilleure solution de sécurité.",
    formTitle: "Formulaire de Contact Rapide",
  },

  // --- Pages de Services Détaillées ---
  pageServices: {
    videosurveillance: {
      title: "Vidéosurveillance Professionnelle",
      description: "La vidéosurveillance est la première ligne de défense. Nous concevons des systèmes complets, de la sélection des caméras 4K à l'installation des enregistreurs (NVR/DVR) et à la configuration d'un accès sécurisé via mobile. Nos solutions incluent l'analyse vidéo intelligente (détection de mouvement, franchissement de ligne) pour une alerte proactive et une preuve irréfutable en cas d'incident.",
      features: [
        "Caméras IP et 4K",
        "Enregistrement NVR/DVR sécurisé",
        "Accès et consultation à distance (mobile/PC)",
        "Analyse vidéo intelligente (détection de mouvement, reconnaissance faciale)",
      ],
      faq: [
        { question: "Quelle est la durée de garantie de vos systèmes ?", answer: "Nous offrons une garantie de 5 ans sur l'ensemble de nos équipements et de l'installation." },
        { question: "Puis-je consulter les images à distance ?", answer: "Oui, tous nos systèmes sont configurés pour un accès sécurisé via une application mobile ou un navigateur web." },
        { question: "Vos caméras fonctionnent-elles la nuit ?", answer: "Absolument. Nos caméras sont équipées de vision nocturne infrarouge ou de technologie Starlight pour des images claires même dans l'obscurité totale." },
      ],
    },
    alarme: {
      title: "Systèmes d'Alarme Anti-Intrusion",
      description: "Sécurisez votre espace avec des alarmes certifiées. Nous installons des systèmes anti-intrusion filaires ou sans fil, avec des détecteurs de mouvement, de bris de glace et d'ouverture. Nos alarmes sont connectées et peuvent être reliées à un centre de télésurveillance 24/7 pour une intervention immédiate, garantissant une protection maximale contre les cambriolages.",
      features: [
        "Alarmes sans fil et filaires",
        "Détecteurs de mouvement et d'ouverture",
        "Sirènes intérieures et extérieures puissantes",
        "Connexion à un centre de télésurveillance (optionnel)",
      ],
    },
    controleacces: {
      title: "Gestion et Contrôle d'Accès",
      description: "Gérez les flux de personnes avec précision. Nos solutions de contrôle d'accès vont des interphones vidéo aux systèmes biométriques de pointe. Que ce soit pour un immeuble résidentiel ou un site industriel, nous assurons l'installation de digicodes, lecteurs de badges et systèmes de gestion centralisée pour un contrôle total sur les accès.",
      features: [
        "Interphones et vidéophones",
        "Lecteurs de badges et de cartes",
        "Digicodes et claviers",
        "Solutions biométriques (empreinte, reconnaissance faciale)",
      ],
    },
    maintenance: {
      title: "Maintenance et Dépannage Express",
      description: "La maintenance est essentielle pour la pérennité de votre investissement. Nous proposons des contrats de maintenance préventive annuels pour vérifier, nettoyer et mettre à jour vos systèmes. En cas de panne, notre service de dépannage express intervient sous 24h en Île-de-France pour minimiser les temps d'arrêt de votre sécurité.",
      features: [
        "Contrats de maintenance annuels",
        "Intervention d'urgence 24/7",
        "Mise à jour et optimisation des systèmes existants",
        "Diagnostic complet et réparation",
      ],
    },
    reseau: {
      title: "Infrastructure Réseau et Câblage",
      description: "La performance de votre sécurité dépend de la qualité de votre réseau. Nous sommes experts en câblage structuré (Cat 6/7) et en installation de fibre optique. Nous configurons vos baies de brassage, switchs et routeurs pour garantir une bande passante optimale et une fiabilité maximale pour vos caméras IP et systèmes connectés.",
      features: [
        "Installation de baies de brassage",
        "Câblage RJ45 Catégorie 6/7",
        "Configuration de switchs et routeurs",
        "Audit et certification de réseau",
      ],
    },
    domotique: {
      title: "Domotique et Maison Intelligente",
      description: "Transformez votre maison ou vos locaux en un espace intelligent et sécurisé. Nous intégrons vos systèmes de sécurité (alarme, caméras) avec la domotique (éclairage, chauffage, volets roulants) pour créer des scénarios automatisés. Par exemple, l'alarme se déclenche et toutes les lumières s'allument. Gestion simplifiée via une application unique.",
      features: [
        "Centralisation des commandes",
        "Scénarios de sécurité automatisés",
        "Compatibilité avec les principaux écosystèmes (Google Home, Alexa)",
        "Installation de systèmes KNX et Z-Wave",
      ],
    },
    antenneSatellite: {
      title: "Antennes Hertziennes & Satellite",
      description: "Une réception TV de qualité est essentielle pour votre confort quotidien. Nous installons, réglons et dépannons tous types d'antennes : râteaux TNT, paraboles satellite, antennes collectives pour immeubles. Notre expertise garantit une réception optimale de toutes vos chaînes, même dans les zones difficiles.",
      features: [
        "Installation antennes TNT et râteaux",
        "Pose et orientation de paraboles satellite",
        "Antennes collectives pour copropriétés",
        "Dépannage et réglage de réception",
        "Amplificateurs et répartiteurs de signal",
      ],
      faq: [
        { question: "Quelles sont les chaînes disponibles en TNT ?", answer: "La TNT offre plus de 30 chaînes gratuites en HD. Nous optimisons votre installation pour capter toutes les chaînes disponibles dans votre région." },
        { question: "Puis-je recevoir les chaînes étrangères ?", answer: "Oui, avec une parabole satellite correctement orientée, vous pouvez recevoir des centaines de chaînes internationales selon le satellite visé (Astra, Hotbird, etc.)." },
        { question: "Intervenez-vous sur les antennes collectives ?", answer: "Absolument. Nous installons et maintenons les systèmes d'antennes collectives pour les copropriétés, avec amplification et distribution vers tous les appartements." },
      ],
    },
    portailsParking: {
      title: "Portails, Parking & Automatismes",
      description: "Sécurisez et automatisez tous vos accès extérieurs. Du portail coulissant motorisé à la porte de garage, en passant par les barrières de parking et les interphones d'immeuble, nous proposons des solutions complètes pour les résidences, les copropriétés et les entreprises. Installation, programmation et maintenance de qualité professionnelle.",
      features: [
        "Motorisation de portails coulissants et battants",
        "Portes de garage sectionnelles et basculantes",
        "Barrières automatiques de parking",
        "Interphones et vidéophones d'immeuble",
        "Télécommandes et badges d'accès",
        "Contrôle à distance via smartphone",
      ],
      faq: [
        { question: "Peut-on motoriser un portail existant ?", answer: "Dans la plupart des cas, oui. Nous évaluons la structure de votre portail et proposons la motorisation adaptée (vérins, bras articulés, coulissant)." },
        { question: "Quelle garantie sur les automatismes ?", answer: "Nous offrons une garantie de 2 à 5 ans selon les équipements, avec possibilité de contrat de maintenance pour prolonger la durée de vie de votre installation." },
        { question: "Proposez-vous des solutions pour les copropriétés ?", answer: "Oui, nous sommes spécialisés dans les systèmes d'accès pour immeubles : interphones multi-logements, digicodes, vidéophones et portails automatiques." },
      ],
    },
  },

  // --- Mentions Légales et Politique de Confidentialité ---
  legal: {
    mentions: {
      title: "Mentions Légales",
      content: `Éditeur du site
HD Connect
Adresse : Paris, France
Email : kamal@hdconnect.fr
Téléphone : +33 6 27 13 53 04

Directeur de la publication
Kamal - Gérant de HD Connect

Hébergement
Ce site est hébergé par Lovable.
Adresse : Lovable, San Francisco, CA, USA
Site web : https://lovable.dev

Propriété intellectuelle
L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de HD Connect, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de HD Connect.

Limitation de responsabilité
HD Connect s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, HD Connect ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
HD Connect décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.

Liens hypertextes
Le site peut contenir des liens vers d'autres sites. HD Connect n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.

Crédits
Design et développement : HD Connect
Images : Générées par intelligence artificielle (Flux AI)`,
    },
    privacy: {
      title: "Politique de Confidentialité",
      content: `Dernière mise à jour : Décembre 2024

HD Connect s'engage à protéger la vie privée des utilisateurs de son site internet. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.

1. Collecte des données
Nous collectons les informations que vous nous fournissez directement via nos formulaires de contact et de demande de devis :
- Nom et prénom
- Adresse email
- Numéro de téléphone
- Adresse postale (ville/code postal)
- Description de votre projet ou problème

2. Utilisation des données
Vos données personnelles sont utilisées exclusivement pour :
- Répondre à vos demandes de devis ou d'information
- Vous recontacter dans le cadre de votre projet
- Améliorer nos services
- Respecter nos obligations légales

3. Conservation des données
Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact. Au-delà, elles sont supprimées ou anonymisées.

4. Partage des données
HD Connect ne vend, ne loue ni ne partage vos informations personnelles avec des tiers à des fins commerciales. Vos données peuvent être partagées uniquement avec :
- Nos prestataires techniques (hébergement, email)
- Les autorités compétentes si la loi l'exige

5. Sécurité des données
Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.

6. Vos droits
Conformément au RGPD, vous disposez des droits suivants :
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'effacement
- Droit à la limitation du traitement
- Droit à la portabilité
- Droit d'opposition

Pour exercer ces droits, contactez-nous à : kamal@hdconnect.fr

7. Cookies
Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé.

8. Contact
Pour toute question concernant cette politique de confidentialité :
Email : kamal@hdconnect.fr
Téléphone : +33 6 27 13 53 04`,
    },
  },
};
