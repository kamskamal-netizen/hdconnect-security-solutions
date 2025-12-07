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
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Devis", href: "/#quote" },
    { label: "À Propos", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Admin", href: "/auth" },
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
        description: "Installation de caméras IP, systèmes d'enregistrement NVR, et accès à distance sécurisé.",
        icon: "Camera",
        link: "/services/videosurveillance",
      },
      {
        title: "Systèmes d'Alarme",
        description: "Alarmes anti-intrusion, détecteurs de mouvement, et systèmes connectés pour une protection 24/7.",
        icon: "Shield",
        link: "/services/alarme",
      },
      {
        title: "Contrôle d'Accès",
        description: "Interphones, digicodes, lecteurs de badges et solutions biométriques pour gérer les accès.",
        icon: "Lock",
        link: "/services/controleacces",
      },
      {
        title: "Maintenance & Dépannage",
        description: "Intervention rapide et contrat de maintenance préventive pour assurer la fiabilité de vos systèmes.",
        icon: "Wrench",
        link: "/services/maintenance",
      },
      {
        title: "Réseau & Câblage",
        description: "Installation de réseaux informatiques et câblage structuré pour une infrastructure solide.",
        icon: "Wifi",
        link: "/services/reseau",
      },
      {
        title: "Domotique Sécurité",
        description: "Intégration de vos systèmes de sécurité à votre maison intelligente pour une gestion simplifiée.",
        icon: "Home",
        link: "/services/domotique",
      },
    ],
  },

  // --- Section À Propos ---
  about: {
    title: "HD Connect : L'Expertise Sécurité à Votre Service",
    content: [
      "Fondée sur une décennie d'expérience, HD Connect est votre partenaire de confiance pour la sécurité électronique. Nous nous engageons à fournir des solutions sur mesure, alliant technologie de pointe et installation professionnelle, pour garantir la tranquillité d'esprit de nos clients.",
      "Notre équipe d'experts est spécialisée dans l'installation, la maintenance et le dépannage de systèmes de vidéosurveillance, d'alarmes et de contrôle d'accès. Nous intervenons rapidement en Île-de-France et dans les grandes métropoles pour répondre à tous vos besoins de sécurité, qu'ils soient résidentiels ou professionnels.",
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
      heroImage: "/src/assets/service-camera.jpg",
      description: "Protégez vos biens et vos proches avec nos systèmes de vidéosurveillance haute définition. Nous proposons des solutions sur mesure, de l'installation de caméras IP à la configuration de l'accès à distance sécurisé.",
      features: [
        "Caméras IP et 4K",
        "Enregistrement NVR/DVR sécurisé",
        "Accès et consultation à distance (mobile/PC)",
        "Analyse vidéo intelligente (détection de mouvement, reconnaissance faciale)",
      ],
    },
    alarme: {
      title: "Systèmes d'Alarme Anti-Intrusion",
      heroImage: "/src/assets/service-alarm.jpg",
      description: "Nos systèmes d'alarme sont conçus pour détecter toute tentative d'intrusion et alerter immédiatement. Installation sans fil, connectée et conforme aux normes de sécurité.",
      features: [
        "Alarmes sans fil et filaires",
        "Détecteurs de mouvement et d'ouverture",
        "Sirènes intérieures et extérieures puissantes",
        "Connexion à un centre de télésurveillance (optionnel)",
      ],
    },
    controleacces: {
      title: "Gestion et Contrôle d'Accès",
      heroImage: "/src/assets/service-access.jpg",
      description: "Sécurisez les entrées de vos locaux professionnels ou de votre résidence avec nos solutions de contrôle d'accès modernes et fiables.",
      features: [
        "Interphones et vidéophones",
        "Lecteurs de badges et de cartes",
        "Digicodes et claviers",
        "Solutions biométriques (empreinte, reconnaissance faciale)",
      ],
    },
    maintenance: {
      title: "Maintenance et Dépannage Express",
      heroImage: "/src/assets/service-maintenance.jpg",
      description: "Un système de sécurité doit être fiable. Nous assurons la maintenance préventive et le dépannage rapide de tous vos équipements.",
      features: [
        "Contrats de maintenance annuels",
        "Intervention d'urgence 24/7",
        "Mise à jour et optimisation des systèmes existants",
        "Diagnostic complet et réparation",
      ],
    },
    reseau: {
      title: "Infrastructure Réseau et Câblage",
      heroImage: "/src/assets/service-reseau.jpg",
      description: "Une bonne sécurité repose sur un réseau solide. Nous installons et certifions vos infrastructures de câblage informatique et fibre optique.",
      features: [
        "Installation de baies de brassage",
        "Câblage RJ45 Catégorie 6/7",
        "Configuration de switchs et routeurs",
        "Audit et certification de réseau",
      ],
    },
    domotique: {
      title: "Domotique et Maison Intelligente",
      heroImage: "/src/assets/service-domotique.jpg",
      description: "Intégrez la sécurité à votre quotidien. Contrôlez vos alarmes, caméras, éclairages et chauffage depuis une seule application.",
      features: [
        "Centralisation des commandes",
        "Scénarios de sécurité automatisés",
        "Compatibilité avec les principaux écosystèmes (Google Home, Alexa)",
        "Installation de systèmes KNX et Z-Wave",
      ],
    },
  },

  // --- Mentions Légales et Politique de Confidentialité ---
  legal: {
    mentions: {
      title: "Mentions Légales",
      content: "...", // Contenu à compléter
    },
    privacy: {
      title: "Politique de Confidentialité",
      content: "...", // Contenu à compléter
    },
  },
};
