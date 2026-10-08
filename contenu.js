/* =====================================================================
   CONTENU DU PORTFOLIO — Yassine Aloui
   ---------------------------------------------------------------------
   Tout le texte du site est ici. Pour modifier le site, il suffit en
   général de modifier ce fichier (voir GUIDE.md pour les exemples).

   Règles d'écriture :
   - Chaque texte est entre guillemets "…". Pour une apostrophe dans le
     texte, utilisez ’ (apostrophe typographique) ou \' .
   - Chaque élément d'une liste se termine par une virgule.
   - Les titres sur deux lignes s'écrivent ["Ligne noire", "Ligne grise"].
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- Informations générales ---------- */
  site: {
    nom: "Yassine Aloui",
    annee: "2026",
    linkedin: "https://www.linkedin.com/in/yassine-aloui-contact",
    linkedinAffiche: "linkedin.com/in/yassine-aloui-contact",
    ville: "Paris, Île-de-France",
  },

  /* ---------- Diapo d'accueil ---------- */
  accueil: {
    titre: ["Yassine", "Aloui"],
    role: "Administrateur systèmes & réseaux, en alternance",
    photo: "images/photo-yassine.jpg",
    texte: "Apprenti chez BMW MINI by MS Groupe et étudiant en Bachelor Administrateur d’Infrastructures Sécurisées à l’ECE, j’administre les systèmes, les accès et le parc informatique d’un groupe de 22 concessions. Je me spécialise dans la sécurisation des infrastructures.",
    etiquettes: [
      { label: "Poste", valeur: "Apprenti administrateur systèmes" },
      { label: "Entreprise", valeur: "BMW MINI by MS Groupe" },
      { label: "Formation", valeur: "Bachelor Infrastructures Sécurisées · ECE" },
    ],
  },

  /* ---------- Diapo sommaire ---------- */
  sommaire: {
    titre: ["Sommaire", ""],
    texte: "Choisissez une carte pour ouvrir le chapitre, ou avancez avec les flèches.",
  },

  /* =====================================================================
     CHAPITRES
     - id      : identifiant court, sans espace ni accent (sert aux liens)
     - couleur : "bmw" (bleu BMW), "ece" (bleu pétrole ECE) ou "neutre"
     - resume  : phrase courte affichée sur la carte du sommaire
     - diapos  : la première diapo est la couverture du chapitre
     Types de diapos disponibles : chapitre, texte, chiffres, colonnes,
     frise, media, galerie, cartes, chaine, valeurs, bientot (voir GUIDE.md)
     ===================================================================== */
  chapitres: [

    /* ========================= 1.0 CERTIFICATIONS ========================= */
    {
      id: "certifications",
      titre: "Certifications",
      couleur: "neutre",
      resume: "Cisco Networking Academy et IBM",
      diapos: [
        {
          type: "chapitre",
          titre: ["Licences", "et certifications"],
          etiquettes: [
            { label: "Nombre", valeur: "3 certificats" },
            { label: "Organismes", valeur: "Cisco Networking Academy · IBM" },
            { label: "Période", valeur: "2025 – 2026" },
          ],
        },
        {
          /* image : certificat affiché en miniature, agrandissable en plein écran
             lien  : (facultatif) page officielle de vérification du certificat */
          type: "cartes",
          titre: ["Mes certificats", "Cliquez pour agrandir"],
          cartes: [
            { kicker: "Cisco Networking Academy", titre: "CCNA : Présentation des réseaux", meta: "29 avril 2025", vedette: true,
              image: { src: "images/certif-cisco-ccna-reseaux.jpg", alt: "Certificat Cisco Networking Academy : CCNA Présentation des réseaux, décerné à Yassine Aloui le 29 avril 2025" } },
            { kicker: "IBM · Cognitive Class", titre: "Introduction to Cloud (CC0101EN)", meta: "24 mars 2026",
              image: { src: "images/certif-ibm-cloud.jpg", alt: "Certificat IBM Cognitive Class : Introduction to Cloud, décerné à Yassine Aloui le 24 mars 2026" },
              lien: "https://courses.cognitiveclass.ai/certificates/95c321604cd84b5b8680248fd951e51d", lienTexte: "Vérifier l’authenticité" },
            { kicker: "Cisco Networking Academy", titre: "Introduction à la cybersécurité", meta: "13 janvier 2025",
              image: { src: "images/certif-cisco-cybersecurite.jpg", alt: "Certificat Cisco Networking Academy : Introduction à la cybersécurité, décerné à Yassine Aloui le 13 janvier 2025" } },
          ],
        },
        {
          type: "colonnes",
          titre: ["CCNA", "Présentation des réseaux"],
          texte: "Premier module du parcours CCNA de la Cisco Networking Academy, suivi au Lycée Robert Doisneau. Il pose les bases du fonctionnement et de la configuration d’un réseau.",
          colonnes: [
            { label: "Fondamentaux", items: ["Modèles OSI et TCP/IP", "Couches physique et liaison", "Ethernet et commutation"] },
            { label: "Adressage", items: ["IPv4 et sous-réseaux", "IPv6", "ARP et ICMP"] },
            { label: "Configuration", items: ["Switchs et routeurs Cisco", "Sécurité réseau de base", "Construction d’un petit réseau"] },
          ],
          etiquettes: [{ label: "Obtenu", valeur: "29 avril 2025" }, { label: "Organisme", valeur: "Cisco Networking Academy" }, { label: "Établissement", valeur: "Lycée Robert Doisneau" }],
        },
        {
          type: "colonnes",
          titre: ["Cloud et sécurité", "Deux certificats complémentaires"],
          colonnes: [
            { label: "IBM · Mars 2026", titre: "Introduction to Cloud", items: ["Modèles de service : IaaS, PaaS, SaaS", "Cloud public, privé et hybride", "Virtualisation et sécurité du cloud"] },
            { label: "Cisco · Janvier 2025", titre: "Introduction à la cybersécurité", items: ["Menaces et types d’attaques", "Protection des données", "Bonnes pratiques de sécurité"] },
          ],
        },
      ],
    },

    /* ========================= 2.0 PARCOURS SCOLAIRE ========================= */
    {
      id: "parcours",
      titre: "Parcours scolaire",
      couleur: "ece",
      resume: "BTS CIEL Informatique et Réseaux et stage",
      diapos: [
        {
          type: "chapitre",
          titre: ["Parcours", "scolaire"],
          etiquettes: [
            { label: "Période", valeur: "2021 – 2027" },
            { label: "Spécialité", valeur: "Informatique, réseaux et cybersécurité" },
          ],
        },
        {
          type: "frise",
          titre: ["Les grandes étapes", "de ma formation"],
          etapes: [
            { date: "Sept. 2021 – juin 2024", titre: "Baccalauréat général · spécialités NSI et Mathématiques", lieu: "Lycée Robert Doisneau" },
            { date: "Sept. 2024 – juin 2026", titre: "BTS CIEL option Informatique et Réseaux", lieu: "Lycée Robert Doisneau" },
            { date: "Mai – juin 2025", titre: "Stage en services informatiques", lieu: "C-COM 66 · Paris" },
            { date: "Mars 2026 – juil. 2027", titre: "Bachelor Administrateur d’Infrastructures Sécurisées", lieu: "ECE · École d’ingénieurs", actuel: true },
          ],
        },
        {
          type: "texte",
          titre: ["BTS CIEL", "Informatique et Réseaux"],
          texte: [
            "Le BTS Cybersécurité, Informatique et réseaux, Électronique (option IR) m’a donné une double compétence en cybersécurité et en développement.",
            "J’y ai acquis une base solide en infrastructures réseau et en sécurité des systèmes, complétée par le module Cisco CCNA : Présentation des réseaux. Le cursus s’est conclu par un projet technique IoT (voir chapitre 5.0).",
          ],
          points: ["Infrastructures réseau : TCP/IP, routage, DHCP, adressage IP", "Sécurité des systèmes", "Gestion de projet en équipe", "Projet technique E6.2 : station IoT connectée"],
          etiquettes: [{ label: "Établissement", valeur: "Lycée Robert Doisneau" }, { label: "Période", valeur: "Sept. 2024 – juin 2026" }],
        },
        {
          type: "texte",
          titre: ["Stage", "C-COM 66"],
          texte: ["Deux mois en entreprise, sur site à Paris, au sein d’une équipe de services informatiques. Une première immersion dans le support aux utilisateurs."],
          points: ["Support technique aux utilisateurs", "Interventions de services informatiques", "Réalisation de tests"],
          etiquettes: [{ label: "Période", valeur: "Mai – juin 2025" }, { label: "Type", valeur: "Stage · 2 mois" }, { label: "Lieu", valeur: "Paris · sur site" }],
        },
      ],
    },

    /* ========================= 3.0 FORMATION ACTUELLE ========================= */
    {
      id: "formation",
      titre: "Formation actuelle",
      couleur: "ece",
      resume: "Bachelor Infrastructures Sécurisées à l’ECE",
      diapos: [
        {
          type: "chapitre",
          titre: ["Bachelor", "Infrastructures sécurisées"],
          etiquettes: [
            { label: "École", valeur: "ECE · École d’ingénieurs" },
            { label: "Période", valeur: "Mars 2026 – juillet 2027" },
            { label: "Rythme", valeur: "Alternance" },
          ],
        },
        {
          type: "texte",
          titre: ["Le programme", "Administrateur d’Infrastructures Sécurisées"],
          texte: [
            "Les failles de sécurité et les cyberattaques se multiplient et fragilisent les organisations partout dans le monde.",
            "Ce Bachelor forme des administrateurs capables de concevoir, d’exploiter et de protéger les infrastructures informatiques d’une entreprise.",
          ],
          etiquettes: [{ label: "Niveau", valeur: "Bac+3" }, { label: "Statut", valeur: "En cours" }],
        },
        {
          type: "colonnes",
          titre: ["Trois piliers", "de la formation"],
          colonnes: [
            { label: "01", titre: "Sécurité informatique", items: ["Cybersécurité", "Gestion des risques"] },
            { label: "02", titre: "Réseaux", items: ["Administration réseau", "Conception de réseaux"] },
            { label: "03", titre: "Systèmes", items: ["Administration système", "Maîtrise des outils technologiques"] },
          ],
          note: "Ces compétences sont mises en pratique chaque jour en entreprise, au sein de MS Groupe.",
        },
      ],
    },

    /* ========================= 4.0 MON ENTREPRISE ========================= */
    {
      id: "entreprise",
      titre: "Mon entreprise",
      couleur: "bmw",
      resume: "BMW MINI by MS Groupe : poste et missions",
      diapos: [
        {
          type: "chapitre",
          titre: ["BMW MINI", "by MS Groupe"],
          etiquettes: [
            { label: "Poste", valeur: "Apprenti administrateur systèmes" },
            { label: "Depuis", valeur: "Septembre 2026" },
            { label: "Contrat", valeur: "Alternance" },
            { label: "Basé à", valeur: "Vert-Saint-Denis (77)" },
          ],
        },
        {
          type: "chiffres",
          titre: ["Le groupe", "en chiffres"],
          texte: "MS Groupe distribue les marques BMW, MINI, BMW Motorrad et Honda en Île-de-France et dans le centre de la France. Le groupe est né en 2025 de l’union des groupes Méry et Sabrié.",
          chiffres: [
            { valeur: "480", libelle: "salariés" },
            { valeur: "22", libelle: "concessions" },
            { valeur: "12", libelle: "villes" },
            { valeur: "10 000", libelle: "véhicules vendus par an" },
          ],
          note: "Source : msgroupe.com",
        },
        {
          type: "colonnes",
          titre: ["Un réseau", "de concessions premium"],
          colonnes: [
            { label: "BMW · MINI", titre: "12 concessions", items: ["Réseau Panel : Melun, Fontainebleau, Sens, Auxerre, Bourges, Nevers, Châteauroux", "Amplitude : Blois, Tours, Le Mans", "Dupont : Orléans, Montargis"] },
            { label: "BMW Motorrad", titre: "7 concessions", items: ["Fontainebleau, Auxerre, Bourges", "Orléans, Montargis", "Tours, Le Mans"] },
            { label: "Honda", titre: "3 concessions", items: ["Honda Motos : Orléans, Tours", "Honda Autos : Orléans"] },
          ],
        },
        {
          type: "texte",
          titre: ["Mon poste", "au cœur du système d’information"],
          texte: [
            "Le groupe est en pleine structuration de son système d’information. J’interviens sur l’ensemble des 22 concessions, en lien direct avec la direction des systèmes d’information.",
          ],
          etiquettes: [
            { label: "Périmètre", valeur: "Tout MS Groupe · 22 concessions" },
            { label: "Rattachement", valeur: "Directement au DSI du groupe" },
            { label: "Interlocuteurs", valeur: "Responsables de sites, direction, PDG" },
            { label: "Basé à", valeur: "Vert-Saint-Denis, déplacements sur les sites" },
          ],
        },
        {
          type: "texte",
          numeroGrand: "01",
          titre: ["Identités", "et accès"],
          texte: ["Chaque collaborateur doit disposer des bons accès, au bon moment. Je gère le cycle de vie des comptes, de l’arrivée au départ."],
          points: ["Création des accès informatiques", "Administration Active Directory", "Administration Microsoft 365"],
        },
        {
          type: "texte",
          numeroGrand: "02",
          titre: ["Parc", "et utilisateurs"],
          texte: ["Des postes prêts à l’emploi et des utilisateurs accompagnés, sur tous les sites du groupe."],
          points: ["Gestion du parc informatique", "Préparation des postes de travail", "Support utilisateurs niveau 1 et 2"],
        },
        {
          type: "texte",
          numeroGrand: "03",
          titre: ["Réseau", "et sécurité"],
          texte: ["Un réseau fiable et protégé pour relier les concessions et leurs équipes."],
          points: ["Gestion du réseau informatique", "Management des switchs réseau", "Sécurité réseau des systèmes informatiques"],
        },
        {
          type: "texte",
          numeroGrand: "04",
          titre: ["Serveurs", "et téléphonie"],
          texte: ["Les services qui font tourner l’activité au quotidien."],
          points: ["Maintenance des serveurs", "Pilotage de la solution de téléphonie"],
        },
      ],
    },

    /* ========================= 5.0 MON PROJET ========================= */
    {
      id: "projet",
      titre: "Mon projet",
      couleur: "neutre",
      resume: "Station IoT de surveillance de la qualité de l’eau",      diapos: [
        {
          type: "chapitre",
          titre: ["Surveillance de la", "qualité des eaux"],
          surtitre: "Projet",
          etiquettes: [
            { label: "Cadre", valeur: "BTS CIEL IR · épreuve E6.2" },
            { label: "Période", valeur: "Janvier – juin 2026" },
            { label: "Équipe", valeur: "3 étudiants" },
            { label: "Mon rôle", valeur: "Réseau, communication et sécurité" },
          ],
        },
        {
          type: "texte",
          titre: ["Le besoin", "Surveiller l’eau en continu"],
          texte: [
            "La surveillance des rivières et des étangs repose encore sur des prélèvements manuels analysés en laboratoire. En 2022, la pollution du fleuve Oder a montré le prix d’une détection trop tardive.",
            "Objectif : concevoir une station automatique, fiable et sécurisée, qui mesure la qualité de l’eau et alerte en temps réel.",
          ],
          points: ["Manque de réactivité des mesures ponctuelles", "Coût des déplacements de techniciens", "Aucune donnée la nuit ni entre deux prélèvements"],
        },
        {
          type: "media",
          titre: ["La solution", "Une station connectée"],
          texte: ["Des capteurs immergés mesurent quatre paramètres. Les données voyagent par radio longue portée jusqu’à un serveur, puis s’affichent sur une plateforme de supervision."],
          points: ["pH", "Température", "Turbidité", "Solides dissous (TDS)"],
          image: { src: "images/projet-synoptique.jpg", alt: "Synoptique : capteurs et carte MKR, passerelle LoRaWAN, serveur TTN, serveur applicatif et plateforme de monitoring", legende: "Synoptique du système" },
        },
        {
          type: "media",
          titre: ["Acquisition", "Du capteur à la radio"],
          texte: ["Une carte Arduino MKR WAN 1310 lit les sondes, convertit les tensions en mesures puis les envoie par radio LoRaWAN."],
          points: ["4 capteurs : pH, DS18B20, TDS, turbidité", "Étalonnage du pH avec solutions tampons", "Trame compacte de 8 octets", "Connexion au réseau en mode OTAA"],
          image: { src: "images/projet-montage.jpg", alt: "Montage réel : carte Arduino, platine d’essai et sondes plongées dans un bocal d’eau", legende: "Prototype sur le support du lycée", portrait: true },
        },
        {
          type: "chaine",
          titre: ["La chaîne", "de transmission"],
          texte: "Chaque maillon transforme ou achemine la donnée. En bleu, la partie dont j’avais la responsabilité.",
          maillons: [
            { nom: "Capteurs", detail: "pH · T° · TDS · turbidité", lien: "Analogique" },
            { nom: "Arduino MKR", detail: "Microcontrôleur terrain", lien: "LoRa 868 MHz" },
            { nom: "Passerelle", detail: "LoRaWAN", lien: "UDP 1700" },
            { nom: "TTN", detail: "The Things Network", lien: "MQTTS 8883", moi: true },
            { nom: "Raspberry Pi", detail: "API Flask · paho-mqtt", lien: "TCP 3306", moi: true },
            { nom: "MySQL", detail: "Base de données", lien: "HTTP", moi: true },
            { nom: "IHM web", detail: "Tableau de bord · carte" },
          ],
        },
        {
          type: "media",
          titre: ["Réception", "et routage des données"],
          texte: ["Une Raspberry Pi s’abonne au flux chiffré de TTN, vérifie chaque mesure puis l’enregistre en base. Elle expose aussi une API pour l’interface web."],
          points: ["Décodage des trames (Payload Formatter)", "Abonnement MQTTS avec paho-mqtt", "API REST Flask : routes /mesures et /status", "Connexion MySQL via réseau 4G"],
          image: { src: "images/projet-terminal.jpg", alt: "Terminal de la Raspberry Pi : connexion à TTN puis insertion des mesures en base", legende: "Mesures reçues et enregistrées en temps réel" },
          large: true,
        },
        {
          type: "colonnes",
          titre: ["Sécurité", "Faire fonctionner, puis sécuriser"],
          texte: "Une fois la chaîne opérationnelle, quatre couches de protection ont été ajoutées, chacune validée par un test.",
          colonnes: [
            { label: "01", titre: "Chiffrement", items: ["MQTTS sur le port 8883", "TLS 1.2 et plus, certificat vérifié"] },
            { label: "02", titre: "Secrets", items: ["Fichier .env hors du code", "Aucun mot de passe dans les sources"] },
            { label: "03", titre: "Authentification", items: ["Token Bearer sur l’API", "Erreur 401 sans jeton valide"] },
            { label: "04", titre: "Validation", items: ["Contrôle des plages de valeurs", "Mesures aberrantes rejetées"] },
          ],
        },
        {
          type: "galerie",
          titre: ["Visualisation", "Les données en temps réel"],
          texte: "Une interface web affiche les mesures, leur conformité aux normes et la position des balises.",
          images: [
            { src: "images/projet-dashboard.jpg", alt: "Tableau de bord : jauges de température, pH, turbidité et TDS avec taux de conformité", legende: "Tableau de bord de la qualité de l’eau" },
            { src: "images/projet-carte.jpg", alt: "Carte interactive des balises sur les étangs de Viry-Châtillon et Grigny", legende: "Carte des balises" },
          ],
        },
        {
          type: "chiffres",
          titre: ["Résultats", "et compétences"],
          chiffres: [
            { valeur: "8/8", libelle: "tests validés" },
            { valeur: "4", libelle: "paramètres mesurés" },
            { valeur: "7", libelle: "maillons de bout en bout" },
          ],
          colonnes: [
            { label: "Protocoles", items: ["LoRaWAN, MQTT, MQTTS", "TCP/IP, HTTP REST"] },
            { label: "Sécurité", items: ["SSL/TLS, token Bearer", "Validation des entrées"] },
            { label: "Systèmes", items: ["Raspberry Pi OS, Linux", "Python, Flask, MySQL"] },
          ],
        },
      ],
    },

    /* ========================= 6.0 MES VALEURS ========================= */
    {
      id: "valeurs",
      titre: "Mes valeurs",
      couleur: "neutre",
      resume: "Engagement bénévole et principes personnels",
      diapos: [
        {
          type: "chapitre",
          titre: ["Au-delà", "de l’informatique"],
          etiquettes: [{ label: "Engagement", valeur: "Bénévole depuis 2022" }, { label: "Valeurs", valeur: "5 principes" }],
        },
        {
          type: "texte",
          titre: ["Bénévolat", "Deux Mains, Un Cœur"],
          texte: ["Depuis 2022, je participe aux actions solidaires de l’association, au service des personnes dans le besoin. Cet engagement m’a appris la solidarité, le partage et le sens des responsabilités."],
          etiquettes: [{ label: "Depuis", valeur: "Septembre 2022" }, { label: "Domaine", valeur: "Aide humanitaire" }],
        },
        {
          /* Cartes qui se retournent au survol (ou au toucher sur mobile).
             image  : recto de la carte
             phrase : texte écrit sur l’image (lu par les lecteurs d’écran)
             verso  : texte affiché au dos
             fond / encre : couleurs du dos, reprises de l’image */
          type: "valeurs",
          titre: ["Mes valeurs", "Survolez une carte"],
          cartes: [
            { image: "images/valeur-nouveaute.jpg", phrase: "It’s not hard. It’s just new.", fond: "#A08B98", encre: "#F3EADF",
              verso: "Ce qui paraît difficile est souvent simplement inconnu. La nouveauté est une occasion d’apprendre, pas une raison de reculer." },
            { image: "images/valeur-gentillesse.jpg", phrase: "Be kind for no reason.", fond: "#8E9FA8", encre: "#F3EADF",
              verso: "La gentillesse n’a pas besoin de raison. Un geste sincère, sans rien attendre en retour, compte toujours." },
            { image: "images/valeur-constance.jpg", phrase: "Working hard, quietly.", fond: "#F2E8DC", encre: "#3D3934",
              verso: "Les vrais progrès se construisent dans la constance et l’humilité, loin du bruit et des regards." },
            { image: "images/valeur-discretion.jpg", phrase: "Stay discreet. Let the work speak.", fond: "#C98B6B", encre: "#F3EADF",
              verso: "Inutile de se mettre en avant : les actes en disent toujours plus que les mots." },
            { image: "images/valeur-calme.jpg", phrase: "Being calm is a necessity.", fond: "#A8B5A2", encre: "#F3EADF",
              verso: "Le calme permet de prendre du recul, de voir clair et de faire les bons choix." },
          ],
        },
      ],
    },
  ],

  /* ---------- Dernière diapo : contact ---------- */
  contact: {
    titre: ["Merci", "Échangeons"],
    texte: "Une opportunité, une question sur mon parcours ? Écrivez-moi sur LinkedIn.",
  },
};
