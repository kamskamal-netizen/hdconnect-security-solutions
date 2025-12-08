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
        description: " dissuadez les intrus et surveillez vos biens à distance grâce à nos systèmes de vidéosurveillance haute définition. Nous installons des caméras IP discrètes et performantes, des enregistreurs NVR sécurisés et configurons l'accès à distance sur votre smartphone ou ordinateur.",
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
      heroImage: "/src/assets/service-camera.jpg",
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
      heroImage: "/src/assets/service-alarm.jpg",
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
      heroImage: "/src/assets/service-access.jpg",
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
      heroImage: "/src/assets/service-maintenance.jpg",
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
      heroImage: "/src/assets/service-reseau.jpg",
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
      heroImage: "/src/assets/service-domotique.jpg",
      description: "Transformez votre maison ou vos locaux en un espace intelligent et sécurisé. Nous intégrons vos systèmes de sécurité (alarme, caméras) avec la domotique (éclairage, chauffage, volets roulants) pour créer des scénarios automatisés. Par exemple, l'alarme se déclenche et toutes les lumières s'allument. Gestion simplifiée via une application unique.",
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
