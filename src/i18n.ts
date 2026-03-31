import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        services: 'Recrutement',
        gallery: 'Galerie',
        faq: 'FAQ',
        careers: 'Recrutement',
        contact: 'Contact',
        language: 'Langue'
      },
      hero: {
        badge: 'Recrutement Ouvert - 2026',
        title: 'Transformez votre temps libre en',
        titleAccent: 'revenu garanti',
        desc: 'Rejoignez EDIFLOR, leader du conditionnement à domicile. Étiquetez des produits de luxe depuis chez vous avec un salaire fixe net par mois.',
        cta: 'Postuler Maintenant',
        secondaryCta: 'Découvrir nos services',
        stats: {
          salary: 'Revenu Garanti',
          salaryDesc: 'Salaire fixe net',
          partners: '500+',
          partnersDesc: 'Agents actifs',
          satisfaction: '98%',
          satisfactionDesc: 'Taux de satisfaction',
          community: 'Rejoignez notre communauté active',
          quality: 'Qualité Garantie',
          qualityDesc: 'Processus certifié ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Élu meilleur programme de travail à domicile 2026'
        }
      },
      about: {
        badge: 'Qui sommes-nous ?',
        title: 'L\'excellence du service à domicile.',
        titleAccent: 'service à domicile',
        desc1: 'Depuis plus de 10 ans, EDIFLOR accompagne les entreprises dans leur logistique fine tout en offrant des opportunités de travail flexibles à des centaines de particuliers.',
        desc2: 'Notre mission est simple : allier la rigueur industrielle à la flexibilité du travail à domicile. Nous fournissons tout le matériel nécessaire pour que vous puissiez réussir vos missions en toute sérénité.',
        more: 'En savoir plus sur notre histoire',
        points: {
          p1: 'Matériel professionnel fourni gratuitement',
          p2: 'Formation complète et accompagnement continu',
          p3: 'Logistique de livraison et ramassage incluse',
          p4: 'Contrat de travail stable et sécurisé'
        }
      },
      services: {
        badge: 'Nos Services & Métiers',
        title: 'Des missions simples, un impact',
        titleAccent: 'réel',
        desc: 'Découvrez les différents métiers que nous proposons à nos partenaires à domicile. Chaque mission est encadrée par un protocole strict de qualité.',
        apply: 'Postuler maintenant',
        items: {
          pliage: {
            title: 'Pliage de Flyers',
            desc: 'Création et pliage de flyers publicitaires. Travail manuel simple et répétitif.'
          },
          pli: {
            title: 'Mise sous Pli',
            desc: 'Insertion de documents dans des enveloppes. Idéal pour un travail de précision.'
          },
          emballage: {
            title: 'Emballage & Colisage',
            desc: 'Conditionnement de produits légers et préparation de colis pour expédition.'
          },
          etiquetage: {
            title: 'Étiquetage de Bouteilles',
            desc: 'Étiquetage de produits cosmétiques et parfums. Matériel fourni, cycle de 28 jours.'
          },
          livraison: {
            title: 'Livraison Simplifiée',
            desc: 'Ramassage hebdomadaire ou mensuel de votre production directement à votre domicile.'
          }
        }
      },
      gallery: {
        badge: 'Illustrations Réelles & Métier',
        title: 'Le Travail en Images',
        titleAccent: 'Images',
        desc: 'Visualisez concrètement les étapes clés de votre future mission : de l\'étiquetage précis au contrôle qualité rigoureux.',
        items: {
          etiquetage: {
            title: 'Processus d\'Étiquetage',
            desc: 'Démonstration réelle de l\'utilisation de l\'étiqueteuse manuelle.'
          },
          pliage: {
            title: 'Technique de Pliage',
            desc: 'Vidéo d\'illustration montrant le pliage de flyers.'
          },
          qualite: {
            title: 'Contrôle Qualité',
            desc: 'Vérification de l\'alignement et de la propreté.'
          },
          logistique: {
            title: 'Logistique',
            desc: 'Processus de ramassage et de livraison.'
          },
          materiel: {
            title: 'Matériel Pro',
            desc: 'Applicateur d\'étiquettes de table.'
          },
          fini: {
            title: 'Production Finie',
            desc: 'Lot de flacons cosmétiques étiquetés.'
          }
        },
        formation: {
          title: 'Formation incluse',
          desc: 'Nous ne nous contentons pas de vous livrer les machines. Chaque partenaire reçoit une formation complète en vidéo et un manuel d\'utilisation détaillé pour maîtriser l\'étiquetage et l\'emballage en quelques heures seulement.'
        }
      },
      faq: {
        badge: 'Questions Fréquentes',
        title: 'Tout ce que vous devez',
        titleAccent: 'savoir',
        desc: 'Vous avez des questions sur le fonctionnement d\'EDIFLOR ? Retrouvez ici les réponses aux interrogations les plus courantes de nos futurs partenaires.',
        items: {
          q1: {
            q: 'Comment fonctionne le recrutement ?',
            a: 'Le processus est simple : vous postulez via notre formulaire, nous étudions votre profil, et si vous êtes retenu, nous vous envoyons le matériel et une formation complète.'
          },
          q2: {
            q: 'Dois-je payer pour le matériel ?',
            a: 'Non, EDIFLOR fournit tout le matériel nécessaire (étiqueteuse, produits, étiquettes).'
          },
          q3: {
            q: 'Comment se passe la livraison ?',
            a: 'Nous tenons à préciser que l\'entreprise a certaines exigences liées aux coûts réels de livraison de la machine (distance, poids, manutention) et aux obligations légales (livraison avec le mode d\'emploi). L\'entreprise exige que les nouveaux employés prennent en charge les frais de livraison. Soyez rassuré(e) : vous réglerez ces frais après la signature de votre contrat de travail. Afin d\'accélérer le traitement de votre dossier, nous vous demandons de signer le contrat avant tout paiement.'
          },
          q4: {
            q: 'Puis-je travailler à mon rythme ?',
            a: 'Oui, tant que l\'objectif de production est atteint dans le cycle de 28 jours, vous organisez votre temps comme vous le souhaitez.'
          },
          q5: {
            q: 'Y a-t-il une formation ?',
            a: 'Absolument. Chaque nouveau partenaire reçoit un kit de formation vidéo et un manuel détaillé pour maîtriser les gestes techniques.'
          },
          q6: {
            q: 'Comment suis-je payé ?',
            a: 'Les paiements sont effectués par virement bancaire chaque mois, après réception et vérification de votre production.'
          }
        }
      },
      testimonials: {
        badge: 'Témoignages',
        title: 'Ce que disent nos',
        titleAccent: 'partenaires',
        desc: 'Découvrez les retours d\'expérience de ceux qui ont rejoint l\'aventure EDIFLOR.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Agent d\'Étiquetage, Lyon',
            quote: 'Ediflor a changé ma vie. La flexibilité du travail à domicile me permet de passer plus de temps avec ma famille tout en ayant un revenu stable.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Agent de Conditionnement, Paris',
            quote: 'Le matériel est simple à utiliser et le support est toujours là quand j\'en ai besoin. Je recommande vivement ce programme.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Agent de Production, Marseille',
            quote: 'Un service sérieux et professionnel. Les paiements sont toujours à l\'heure et les objectifs sont tout à fait réalisables.'
          }
        }
      },
      careers: {
        title: 'Rejoignez le programme Ediflor',
        desc: 'Nous recrutons actuellement des Agents d\'Étiquetage pour travailler depuis chez eux. Profitez d\'horaires flexibles et d\'une rémunération attractive.',
        job: {
          title: 'Agent d\'Étiquetage de Bouteilles',
          desc: 'Nous sommes à la recherche de personnes dynamiques et sérieuses pour rejoindre notre équipe. Ce poste vous permet de travailler depuis le confort de votre domicile.',
          missions: 'Missions',
          missionsList: ['Étiquetage selon normes', 'Respect des délais', 'Gestion autonome'],
          profil: 'Profil',
          profilList: ['Motivé(e) et sérieux(se)', 'Travail indépendant', 'Sens de l\'organisation'],
          fullDesc: 'Ce poste consiste à étiqueter des produits cosmétiques et des parfums à domicile. Nous fournissons tout le matériel nécessaire (étiqueteuse, produits, étiquettes). Nos chauffeurs vous livrent et récupèrent les cartons tous les 28 jours.',
          salaryLabel: 'Salaire Mensuel',
          salaryValue: 'Revenu Fixe Net',
          objectiveLabel: 'Objectif',
          objectiveValue: '2 000 prod / 28j',
          badge: 'RECRUTEMENT EN COURS',
          quote: '"Ce n\'est pas difficile, nous fournissons tout le matériel."'
        },
        form: {
          title: 'Postuler Maintenant',
          successTitle: 'Candidature Envoyée !',
          success: 'Candidature Envoyée !',
          successDesc: 'Merci pour votre intérêt. Notre équipe RH reviendra vers vous très prochainement.',
          successMsg: 'Merci pour votre intérêt. Notre équipe RH reviendra vers vous très prochainement.',
          error: 'Une erreur est survenue. Veuillez réessayer.',
          back: 'Retour au site',
          nom: 'Nom de famille',
          prenom: 'Prénom',
          email: 'Adresse e-mail',
          tel: 'Numéro de téléphone',
          poste: 'Poste souhaité',
          postePlaceholder: 'Sélectionnez un poste',
          message: 'Message de motivation',
          messagePlaceholder: 'Parlez-nous de votre motivation...',
          aiImprove: 'Améliorer avec l\'IA',
          aiImproving: 'Amélioration...',
          cv: 'Votre CV (PDF, DOC)',
          cvPlaceholder: 'Cliquez pour ajouter votre CV ou glissez-déposez',
          recaptcha: 'Protégé par Google reCAPTCHA',
          submit: 'Envoyer ma candidature',
          submitting: 'Envoi en cours...',
          cancel: 'Annuler'
        }
      },
      contact: {
        badge: 'Contactez-nous',
        title: 'Une question ? Un projet ? Parlons-en aujourd\'hui.',
        description: 'Notre équipe est à votre disposition pour répondre à toutes vos interrogations concernant nos services de conditionnement à domicile.',
        phone: 'Téléphone',
        address: 'Adresse',
        form: {
          nom: 'Nom',
          name: 'Nom',
          email: 'Email',
          subject: 'Sujet',
          message: 'Votre message...',
          submit: 'Envoyer le message',
          submitting: 'Envoi en cours...',
          success: 'Message envoyé avec succès !',
          another: 'Envoyer un autre message'
        },
        legal: {
          title: 'Informations Juridiques',
          activity: 'Activité',
          activityValue: 'Imprimerie et Commerce de gros',
          creation: 'Création',
          creationValue: '15/04/1998',
          manager: 'Dirigeant',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Capital Social',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET (siège)',
          form: 'Forme juridique',
          formValue: 'SARL, société à responsabilité limitée',
          tva: 'Numéro de TVA',
          rcs: 'Numéro RCS'
        }
      },
      footer: {
        desc: 'Expert en facility management et services aux entreprises. Nous créons des environnements de travail sains et productifs.',
        nav: 'Navigation',
        links: {
          title: 'Navigation'
        },
        services: 'Services',
        contact: 'Contact',
        newsletter: {
          title: 'Newsletter',
          desc: 'Restez informé de nos dernières actualités et offres d\'emploi.',
          success: 'Inscrit avec succès !',
          placeholder: 'Votre email...'
        },
        rights: '© 2026 EDIFLOR. Tous droits réservés.',
        legal: 'Mentions Légales',
        privacy: 'Confidentialité',
        cookies: 'Cookies'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Recruitment',
        gallery: 'Gallery',
        faq: 'FAQ',
        careers: 'Careers',
        contact: 'Contact',
        language: 'Language'
      },
      hero: {
        badge: 'Open Recruitment - 2026',
        title: 'Turn your free time into',
        titleAccent: 'guaranteed income',
        desc: 'Join EDIFLOR, the leader in home packaging. Label luxury products from home with a fixed net salary per month.',
        cta: 'Apply Now',
        secondaryCta: 'Discover our services',
        stats: {
          salary: 'Guaranteed Income',
          salaryDesc: 'Fixed net salary',
          partners: '500+',
          partnersDesc: 'Active agents',
          satisfaction: '98%',
          satisfactionDesc: 'Satisfaction rate',
          community: 'Join our active community',
          quality: 'Quality Guaranteed',
          qualityDesc: 'ISO 9001 Certified Process',
          topRated: 'Top Rated',
          topRatedDesc: 'Voted best work-from-home program 2026'
        }
      },
      about: {
        badge: 'Who are we?',
        title: 'Excellence in home service.',
        titleAccent: 'home service',
        desc1: 'For over 10 years, EDIFLOR has been supporting companies in their fine logistics while offering flexible work opportunities to hundreds of individuals.',
        desc2: 'Our mission is simple: combine industrial rigor with the flexibility of working from home. We provide all the necessary equipment so you can succeed in your missions with complete peace of mind.',
        more: 'Learn more about our history',
        points: {
          p1: 'Professional equipment provided free of charge',
          p2: 'Comprehensive training and continuous support',
          p3: 'Delivery and pickup logistics included',
          p4: 'Stable and secure employment contract'
        }
      },
      services: {
        badge: 'Our Services & Jobs',
        title: 'Simple missions, real',
        titleAccent: 'impact',
        desc: 'Discover the different jobs we offer to our home partners. Each mission is governed by a strict quality protocol.',
        apply: 'Apply now',
        items: {
          pliage: {
            title: 'Flyer Folding',
            desc: 'Creation and folding of advertising flyers. Simple and repetitive manual work.'
          },
          pli: {
            title: 'Envelope Stuffing',
            desc: 'Inserting documents into envelopes. Ideal for precision work.'
          },
          emballage: {
            title: 'Packaging & Packing',
            desc: 'Packaging of light products and preparation of parcels for shipping.'
          },
          etiquetage: {
            title: 'Bottle Labeling',
            desc: 'Labeling of cosmetic products and perfumes. Equipment provided, 28-day cycle.'
          },
          livraison: {
            title: 'Simplified Delivery',
            desc: 'Weekly or monthly collection of your production directly from your home.'
          }
        }
      },
      gallery: {
        badge: 'Real Illustrations & Profession',
        title: 'Work in Images',
        titleAccent: 'Images',
        desc: 'Visualize concretely the key steps of your future mission: from precise labeling to rigorous quality control.',
        items: {
          etiquetage: {
            title: 'Labeling Process',
            desc: 'Real demonstration of using the manual labeler.'
          },
          pliage: {
            title: 'Folding Technique',
            desc: 'Illustration video showing flyer folding.'
          },
          qualite: {
            title: 'Quality Control',
            desc: 'Verification of alignment and cleanliness.'
          },
          logistique: {
            title: 'Logistics',
            desc: 'Collection and delivery process.'
          },
          materiel: {
            title: 'Pro Equipment',
            desc: 'Tabletop label applicator.'
          },
          fini: {
            title: 'Finished Production',
            desc: 'Batch of labeled cosmetic bottles.'
          }
        },
        formation: {
          title: 'Training included',
          desc: 'We don\'t just deliver the machines. Each partner receives comprehensive video training and a detailed user manual to master labeling and packaging in just a few hours.'
        }
      },
      faq: {
        badge: 'Frequently Asked Questions',
        title: 'Everything you need to',
        titleAccent: 'know',
        desc: 'Do you have questions about how EDIFLOR works? Find answers here to the most common questions from our future partners.',
        items: {
          q1: {
            q: 'How does recruitment work?',
            a: 'The process is simple: you apply via our form, we review your profile, and if selected, we send you the equipment and comprehensive training.'
          },
          q2: {
            q: 'Do I have to pay for the equipment?',
            a: 'No, EDIFLOR provides all necessary equipment (labeler, products, labels).'
          },
          q3: {
            q: 'How does delivery work?',
            a: 'We would like to point out that the company has certain requirements related to the actual costs of machine delivery (distance, weight, handling) and legal obligations (delivery with the user manual). The company requires new employees to cover the delivery costs. Rest assured: you will pay these costs after signing your employment contract. To speed up the processing of your file, we ask you to sign the contract before any payment.'
          },
          q4: {
            q: 'Can I work at my own pace?',
            a: 'Yes, as long as the production target is met within the 28-day cycle, you can organize your time as you wish.'
          },
          q5: {
            q: 'Is there training?',
            a: 'Absolutely. Each new partner receives a video training kit and a detailed manual to master the technical gestures.'
          },
          q6: {
            q: 'How am I paid?',
            a: 'Payments are made by bank transfer every month, after receipt and verification of your production.'
          }
        }
      },
      careers: {
        title: 'Join the Ediflor Program',
        desc: 'We are currently recruiting Labeling Agents to work from home. Enjoy flexible hours and attractive compensation.',
        job: {
          title: 'Bottle Labeling Agent',
          desc: 'We are looking for dynamic and serious people to join our team. This position allows you to work from the comfort of your home.',
          missions: 'Missions',
          missionsList: ['Labeling according to standards', 'Respecting deadlines', 'Autonomous management'],
          profil: 'Profile',
          profilList: ['Motivated and serious', 'Independent work', 'Sense of organization'],
          fullDesc: 'This position involves labeling cosmetic products and perfumes at home. We provide all the necessary equipment (labeler, products, labels). Our drivers deliver and collect the boxes every 28 days.',
          salaryLabel: 'Monthly Salary',
          salaryValue: 'Fixed Net Income',
          objectiveLabel: 'Objective',
          objectiveValue: '2,000 prod / 28d',
          badge: 'RECRUITMENT IN PROGRESS',
          quote: '"It\'s not difficult, we provide all the equipment."'
        },
        form: {
          title: 'Apply Now',
          successTitle: 'Application Sent!',
          success: 'Application Sent!',
          successDesc: 'Thank you for your interest. Our HR team will get back to you very soon.',
          successMsg: 'Thank you for your interest. Our HR team will get back to you very soon.',
          error: 'An error occurred. Please try again.',
          back: 'Back to site',
          nom: 'Last Name',
          prenom: 'First Name',
          email: 'Email',
          tel: 'Phone',
          poste: 'Desired Position',
          postePlaceholder: 'Select a position',
          message: 'Message / Motivation',
          messagePlaceholder: 'Tell us about yourself...',
          aiImprove: 'Improve with AI',
          aiImproving: 'Improving...',
          cv: 'Your CV (PDF, DOC)',
          cvPlaceholder: 'Click to upload or drag and drop',
          recaptcha: 'Protected by Google reCAPTCHA',
          submit: 'Send my application',
          submitting: 'Sending...',
          cancel: 'Cancel'
        }
      },
      contact: {
        badge: 'Contact Us',
        title: 'A question? A project? Let\'s talk today.',
        description: 'Our team is at your disposal to answer all your questions regarding our home packaging services.',
        phone: 'Phone',
        address: 'Address',
        form: {
          nom: 'Name',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Your message...',
          submit: 'Send message',
          submitting: 'Sending...',
          success: 'Message sent successfully!',
          another: 'Send another message'
        }
      },
      footer: {
        desc: 'Expert in facility management and business services. We create healthy and productive work environments.',
        nav: 'Navigation',
        links: {
          title: 'Navigation'
        },
        services: 'Services',
        contact: 'Contact',
        newsletter: {
          title: 'Newsletter',
          desc: 'Stay informed about our latest news and job offers.',
          success: 'Successfully subscribed!',
          placeholder: 'Your email...'
        },
        rights: '© 2026 EDIFLOR. All rights reserved.',
        legal: 'Legal Notice',
        privacy: 'Privacy Policy',
        cookies: 'Cookies'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        services: 'Reclutamiento',
        gallery: 'Galería',
        faq: 'Preguntas',
        careers: 'Reclutamiento',
        contact: 'Contacto',
        language: 'Idioma'
      },
      hero: {
        badge: 'Reclutamiento Abierto - 2026',
        title: 'Convierte tu tiempo libre en',
        titleAccent: 'ingresos garantizados',
        desc: 'Únete a EDIFLOR, líder en empaque a domicilio. Etiqueta productos de lujo desde casa con un salario neto fijo al mes.',
        cta: 'Aplicar Ahora',
        secondaryCta: 'Descubre nuestros servicios',
        stats: {
          salary: 'Ingresos Garantizados',
          salaryDesc: 'Salario neto fijo',
          partners: '500+',
          partnersDesc: 'Agentes activos',
          satisfaction: '98%',
          satisfactionDesc: 'Tasa de satisfacción',
          community: 'Únete a nuestra comunidad activa',
          quality: 'Calidad Garantizada',
          qualityDesc: 'Proceso Certificado ISO 9001',
          topRated: 'Mejor Calificado',
          topRatedDesc: 'Votado mejor programa de trabajo desde casa 2026'
        }
      },
      about: {
        badge: '¿Quiénes somos?',
        title: 'Excelencia en el servicio',
        titleAccent: 'a domicilio',
        desc1: 'Durante más de 10 años, EDIFLOR ha estado apoyando a las empresas en su logística fina mientras ofrece oportunidades de trabajo flexibles a cientos de personas.',
        desc2: 'Nuestra misión es simple: combinar el rigor industrial con la flexibilidad de trabajar desde casa. Proporcionamos todo el equipo necesario para que puedas tener éxito en tus misiones con total tranquilidad.',
        more: 'Más información sobre nuestra historia',
        points: {
          p1: 'Equipo profesional proporcionado gratuitamente',
          p2: 'Capacitación integral y soporte continuo',
          p3: 'Logística de entrega y recogida incluida',
          p4: 'Contrato de trabajo estable y seguro'
        }
      },
      services: {
        badge: 'Nuestros Servicios y Empleos',
        title: 'Misiones simples, impacto',
        titleAccent: 'real',
        desc: 'Descubre los diferentes trabajos que ofrecemos a nuestros socios a domicilio. Cada misión se rige por un estricto protocolo de calidad.',
        apply: 'Aplicar ahora',
        items: {
          pliage: {
            title: 'Plegado de Folletos',
            desc: 'Creación y plegado de folletos publicitarios. Trabajo manual simple y repetitivo.'
          },
          pli: {
            title: 'Ensobrado',
            desc: 'Inserción de documentos en sobres. Ideal para trabajos de precisión.'
          },
          emballage: {
            title: 'Embalaje y Empaque',
            desc: 'Embalaje de productos ligeros y preparación de paquetes para el envío.'
          },
          etiquetage: {
            title: 'Etiquetado de Botellas',
            desc: 'Etiquetado de productos cosméticos y perfumes. Equipo proporcionado, ciclo de 28 días.'
          },
          livraison: {
            title: 'Entrega Simplificada',
            desc: 'Recogida semanal o mensual de tu producción directamente en tu domicilio.'
          }
        }
      },
      gallery: {
        badge: 'Ilustraciones Reales y Profesión',
        title: 'Trabajo en Imágenes',
        titleAccent: 'Imágenes',
        desc: 'Visualiza concretamente los pasos clave de tu futura misión: desde el etiquetado preciso hasta el riguroso control de calidad.',
        items: {
          etiquetage: {
            title: 'Proceso de Etiquetado',
            desc: 'Demostración real del uso de la etiquetadora manual.'
          },
          pliage: {
            title: 'Técnica de Plegado',
            desc: 'Video ilustrativo que muestra el plegado de folletos.'
          },
          qualite: {
            title: 'Control de Calidad',
            desc: 'Verificación de alineación y limpieza.'
          },
          logistique: {
            title: 'Logística',
            desc: 'Proceso de recogida y entrega.'
          },
          materiel: {
            title: 'Equipo Pro',
            desc: 'Aplicador de etiquetas de sobremesa.'
          },
          fini: {
            title: 'Producción Terminada',
            desc: 'Lote de botellas de cosméticos etiquetadas.'
          }
        },
        formation: {
          title: 'Capacitación incluida',
          desc: 'No solo entregamos las máquinas. Cada socio recibe una capacitación completa en video y un manual de usuario detallado para dominar el etiquetado y el empaque en pocas horas.'
        }
      },
      faq: {
        badge: 'Preguntas Frecuentes',
        title: 'Todo lo que necesitas',
        titleAccent: 'saber',
        desc: '¿Tienes preguntas sobre cómo funciona EDIFLOR? Encuentra aquí las respuestas a las preguntas más comunes de nuestros futuros socios.',
        items: {
          q1: {
            q: '¿Cómo funciona el reclutamiento?',
            a: 'El proceso es simple: aplicas a través de nuestro formulario, revisamos tu perfil y, si eres seleccionado, te enviamos el equipo y una capacitación completa.'
          },
          q2: {
            q: '¿Tengo que pagar por el equipo?',
            a: 'No, EDIFLOR proporciona todo el equipo necesario (etiquetadora, productos, etiquetas).'
          },
          q3: {
            q: '¿Cómo funciona la entrega?',
            a: 'Nos gustaría señalar que la empresa tiene ciertos requisitos relacionados con los costos reales de entrega de la máquina (distancia, peso, manipulación) y obligaciones legales (entrega con el manual de usuario). La empresa requiere que los nuevos empleados cubran los costos de entrega. Puede estar seguro de que pagará estos costos después de firmar su contrato de trabajo. Para acelerar el procesamiento de su expediente, le pedimos que firme el contrato antes de cualquier pago.'
          },
          q4: {
            q: '¿Puedo trabajar a mi propio ritmo?',
            a: 'Sí, siempre que se cumpla el objetivo de producción dentro del ciclo de 28 días, puedes organizar tu tiempo como desees.'
          },
          q5: {
            q: '¿Hay capacitación?',
            a: 'Absolutamente. Cada nuevo socio recibe un kit de capacitación en video y un manual detallado para dominar los gestos técnicos.'
          },
          q6: {
            q: '¿Cómo se me paga?',
            a: 'Los pagos se realizan mediante transferencia bancaria todos los meses, tras la recepción y verificación de su producción.'
          }
        }
      },
      testimonials: {
        badge: 'Testimonios',
        title: 'Lo que dicen nuestros',
        titleAccent: 'socios',
        desc: 'Descubre los comentarios de quienes se han unido a la aventura EDIFLOR.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Agente de Etiquetado, Lyon',
            quote: 'Ediflor cambió mi vida. La flexibilidad de trabajar desde casa me permite pasar más tiempo con mi familia mientras tengo un ingreso estable.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Agente de Empaque, París',
            quote: 'El equipo es fácil de usar y el soporte siempre está ahí cuando lo necesito. Recomiendo mucho este programa.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Agente de Producción, Marsella',
            quote: 'Un servicio serio y profesional. Los pagos siempre llegan a tiempo y los objetivos son totalmente alcanzables.'
          }
        }
      },
      careers: {
        title: 'Únete al Programa Ediflor',
        desc: 'Actualmente estamos reclutando Agentes de Etiquetado para trabajar desde casa. Disfruta de horarios flexibles y una compensación atractiva.',
        job: {
          title: 'Agente de Etiquetado de Botellas',
          desc: 'Buscamos personas dinámicas y serias para unirse a nuestro equipo. Esta posición te permite trabajar desde la comodidad de tu hogar.',
          missions: 'Misiones',
          missionsList: ['Etiquetado según estándares', 'Respeto de plazos', 'Gestión autónoma'],
          profil: 'Perfil',
          profilList: ['Motivado y serio', 'Trabajo independiente', 'Sentido de la organización'],
          fullDesc: 'Esta posición implica etiquetar productos cosméticos y perfumes en casa. Proporcionamos todo el equipo necesario (etiquetadora, productos, etiquetas). Nuestros conductores entregan y recogen las cajas cada 28 días.',
          salaryLabel: 'Salario Mensual',
          salaryValue: 'Ingresos Netos Fijos',
          objectiveLabel: 'Objetivo',
          objectiveValue: '2.000 prod / 28d',
          badge: 'RECLUTAMIENTO EN CURSO',
          quote: '"No es difícil, proporcionamos todo el equipo."'
        },
        form: {
          title: 'Aplicar Ahora',
          successTitle: '¡Solicitud Enviada!',
          success: '¡Solicitud Enviada!',
          successDesc: 'Gracias por tu interés. Nuestro equipo de RR.HH. se pondrá en contacto contigo muy pronto.',
          successMsg: 'Gracias por tu interés. Nuestro equipo de RR.HH. se pondrá en contacto contigo muy pronto.',
          error: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
          back: 'Volver al sitio',
          nom: 'Apellido',
          prenom: 'Nombre',
          email: 'Correo electrónico',
          tel: 'Teléfono',
          poste: 'Puesto deseado',
          postePlaceholder: 'Selecciona un puesto',
          message: 'Mensaje / Motivación',
          messagePlaceholder: 'Cuéntanos sobre ti...',
          aiImprove: 'Mejorar con IA',
          aiImproving: 'Mejorando...',
          cv: 'Tu CV (PDF, DOC)',
          cvPlaceholder: 'Haz clic para subir o arrastra y suelta',
          recaptcha: 'Protegido por Google reCAPTCHA',
          submit: 'Enviar mi solicitud',
          submitting: 'Enviando...',
          cancel: 'Cancelar'
        }
      },
      contact: {
        badge: 'Contáctanos',
        title: '¿Una pregunta? ¿Un proyecto? Hablemos hoy.',
        description: 'Nuestro equipo está a tu disposición para responder a todas tus preguntas sobre nuestros servicios de empaque a domicilio.',
        phone: 'Teléfono',
        address: 'Dirección',
        form: {
          nom: 'Nombre',
          name: 'Nombre',
          email: 'Correo electrónico',
          subject: 'Asunto',
          message: 'Tu mensaje...',
          submit: 'Enviar mensaje',
          submitting: 'Enviando...',
          success: '¡Mensaje enviado con éxito!',
          another: 'Enviar otro mensaje'
        },
        legal: {
          title: 'Información Legal',
          activity: 'Actividad',
          activityValue: 'Imprenta y Comercio al por mayor',
          creation: 'Creación',
          creationValue: '15/04/1998',
          manager: 'Gerente',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Capital Social',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET (sede)',
          form: 'Forma jurídica',
          formValue: 'SARL, sociedad de responsabilidad limitada',
          tva: 'Número de IVA',
          rcs: 'Número RCS'
        }
      },
      footer: {
        desc: 'Experto en gestión de instalaciones y servicios empresariales. Creamos entornos de trabajo saludables y productivos.',
        nav: 'Navegación',
        links: {
          title: 'Navegación'
        },
        services: 'Servicios',
        contact: 'Contacto',
        newsletter: {
          title: 'Boletín informativo',
          desc: 'Mantente informado sobre nuestras últimas noticias y ofertas de trabajo.',
          success: '¡Suscrito con éxito!',
          placeholder: 'Tu correo electrónico...'
        },
        rights: '© 2026 EDIFLOR. Todos los derechos reservados.',
        legal: 'Aviso Legal',
        privacy: 'Política de Privacidad',
        cookies: 'Cookies'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über uns',
        services: 'Rekrutierung',
        gallery: 'Galerie',
        faq: 'FAQ',
        careers: 'Rekrutierung',
        contact: 'Kontakt',
        language: 'Sprache'
      },
      hero: {
        badge: 'Offene Rekrutierung - 2026',
        title: 'Verwandeln Sie Ihre Freizeit in',
        titleAccent: 'garantiertes Einkommen',
        desc: 'Werden Sie Teil von EDIFLOR, dem Marktführer für Heimverpackungen. Etikettieren Sie Luxusprodukte von zu Hause aus mit einem festen Nettogehalt pro Monat.',
        cta: 'Jetzt bewerben',
        secondaryCta: 'Unsere Leistungen entdecken',
        stats: {
          salary: 'Garantiertes Einkommen',
          salaryDesc: 'Festes Nettogehalt',
          partners: '500+',
          partnersDesc: 'Aktive Agenten',
          satisfaction: '98%',
          satisfactionDesc: 'Zufriedenheitsrate',
          community: 'Treten Sie unserer aktiven Community bei',
          quality: 'Garantierte Qualität',
          qualityDesc: 'ISO 9001 zertifizierter Prozess',
          topRated: 'Bestbewertet',
          topRatedDesc: 'Zum besten Home-Office-Programm 2026 gewählt'
        }
      },
      about: {
        badge: 'Wer sind wir?',
        title: 'Exzellenz im',
        titleAccent: 'Heimservice',
        desc1: 'Seit über 10 years unterstützt EDIFLOR Unternehmen bei ihrer Feinlogistik und bietet gleichzeitig Hunderten von Einzelpersonen flexible Arbeitsmöglichkeiten.',
        desc2: 'Unsere Mission ist einfach: industrielle Strenge mit der Flexibilität der Arbeit von zu Hause aus zu verbinden. Wir stellen alle notwendigen Geräte zur Verfügung, damit Sie Ihre Aufgaben in aller Ruhe erfolgreich bewältigen können.',
        more: 'Erfahren Sie mehr über unsere Geschichte',
        points: {
          p1: 'Professionelle Ausrüstung kostenlos zur Verfügung gestellt',
          p2: 'Umfassende Schulung und kontinuierliche Unterstützung',
          p3: 'Liefer- und Abhollogistik inklusive',
          p4: 'Stabiler und sicherer Arbeitsvertrag'
        }
      },
      services: {
        badge: 'Unsere Dienstleistungen & Jobs',
        title: 'Einfache Aufgaben, echte',
        titleAccent: 'Wirkung',
        desc: 'Entdecken Sie die verschiedenen Jobs, die wir unseren Partnern zu Hause anbieten. Jede Mission unterliegt einem strengen Qualitätsprotokoll.',
        apply: 'Jetzt bewerben',
        items: {
          pliage: {
            title: 'Flyer falten',
            desc: 'Erstellung und Faltung von Werbeflyern. Einfache und repetitive manuelle Arbeit.'
          },
          pli: {
            title: 'Kuvertieren',
            desc: 'Einlegen von Dokumenten in Umschläge. Ideal für Präzisionsarbeit.'
          },
          emballage: {
            title: 'Verpackung & Packen',
            desc: 'Verpacken von Leichtprodukten und Vorbereitung von Paketen für den Versand.'
          },
          etiquetage: {
            title: 'Flaschenetikettierung',
            desc: 'Etikettierung von Kosmetikprodukten und Parfums. Ausrüstung wird gestellt, 28-Tage-Zyklus.'
          },
          livraison: {
            title: 'Vereinfachte Lieferung',
            desc: 'Wöchentliche oder monatliche Abholung Ihrer Produktion direkt bei Ihnen zu Hause.'
          }
        }
      },
      gallery: {
        badge: 'Echte Illustrationen & Beruf',
        title: 'Arbeit in Bildern',
        titleAccent: 'Bildern',
        desc: 'Visualisieren Sie konkret die wichtigsten Schritte Ihrer zukünftigen Mission: von der präzisen Etikettierung bis zur strengen Qualitätskontrolle.',
        items: {
          etiquetage: {
            title: 'Etikettierungsprozess',
            desc: 'Echte Demonstration der Verwendung des manuellen Etikettierers.'
          },
          pliage: {
            title: 'Falttechnik',
            desc: 'Illustrationsvideo zum Falten von Flyern.'
          },
          qualite: {
            title: 'Qualitätskontrolle',
            desc: 'Überprüfung von Ausrichtung und Sauberkeit.'
          },
          logistique: {
            title: 'Logistik',
            desc: 'Abhol- und Lieferprozess.'
          },
          materiel: {
            title: 'Profi-Ausrüstung',
            desc: 'Tisch-Etikettiergerät.'
          },
          fini: {
            title: 'Fertige Produktion',
            desc: 'Charge etikettierter Kosmetikflaschen.'
          }
        },
        formation: {
          title: 'Schulung inklusive',
          desc: 'Wir liefern nicht nur die Maschinen. Jeder Partner erhält eine umfassende Videoschulung und ein detailliertes Benutzerhandbuch, um das Etikettieren und Verpacken in nur wenigen Stunden zu meistern.'
        }
      },
      faq: {
        badge: 'Häufig gestellte Fragen',
        title: 'Alles, was Sie wissen',
        titleAccent: 'müssen',
        desc: 'Haben Sie Fragen zur Funktionsweise von EDIFLOR? Hier finden Sie Antworten auf die häufigsten Fragen unserer zukünftigen Partner.',
        items: {
          q1: {
            q: 'Wie funktioniert die Rekrutierung?',
            a: 'Der Prozess ist einfach: Sie bewerben sich über unser Formular, wir prüfen Ihr Profil und senden Ihnen bei Auswahl die Ausrüstung und eine umfassende Schulung zu.'
          },
          q2: {
            q: 'Muss ich für die Ausrüstung bezahlen?',
            a: 'Nein, EDIFLOR stellt alle notwendigen Geräte (Etikettierer, Produkte, Etiketten) zur Verfügung.'
          },
          q3: {
            q: 'Wie funktioniert die Lieferung?',
            a: 'Wir möchten darauf hinweisen, dass das Unternehmen bestimmte Anforderungen in Bezug auf die tatsächlichen Kosten der Maschinenlieferung (Entfernung, Gewicht, Handhabung) und gesetzliche Verpflichtungen (Lieferung mit dem Benutzerhandbuch) hat. Das Unternehmen verlangt von neuen Mitarbeitern, die Lieferkosten zu übernehmen. Sie können sicher sein, dass Sie diese Kosten nach Unterzeichnung Ihres Arbeitsvertrags bezahlen werden. Um die Bearbeitung Ihrer Akte zu beschleunigen, bitten wir Sie, den Vertrag vor jeder Zahlung zu unterzeichnen.'
          },
          q4: {
            q: 'Kann ich in meinem eigenen Tempo arbeiten?',
            a: 'Ja, solange das Produktionsziel innerhalb des 28-Tage-Zyklus erreicht wird, können Sie Ihre Zeit so einteilen, wie Sie möchten.'
          },
          q5: {
            q: 'Gibt es eine Schulung?',
            a: 'Absolut. Jeder neue Partner erhält ein Video-Schulungskit und ein detailliertes Handbuch, um die technischen Handgriffe zu meistern.'
          },
          q6: {
            q: 'Wie werde ich bezahlt?',
            a: 'Die Zahlungen erfolgen jeden Monat per Banküberweisung nach Erhalt und Überprüfung Ihrer Produktion.'
          }
        }
      },
      testimonials: {
        badge: 'Testimonials',
        title: 'Was unsere Partner',
        titleAccent: 'sagen',
        desc: 'Entdecken Sie das Feedback derer, die sich dem EDIFLOR-Abenteuer angeschlossen haben.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Etikettierer, Lyon',
            quote: 'Ediflor hat mein Leben verändert. Die Flexibilität der Arbeit von zu Hause aus ermöglicht es mir, mehr Zeit mit meiner Familie zu verbringen und gleichzeitig ein stabiles Einkommen zu haben.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Verpackungsmitarbeiterin, Paris',
            quote: 'Die Ausrüstung ist einfach zu bedienen und der Support ist immer da, wenn ich ihn brauche. Ich kann dieses Programm nur wärmstens empfehlen.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Produktionsmitarbeiter, Marseille',
            quote: 'Ein seriöser und professioneller Service. Die Zahlungen sind immer pünktlich und die Ziele sind absolut erreichbar.'
          }
        }
      },
      careers: {
        title: 'Werden Sie Teil des Ediflor-Programms',
        desc: 'Wir suchen derzeit Etikettierer für die Arbeit von zu Hause aus. Genießen Sie flexible Arbeitszeiten und eine attraktive Vergütung.',
        job: {
          title: 'Flaschenetikettierer',
          desc: 'Wir suchen dynamische und seriöse Menschen für unser Team. Diese Position ermöglicht es Ihnen, bequem von zu Hause aus zu arbeiten.',
          missions: 'Aufgaben',
          missionsList: ['Etikettierung nach Standards', 'Einhaltung von Fristen', 'Eigenverantwortliches Management'],
          profil: 'Profil',
          profilList: ['Motiviert und seriös', 'Selbstständiges Arbeiten', 'Organisationssinn'],
          fullDesc: 'Diese Position umfasst das Etikettieren von Kosmetikprodukten und Parfums zu Hause. Wir stellen alle notwendigen Geräte (Etikettierer, Produkte, Etiketten) zur Verfügung. Unsere Fahrer liefern und holen die Kartons alle 28 Tage ab.',
          salaryLabel: 'Monatliches Gehalt',
          salaryValue: 'Festes Nettoeinkommen',
          objectiveLabel: 'Ziel',
          objectiveValue: '2.000 Prod / 28 Tage',
          badge: 'REKRUTIERUNG LÄUFT',
          quote: '"Es ist nicht schwierig, wir stellen die gesamte Ausrüstung zur Verfügung."'
        },
        form: {
          title: 'Jetzt bewerben',
          successTitle: 'Bewerbung gesendet!',
          success: 'Bewerbung gesendet!',
          successDesc: 'Vielen Dank für Ihr Interesse. Unser HR-Team wird sich in Kürze bei Ihnen melden.',
          successMsg: 'Vielen Dank für Ihr Interesse. Unser HR-Team wird sich in Kürze bei Ihnen melden.',
          error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
          back: 'Zurück zur Seite',
          nom: 'Nachname',
          prenom: 'Vorname',
          email: 'E-Mail',
          tel: 'Telefon',
          poste: 'Gewünschte Position',
          postePlaceholder: 'Wählen Sie eine Position',
          message: 'Nachricht / Motivation',
          messagePlaceholder: 'Erzählen Sie uns etwas über sich...',
          aiImprove: 'Mit KI verbessern',
          aiImproving: 'Verbesserung...',
          cv: 'Ihr Lebenslauf (PDF, DOC)',
          cvPlaceholder: 'Klicken Sie zum Hochladen oder ziehen Sie ihn hierher',
          recaptcha: 'Geschützt durch Google reCAPTCHA',
          submit: 'Meine Bewerbung senden',
          submitting: 'Senden...',
          cancel: 'Abbrechen'
        }
      },
      contact: {
        badge: 'Kontaktieren Sie uns',
        title: 'Eine Frage? Ein Projekt? Lassen Sie uns heute sprechen.',
        description: 'Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu unseren Heimverpackungsdiensten zu beantworten.',
        phone: 'Telefon',
        address: 'Adresse',
        form: {
          nom: 'Name',
          name: 'Name',
          email: 'E-Mail',
          subject: 'Betreff',
          message: 'Ihre Nachricht...',
          submit: 'Nachricht senden',
          submitting: 'Senden...',
          success: 'Nachricht erfolgreich gesendet!',
          another: 'Weitere Nachricht senden'
        },
        legal: {
          title: 'Rechtliche Informationen',
          activity: 'Tätigkeit',
          activityValue: 'Druckerei und Großhandel',
          creation: 'Gründung',
          creationValue: '15.04.1998',
          manager: 'Geschäftsführer',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Stammkapital',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET (Hauptsitz)',
          form: 'Rechtsform',
          formValue: 'SARL, Gesellschaft mit beschränkter Haftung',
          tva: 'Umsatzsteuer-Identifikationsnummer',
          rcs: 'RCS-Nummer'
        }
      },
      footer: {
        desc: 'Experte für Facility Management und Business Services. Wir schaffen gesunde und produktive Arbeitsumgebungen.',
        nav: 'Navigation',
        links: {
          title: 'Navigation'
        },
        services: 'Dienstleistungen',
        contact: 'Kontakt',
        newsletter: {
          title: 'Newsletter',
          desc: 'Bleiben Sie über unsere neuesten Nachrichten und Stellenangebote informiert.',
          success: 'Erfolgreich abonniert!',
          placeholder: 'Ihre E-Mail...'
        },
        rights: '© 2026 EDIFLOR. Alle Rechte vorbehalten.',
        legal: 'Impressum',
        privacy: 'Datenschutz',
        cookies: 'Cookies'
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Chi Siamo',
        services: 'Recrutamento',
        gallery: 'Galleria',
        faq: 'FAQ',
        careers: 'Recrutamento',
        contact: 'Contatti',
        language: 'Lingua'
      },
      hero: {
        badge: 'Reclutamento Aperto - 2026',
        title: 'Trasforma il tuo tempo libero in',
        titleAccent: 'reddito garantito',
        desc: 'Unisciti a EDIFLOR, leader nel confezionamento a domicilio. Etichetta prodotti di lusso da casa con uno stipendio fisso netto al mese.',
        cta: 'Candidati Ora',
        secondaryCta: 'Scopri i nostri servizi',
        stats: {
          salary: 'Reddito Garantito',
          salaryDesc: 'Stipendio fisso netto',
          partners: '500+',
          partnersDesc: 'Agenti attivi',
          satisfaction: '98%',
          satisfactionDesc: 'Tasso di soddisfazione',
          community: 'Unisciti alla nostra comunità attiva',
          quality: 'Qualità Garantita',
          qualityDesc: 'Processo certificato ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Eletto miglior programma di lavoro da casa 2026'
        }
      },
      about: {
        badge: 'Chi siamo?',
        title: 'L\'eccellenza del servizio',
        titleAccent: 'a domicilio',
        desc1: 'Da oltre 10 anni, EDIFLOR supporta le aziende nella loro logistica fine offrendo opportunità di lavoro flessibili a centinaia di persone.',
        desc2: 'La nostra missione è semplice: unire il rigore industriale alla flessibilidade del lavoro da casa. Forniamo tutto il materiale necessario affinché tu possa riuscire nelle tue missioni in totale serenità.',
        more: 'Scopri di più sulla nostra storia',
        points: {
          p1: 'Materiale professionale fornito gratuitamente',
          p2: 'Formazione completa e supporto continuo',
          p3: 'Logistica di consegna e ritiro inclusa',
          p4: 'Contratto di lavoro stabile e sicuro'
        }
      },
      services: {
        badge: 'I Nostri Servizi e Professioni',
        title: 'Missioni semplici, un impatto',
        titleAccent: 'reale',
        desc: 'Scopri le diverse professioni che offriamo ai nostri partner a domicilio. Ogni missione è inquadrata da un rigoroso protocollo di qualità.',
        apply: 'Candidati ora',
        items: {
          pliage: {
            title: 'Piegatura Volantini',
            desc: 'Creazione e piegatura di volantini pubblicitari. Lavoro manuale semplice e ripetitivo.'
          },
          pli: {
            title: 'Imbustamento',
            desc: 'Inserimento di documenti in buste. Ideale per un lavoro di precisione.'
          },
          emballage: {
            title: 'Imballaggio e Confezionamento',
            desc: 'Confezionamento di prodotti leggeri e preparazione di pacchi per la spedizione.'
          },
          etiquetage: {
            title: 'Etichettatura Bottiglie',
            desc: 'Etichettatura di prodotti cosmetici e profumi. Materiale fornito, ciclo di 28 giorni.'
          },
          livraison: {
            title: 'Consegna Semplificata',
            desc: 'Ritiro settimanale o mensile della tua produzione direttamente a casa tua.'
          }
        }
      },
      gallery: {
        badge: 'Illustrazioni Reali e Professione',
        title: 'Il Lavoro in Immagini',
        titleAccent: 'Immagini',
        desc: 'Visualizza concretamente le fasi chiave della tua futura missione: dall\'etichettatura precisa al rigoroso controllo qualità.',
        items: {
          etiquetage: {
            title: 'Processo di Etichettatura',
            desc: 'Dimostrazione reale dell\'uso dell\'etichettatrice manuale.'
          },
          pliage: {
            title: 'Tecnica di Piegatura',
            desc: 'Video illustrativo che mostra la piegatura dei volantini.'
          },
          qualite: {
            title: 'Controllo Qualità',
            desc: 'Verifica dell\'allineamento e della pulizia.'
          },
          logistique: {
            title: 'Logistica',
            desc: 'Processo di ritiro e consegna.'
          },
          materiel: {
            title: 'Materiale Pro',
            desc: 'Applicatore di etichette da tavolo.'
          },
          fini: {
            title: 'Produzione Finita',
            desc: 'Lotto di flaconi cosmetici etichettati.'
          }
        },
        formation: {
          title: 'Formazione inclusa',
          desc: 'Non ci limitiamo a consegnarti le macchine. Ogni partner riceve una formazione video completa e un manuale d\'uso dettagliato per padroneggiare l\'etichettatura e l\'imballaggio in poche ore.'
        }
      },
      faq: {
        badge: 'Domande Frequenti',
        title: 'Tutto quello che devi',
        titleAccent: 'sapere',
        desc: 'Hai domande sul funzionamento di EDIFLOR? Trova qui le risposte alle domande più comuni dei nostri futuri partner.',
        items: {
          q1: {
            q: 'Come funziona il reclutamento?',
            a: 'Il processo è semplice: ti candidi tramite il nostro modulo, studiamo il tuo profilo e, se selezionato, ti inviamo il materiale e una formazione completa.'
          },
          q2: {
            q: 'Devo pagare per il materiale?',
            a: 'No, EDIFLOR fornisce tutto il materiale necessario (etichettatrice, prodotti, etichette).'
          },
          q3: {
            q: 'Come funziona la consegna?',
            a: 'Precisiamo che l\'azienda ha determinati requisiti relativi ai costi reali di consegna della macchina (distanza, peso, movimentazione) e agli obblighi di legge (consegna con manuale d\'uso). L\'azienda richiede che i nuovi dipendenti si facciano carico delle spese di consegna. Puoi stare tranquillo/a che pagherai queste spese dopo la firma del tuo contratto di lavoro. Per accelerare l\'elaborazione della tua pratica, ti chiediamo di firmare il contratto prima di qualsiasi pagamento.'
          },
          q4: {
            q: 'Posso lavorare al mio ritmo?',
            a: 'Sì, finché l\'obiettivo di produzione viene raggiunto nel ciclo di 28 giorni, organizzi il tuo tempo come preferisci.'
          },
          q5: {
            q: 'C\'è una formazione?',
            a: 'Assolutamente. Ogni nuovo partner riceve un kit de formazione video e un manuale dettagliato per padroneggiare i gesti tecnici.'
          },
          q6: {
            q: 'Come vengo pagato?',
            a: 'I pagamenti vengono effettuati tramite bonifico bancario ogni mese, dopo il ricevimento e la verifica della produzione.'
          }
        }
      },
      testimonials: {
        badge: 'Testimonianze',
        title: 'Cosa dicono i nostri',
        titleAccent: 'partner',
        desc: 'Scopri i feedback di chi si è unito all\'avventura EDIFLOR.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Agente di Etichettatura, Lione',
            quote: 'Ediflor ha cambiato la mia vita. La flessibilità del lavoro da casa mi permette di passare più tempo con la mia famiglia pur avendo un reddito stabile.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Agente di Confezionamento, Parigi',
            quote: 'Il materiale è semplice da usare e il supporto è sempre presente quando ne ho bisogno. Raccomando vivamente questo programma.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Agente di Produzione, Marsiglia',
            quote: 'Un servizio serio e professionale. I pagamenti sono sempre puntuali e gli obiettivi sono assolutamente raggiungibili.'
          }
        }
      },
      careers: {
        title: 'Unisciti al programma Ediflor',
        desc: 'Stiamo attualmente reclutando Agenti di Etichettatura per lavorare da casa. Goditi orari flessibili e una remunerazione interessante.',
        job: {
          title: 'Agente di Etichettatura Bottiglie',
          desc: 'Siamo alla ricerca di persone dinamiche e serie per unirsi al nostro team. Questa posizione ti permette di lavorare comodamente da casa tua.',
          missions: 'Missioni',
          missionsList: ['Etichettatura secondo standard', 'Rispetto delle scadenze', 'Gestione autonoma'],
          profil: 'Profilo',
          profilList: ['Motivato/a e serio/a', 'Lavoro indipendente', 'Senso dell\'organizzazione'],
          fullDesc: 'Questa posizione consiste nell\'etichettare prodotti cosmetici e profumi a domicilio. Forniamo tutto il materiale necessario (etichettatrice, prodotti, etichette). I nostri autisti ti consegnano e ritirano i cartoni ogni 28 giorni.',
          salaryLabel: 'Stipendio Mensile',
          salaryValue: 'Reddito Fisso Netto',
          objectiveLabel: 'Obiettivo',
          objectiveValue: '2.000 prod / 28g',
          badge: 'RECLUTAMENTO IN CORSO',
          quote: '"Non è difficile, forniamo tutto il materiale."'
        },
        form: {
          title: 'Candidati Ora',
          successTitle: 'Candidatura Inviata!',
          success: 'Candidatura Inviata!',
          successDesc: 'Grazie per il tuo interesse. Il nostro team HR ti ricontatterà molto presto.',
          successMsg: 'Grazie per il tuo interesse. Il nostro team HR ti ricontatterà molto presto.',
          error: 'Si è verificato un errore. Riprova.',
          back: 'Torna al sito',
          nom: 'Cognome',
          prenom: 'Nome',
          email: 'Email',
          tel: 'Telefono',
          poste: 'Posizione desiderata',
          postePlaceholder: 'Seleziona una posizione',
          message: 'Messaggio / Motivazione',
          messagePlaceholder: 'Parlaci di te...',
          aiImprove: 'Migliora con l\'IA',
          aiImproving: 'Miglioramento...',
          cv: 'Il tuo CV (PDF, DOC)',
          cvPlaceholder: 'Clicca per caricare o trascina e rilascia',
          recaptcha: 'Protetto da Google reCAPTCHA',
          submit: 'Invia la mia candidatura',
          submitting: 'Invio in corso...',
          cancel: 'Annulla'
        }
      },
      contact: {
        badge: 'Contattaci',
        title: 'Una domanda? Un progetto? Parliamone oggi.',
        description: 'Il nostro team è a tua disposizione per rispondere a tutte le tue domande sui nostri servizi di confezionamento a domicilio.',
        phone: 'Telefono',
        address: 'Indirizzo',
        form: {
          nom: 'Nome',
          name: 'Nome',
          email: 'Email',
          subject: 'Soggetto',
          message: 'Il tuo messaggio...',
          submit: 'Invia il messaggio',
          submitting: 'Invio in corso...',
          success: 'Messaggio inviato con successo!',
          another: 'Invia un altro messaggio'
        },
        legal: {
          title: 'Informazioni Legali',
          activity: 'Attività',
          activityValue: 'Stampa e Commercio all\'ingrosso',
          creation: 'Creazione',
          creationValue: '15/04/1998',
          manager: 'Dirigente',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Capitale Sociale',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET (sede)',
          form: 'Forma giuridica',
          formValue: 'SARL, società a responsabilità limitata',
          tva: 'Numero di Partita IVA',
          rcs: 'Numero RCS'
        }
      },
      footer: {
        desc: 'Esperto in facility management e servizi alle imprese. Creiamo ambienti di lavoro sani e produttivi.',
        nav: 'Navigazione',
        links: {
          title: 'Navigazione'
        },
        services: 'Servizi',
        contact: 'Contatto',
        newsletter: {
          title: 'Newsletter',
          desc: 'Rimani informato sulle nostre ultime novità e offerte di lavoro.',
          success: 'Iscritto con successo!',
          placeholder: 'La tua email...'
        },
        rights: '© 2026 EDIFLOR. Tutti i diritti riservati.',
        legal: 'Note Legali',
        privacy: 'Riservatezza',
        cookies: 'Cookie'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre Nós',
        services: 'Recrutamento',
        gallery: 'Galeria',
        faq: 'FAQ',
        careers: 'Recrutamento',
        contact: 'Contato',
        language: 'Idioma'
      },
      hero: {
        badge: 'Recrutamento Aberto - 2026',
        title: 'Transforme o seu tempo livre em',
        titleAccent: 'renda garantida',
        desc: 'Junte-se à EDIFLOR, líder em embalagem doméstica. Etiquete produtos de luxo em casa com um salário fixo líquido por mês.',
        cta: 'Candidatar-se Agora',
        secondaryCta: 'Descobrir nossos serviços',
        stats: {
          salary: 'Renda Garantida',
          salaryDesc: 'Salário fixo líquido',
          partners: '500+',
          partnersDesc: 'Agentes ativos',
          satisfaction: '98%',
          satisfactionDesc: 'Taxa de satisfação',
          community: 'Junte-se à nossa comunidade ativa',
          quality: 'Qualidade Garantida',
          qualityDesc: 'Processo certificado ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Eleito o melhor programa de trabalho em casa 2026'
        }
      },
      about: {
        badge: 'Quem somos?',
        title: 'A excelência do serviço',
        titleAccent: 'ao domicílio',
        desc1: 'Há mais de 10 anos, a EDIFLOR apoia as empresas na sua logística fina, oferecendo oportunidades de trabalho flexíveis a centenas de particulares.',
        desc2: 'Nossa missão é simples: aliar o rigor industrial à flexibilidade do trabalho em casa. Fornecemos todo o material necessário para que você possa ter sucesso em suas missões com total serenidade.',
        more: 'Saiba mais sobre nossa história',
        points: {
          p1: 'Material profissional fornecido gratuitamente',
          p2: 'Formação completa e acompanhamento contínuo',
          p3: 'Logística de entrega e recolha incluída',
          p4: 'Contrato de trabalho estável e seguro'
        }
      },
      services: {
        badge: 'Nossos Serviços e Profissões',
        title: 'Missões simples, um impacto',
        titleAccent: 'real',
        desc: 'Descubra as diferentes profissões que oferecemos aos nossos parceiros domésticos. Cada missão é enquadrada por um rigoroso protocolo de qualidade.',
        apply: 'Candidatar-se agora',
        items: {
          pliage: {
            title: 'Dobragem de Folhetos',
            desc: 'Criação e dobragem de folhetos publicitários. Trabalho manual simples e repetitivo.'
          },
          pli: {
            title: 'Envelopamento',
            desc: 'Inserção de documentos em envelopes. Ideal para um trabalho de precisão.'
          },
          emballage: {
            title: 'Embalagem e Acondicionamento',
            desc: 'Embalagem de produtos leves e preparação de encomendas para expedição.'
          },
          etiquetage: {
            title: 'Rotulagem de Garrafas',
            desc: 'Rotulagem de produtos cosméticos e perfumes. Material fornecido, ciclo de 28 dias.'
          },
          livraison: {
            title: 'Entrega Simplificada',
            desc: 'Recolha semanal ou mensal da sua produção diretamente em sua casa.'
          }
        }
      },
      gallery: {
        badge: 'Ilustrações Reais e Profissão',
        title: 'O Trabalho em Imagens',
        titleAccent: 'Imagens',
        desc: 'Visualize concretamente as etapas principais da sua futura missão: da rotulagem precisa ao rigoroso controle de qualidade.',
        items: {
          etiquetage: {
            title: 'Processo de Rotulagem',
            desc: 'Demonstração real do uso da rotuladora manual.'
          },
          pliage: {
            title: 'Técnica de Dobragem',
            desc: 'Vídeo ilustrativo mostrando a dobragem de folhetos.'
          },
          qualite: {
            title: 'Controle de Qualidade',
            desc: 'Verificação do alinhamento e da limpeza.'
          },
          logistique: {
            title: 'Logística',
            desc: 'Processo de recolha e entrega.'
          },
          materiel: {
            title: 'Material Pro',
            desc: 'Aplicador de etiquetas de mesa.'
          },
          fini: {
            title: 'Produção Finalizada',
            desc: 'Lote de frascos cosméticos rotulados.'
          }
        },
        formation: {
          title: 'Formação incluída',
          desc: 'Não nos limitamos a entregar as máquinas. Cada parceiro recebe uma formação completa em vídeo e um manual de utilização detalhado para dominar a rotulagem e a embalagem em poucas horas.'
        }
      },
      faq: {
        badge: 'Perguntas Frequentes',
        title: 'Tudo o que você precisa',
        titleAccent: 'saber',
        desc: 'Tem perguntas sobre o funcionamento da EDIFLOR? Encontre aqui as respostas às perguntas mais comuns dos nossos futuros parceiros.',
        items: {
          q1: {
            q: 'Como funciona o recrutamento?',
            a: 'O processo é simples: você candidata-se através do nosso formulário, estudamos o seu perfil e, se selecionado, enviamos o material e uma formação completa.'
          },
          q2: {
            q: 'Tenho de pagar pelo material?',
            a: 'Não, a EDIFLOR fornece todo o material necessário (rotuladora, produtos, etiquetas).'
          },
          q3: {
            q: 'Como funciona a entrega?',
            a: 'Gostaríamos de salientar que a empresa tem certos requisitos relacionados com os custos reais de entrega da máquina (distância, peso, manuseio) e obrigações legais (entrega com o manual de instruções). A empresa exige que os novos funcionários cubram os custos de entrega. Você pode ter a certeza de que pagará esses custos após a assinatura do seu contrato de trabalho. Para acelerar o processamento do seu processo, pedimos que assine o contrato antes de qualquer pagamento.'
          },
          q4: {
            q: 'Posso trabalhar no meu próprio ritmo?',
            a: 'Sim, desde que o objetivo de produção seja atingido no ciclo de 28 dias, você organiza o seu tempo como desejar.'
          },
          q5: {
            q: 'Existe uma formação?',
            a: 'Com certeza. Cada novo parceiro recebe um kit de formação em vídeo e un manual detalhado para dominar os gestos técnicos.'
          },
          q6: {
            q: 'Como sou pago?',
            a: 'Os pagamentos são efetuados por transferência bancária todos os meses, após a receção e verificação da sua produção.'
          }
        }
      },
      testimonials: {
        badge: 'Testemunhos',
        title: 'O que dizem os nossos',
        titleAccent: 'parceiros',
        desc: 'Descubra os comentários de quem se juntou à aventura EDIFLOR.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Agente de Rotulagem, Lyon',
            quote: 'Ediflor mudou a minha vida. A flexibilidade do trabalho em casa permite-me passar mais tempo com a minha família e ter um rendimento estável.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Agente de Embalagem, Paris',
            quote: 'O material é simples de usar e o suporte está sempre lá quando preciso. Recomendo vivamente este programa.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Agente de Produção, Marselha',
            quote: 'Um serviço sério e profissional. Os pagamentos são sempre pontuais e os objetivos são perfeitamente alcançáveis.'
          }
        }
      },
      careers: {
        title: 'Junte-se ao programa Ediflor',
        desc: 'Estamos atualmente a recrutar Agentes de Rotulagem para trabalhar a partir de casa. Desfrute de horários flexíveis e uma remuneração atrativa.',
        job: {
          title: 'Agente de Rotulagem de Garrafas',
          desc: 'Procuramos pessoas dinâmicas e sérias para se juntarem à nossa equipa. Este cargo permite-lhe trabalhar a partir do conforto da sua casa.',
          missions: 'Missões',
          missionsList: ['Rotulagem segundo normas', 'Respeito pelos prazos', 'Gestão autónoma'],
          profil: 'Perfil',
          profilList: ['Motivado(a) e sério(a)', 'Trabalho independente', 'Sentido de organização'],
          fullDesc: 'Este cargo consiste em rotular produtos cosméticos e perfumes em casa. Fornecemos todo o material necessário (rotuladora, produtos, etiquetas). Nossos motoristas entregam e recolhem as caixas a cada 28 dias.',
          salaryLabel: 'Salário Mensal',
          salaryValue: 'Renda Fixa Líquida',
          objectiveLabel: 'Objetivo',
          objectiveValue: '2.000 prod / 28d',
          badge: 'RECRUTAMENTO EM CURSO',
          quote: '"Não é difícil, fornecemos todo o material."'
        },
        form: {
          title: 'Candidatar-se Agora',
          successTitle: 'Candidatura Enviada!',
          success: 'Candidatura Enviada!',
          successDesc: 'Obrigado pelo seu interesse. Nossa equipa de RH entrará em contacto consigo muito em breve.',
          successMsg: 'Obrigado pelo seu interesse. Nossa equipa de RH entrará em contacto consigo muito em breve.',
          error: 'Ocorreu um erro. Por favor, tente novamente.',
          back: 'Voltar ao site',
          nom: 'Apelido',
          prenom: 'Nome',
          email: 'Email',
          tel: 'Telefone',
          poste: 'Cargo pretendido',
          postePlaceholder: 'Selecione um cargo',
          message: 'Mensagem / Motivação',
          messagePlaceholder: 'Fale-nos sobre si...',
          aiImprove: 'Melhorar com IA',
          aiImproving: 'A melhorar...',
          cv: 'Seu CV (PDF, DOC)',
          cvPlaceholder: 'Clique para carregar ou arraste e solte',
          recaptcha: 'Protegido por Google reCAPTCHA',
          submit: 'Enviar minha candidatura',
          submitting: 'A enviar...',
          cancel: 'Cancelar'
        }
      },
      contact: {
        badge: 'Contacte-nos',
        title: 'Uma pergunta? Um projeto? Vamos conversar hoje.',
        description: 'Nossa equipa está à sua disposição para responder a todas as suas perguntas sobre nossos serviços de embalagem doméstica.',
        phone: 'Telefone',
        address: 'Endereço',
        form: {
          nom: 'Nome',
          name: 'Nome',
          email: 'Email',
          subject: 'Assunto',
          message: 'Sua mensagem...',
          submit: 'Enviar mensagem',
          submitting: 'A enviar...',
          success: 'Mensagem enviada com sucesso!',
          another: 'Enviar outra mensagem'
        },
        legal: {
          title: 'Informações Jurídicas',
          activity: 'Atividade',
          activityValue: 'Impressão e Comércio por grosso',
          creation: 'Criação',
          creationValue: '15/04/1998',
          manager: 'Gerente',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Capital Social',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET (sede)',
          form: 'Forma jurídica',
          formValue: 'SARL, sociedade de responsabilidade limitada',
          tva: 'Número de IVA',
          rcs: 'Número RCS'
        }
      },
      footer: {
        desc: 'Especialista em gestão de instalações e serviços às empresas. Criamos ambientes de trabalho saudáveis e produtivos.',
        nav: 'Navegação',
        links: {
          title: 'Navegação'
        },
        services: 'Serviços',
        contact: 'Contacto',
        newsletter: {
          title: 'Newsletter',
          desc: 'Mantenha-se informado sobre nossas últimas notícias e ofertas de emprego.',
          success: 'Inscrito com sucesso!',
          placeholder: 'Seu email...'
        },
        rights: '© 2026 EDIFLOR. Todos os direitos reservados.',
        legal: 'Avisos Legais',
        privacy: 'Confidencialidade',
        cookies: 'Cookies'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        services: 'Рекрутинг',
        gallery: 'Галерея',
        faq: 'Часто задаваемые вопросы',
        careers: 'Рекрутинг',
        contact: 'Контакты',
        language: 'Язык'
      },
      hero: {
        badge: 'Открыт набор - 2026',
        title: 'Превратите свободное время в',
        titleAccent: 'гарантированный доход',
        desc: 'Присоединяйтесь к EDIFLOR, лидеру в области домашней упаковки. Маркируйте товары класса люкс на дому с фиксированной чистой зарплатой в месяц.',
        cta: 'Подать заявку',
        secondaryCta: 'Наши услуги',
        stats: {
          salary: 'Гарантированный доход',
          salaryDesc: 'Фиксированная чистая зарплата',
          partners: '500+',
          partnersDesc: 'Активные агенты',
          satisfaction: '98%',
          satisfactionDesc: 'Уровень удовлетворенности',
          community: 'Присоединяйтесь к нашему сообществу',
          quality: 'Гарантия качества',
          qualityDesc: 'Процесс сертифицирован по ISO 9001',
          topRated: 'Высший рейтинг',
          topRatedDesc: 'Лучшая программа работы на дому 2026'
        }
      },
      about: {
        badge: 'Кто мы?',
        title: 'Превосходство сервиса',
        titleAccent: 'на дому',
        desc1: 'Более 10 лет EDIFLOR помогает компаниям в логистике, предлагая гибкие возможности работы сотням людей.',
        desc2: 'Наша миссия проста: сочетать промышленную строгость с гибкостью работы на дому. Мы предоставляем все необходимое оборудование для успеха.',
        more: 'Узнать больше о нашей истории',
        points: {
          p1: 'Профессиональное оборудование бесплатно',
          p2: 'Полное обучение и поддержка',
          p3: 'Логистика доставки и забора включена',
          p4: 'Стабильный и безопасный контракт'
        }
      },
      services: {
        badge: 'Наши услуги и профессии',
        title: 'Простые задачи, реальный',
        titleAccent: 'эффект',
        desc: 'Узнайте о различных вакансиях, которые мы предлагаем. Каждая задача регулируется строгим протоколом качества.',
        apply: 'Подать заявку',
        items: {
          pliage: {
            title: 'Складывание листовок',
            desc: 'Создание и складывание рекламных листовок. Простая ручная работа.'
          },
          pli: {
            title: 'Упаковка в конверты',
            desc: 'Вкладывание документов в конверты. Идеально для точной работы.'
          },
          emballage: {
            title: 'Упаковка и фасовка',
            desc: 'Упаковка легких товаров и подготовка посылок к отправке.'
          },
          etiquetage: {
            title: 'Маркировка бутылок',
            desc: 'Маркировка косметики и парфюмерии. Оборудование предоставляется, цикл 28 дней.'
          },
          livraison: {
            title: 'Упрощенная доставка',
            desc: 'Еженедельный или ежемесячный забор продукции прямо у вас дома.'
          }
        }
      },
      gallery: {
        badge: 'Реальные иллюстрации и профессия',
        title: 'Работа в изображениях',
        titleAccent: 'Изображения',
        desc: 'Визуализируйте ключевые этапы вашей будущей работы: от точной маркировки до строгого контроля качества.',
        items: {
          etiquetage: {
            title: 'Процесс маркировки',
            desc: 'Демонстрация использования ручного этикетировщика.'
          },
          pliage: {
            title: 'Техника складывания',
            desc: 'Видео, демонстрирующее складывание листовок.'
          },
          qualite: {
            title: 'Контроль качества',
            desc: 'Проверка выравнивания и чистоты.'
          },
          logistique: {
            title: 'Логистика',
            desc: 'Процесс забора и доставки.'
          },
          materiel: {
            title: 'Проф. оборудование',
            desc: 'Настольный аппликатор этикеток.'
          },
          fini: {
            title: 'Готовая продукция',
            desc: 'Партия маркированных косметических флаконов.'
          }
        },
        formation: {
          title: 'Обучение включено',
          desc: 'Мы не просто доставляем машины. Каждый партнер получает полное видеообучение и руководство.'
        }
      },
      faq: {
        badge: 'Часто задаваемые вопросы',
        title: 'Все, что вам нужно',
        titleAccent: 'знать',
        desc: 'Есть вопросы о работе EDIFLOR? Здесь вы найдете ответы на самые частые вопросы.',
        items: {
          q1: {
            q: 'Как проходит набор?',
            a: 'Процесс прост: вы подаете заявку, мы изучаем профиль и отправляем оборудование.'
          },
          q2: {
            q: 'Нужно ли платить за оборудование?',
            a: 'Нет, EDIFLOR предоставляет все необходимое.'
          },
          q3: {
            q: 'Как проходит доставка?',
            a: 'У компании есть требования к стоимости доставки (вес, расстояние). Новые сотрудники оплачивают доставку, но только после подписания контракта.'
          },
          q4: {
            q: 'Могу ли я работать в своем темпе?',
            a: 'Да, главное — выполнить план за 28 дней.'
          },
          q5: {
            q: 'Есть ли обучение?',
            a: 'Да, каждый получает видеокурс и руководство.'
          },
          q6: {
            q: 'Как мне платят?',
            a: 'Платежи осуществляются банковским переводом каждый месяц после получения и проверки вашей продукции.'
          }
        }
      },
      testimonials: {
        badge: 'Отзывы',
        title: 'Что говорят наши',
        titleAccent: 'партнеры',
        desc: 'Узнайте об опыте тех, кто уже присоединился к EDIFLOR.',
        items: {
          t1: {
            name: 'Иван Петров',
            role: 'Агент по маркировке, Лион',
            quote: 'Ediflor изменил мою жизнь. Гибкость позволяет проводить больше времени с семьей.'
          },
          t2: {
            name: 'Мария Иванова',
            role: 'Агент по упаковке, Париж',
            quote: 'Оборудование простое, поддержка всегда на связи. Рекомендую.'
          },
          t3: {
            name: 'Томас Бернар',
            role: 'Агент по производству, Марсель',
            quote: 'Серьезный сервис. Выплаты вовремя, цели достижимы.'
          }
        }
      },
      careers: {
        title: 'Присоединяйтесь к Ediflor',
        desc: 'Мы набираем агентов по маркировке. Гибкий график и отличная оплата.',
        job: {
          title: 'Агент по маркировке бутылок',
          desc: 'Ищем серьезных людей. Работайте, не выходя из дома.',
          missions: 'Задачи',
          missionsList: ['Маркировка по стандартам', 'Соблюдение сроков', 'Автономия'],
          profil: 'Профиль',
          profilList: ['Мотивация', 'Независимость', 'Организованность'],
          fullDesc: 'Маркировка косметики на дому. Мы даем все оборудование. Забор каждые 28 дней.',
          salaryLabel: 'Зарплата в месяц',
          salaryValue: 'Фиксированный чистый доход',
          objectiveLabel: 'Цель',
          objectiveValue: '2 000 ед / 28 дн',
          badge: 'ИДЕТ НАБОР',
          quote: '"Это несложно, мы даем все необходимое."'
        },
        form: {
          title: 'Подать заявку',
          successTitle: 'Заявка отправлена!',
          success: 'Заявка отправлена!',
          successDesc: 'Спасибо. Мы скоро свяжемся с вами.',
          successMsg: 'Спасибо. Мы скоро свяжемся с вами.',
          error: 'Ошибка. Попробуйте снова.',
          back: 'На главную',
          nom: 'Фамилия',
          prenom: 'Имя',
          email: 'Email',
          tel: 'Телефон',
          poste: 'Вакансия',
          postePlaceholder: 'Выберите вакансию',
          message: 'Сообщение',
          messagePlaceholder: 'О себе...',
          aiImprove: 'Улучшить с ИИ',
          aiImproving: 'Улучшение...',
          cv: 'Ваше резюме',
          cvPlaceholder: 'Нажмите или перетащите файл',
          recaptcha: 'Защищено reCAPTCHA',
          submit: 'Отправить',
          submitting: 'Отправка...',
          cancel: 'Отмена'
        }
      },
      contact: {
        badge: 'Связаться с нами',
        title: 'Есть вопрос? Давайте обсудим.',
        desc: 'Наша команда готова ответить на все вопросы.',
        phone: 'Телефон',
        address: 'Адрес',
        form: {
          nom: 'Имя',
          name: 'Имя',
          email: 'Email',
          subject: 'Тема',
          message: 'Ваше сообщение...',
          submit: 'Отправить',
          submitting: 'Отправка...',
          success: 'Отправлено!',
          another: 'Еще одно сообщение'
        },
        legal: {
          title: 'Юридическая информация',
          activity: 'Деятельность',
          activityValue: 'Печать и оптовая торговля',
          creation: 'Создание',
          creationValue: '15.04.1998',
          manager: 'Директор',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Капитал',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Форма',
          formValue: 'SARL',
          tva: 'НДС',
          rcs: 'RCS'
        }
      },
      footer: {
        desc: 'Эксперт в управлении объектами. Создаем здоровую рабочую среду.',
        nav: 'Навигация',
        links: {
          title: 'Навигация'
        },
        services: 'Услуги',
        contact: 'Контакты',
        newsletter: {
          title: 'Рассылка',
          desc: 'Будьте в курсе новостей.',
          success: 'Подписка оформлена!',
          placeholder: 'Ваш email...'
        },
        rights: '© 2026 EDIFLOR. Все права защищены.',
        legal: 'Юридическая информация',
        privacy: 'Конфиденциальность',
        cookies: 'Cookies'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'توظيف',
        gallery: 'المعرض',
        faq: 'الأسئلة الشائعة',
        careers: 'توظيف',
        contact: 'اتصل بنا',
        language: 'اللغة'
      },
      hero: {
        badge: 'التوظيف مفتوح - 2026',
        title: 'حول وقت فراغك إلى',
        titleAccent: 'دخل مضمون',
        desc: 'انضم إلى EDIFLOR، الرائدة في التغليف المنزلي. قم بتسمية المنتجات الفاخرة من المنزل براتب ثابت صافي شهرياً.',
        cta: 'قدم الآن',
        secondaryCta: 'اكتشف خدماتنا',
        stats: {
          salary: 'دخل مضمون',
          salaryDesc: 'راتب ثابت صافي',
          partners: '+500',
          partnersDesc: 'وكلاء نشطون',
          satisfaction: '98%',
          satisfactionDesc: 'معدل الرضا',
          community: 'انضم إلى مجتمعنا النشط',
          quality: 'جودة مضمونة',
          qualityDesc: 'عملية معتمدة من ISO 9001',
          topRated: 'الأعلى تقييماً',
          topRatedDesc: 'تم التصويت كأفضل برنامج عمل من المنزل لعام 2026'
        }
      },
      about: {
        badge: 'من نحن؟',
        title: 'التميز في الخدمة',
        titleAccent: 'المنزلية',
        desc1: 'لأكثر من 10 سنوات، تدعم EDIFLOR الشركات في لوجستياتها الدقيقة مع توفير فرص عمل مرنة لمئات الأفراد.',
        desc2: 'مهمتنا بسيطة: الجمع بين الصرامة الصناعية ومرونة العمل من المنزل. نحن نوفر جميع المعدات اللازمة لنجاحك.',
        more: 'تعرف على المزيد عن تاريخنا',
        points: {
          p1: 'معدات احترافية مقدمة مجاناً',
          p2: 'تدريب شامل ودعم مستمر',
          p3: 'لوجستيات التوصيل والاستلام مشمولة',
          p4: 'عقد عمل مستقر وآمن'
        }
      },
      services: {
        badge: 'خدماتنا ومهننا',
        title: 'مهام بسيطة، تأثير',
        titleAccent: 'حقيقي',
        desc: 'اكتشف المهن المختلفة التي نقدمها لشركائنا في المنزل. كل مهمة مؤطرة ببروتوكول جودة صارم.',
        apply: 'قدم الآن',
        items: {
          pliage: {
            title: 'طي المنشورات',
            desc: 'إنشاء وطي المنشورات الإعلانية. عمل يدوي بسيط ومتكرر.'
          },
          pli: {
            title: 'وضع في أظرفة',
            desc: 'إدخال المستندات في الأظرفة. مثالي للعمل الدقيق.'
          },
          emballage: {
            title: 'التعبئة والتغليف',
            desc: 'تغليف المنتجات الخفيفة وإعداد الطرود للشحن.'
          },
          etiquetage: {
            title: 'تسمية الزجاجات',
            desc: 'تسمية منتجات التجميل والعطور. المعدات متوفرة، دورة 28 يوماً.'
          },
          livraison: {
            title: 'توصيل مبسط',
            desc: 'استلام أسبوعي أو شهري لإنتاجك مباشرة من منزلك.'
          }
        }
      },
      gallery: {
        badge: 'رسوم توضيحية حقيقية ومهنة',
        title: 'العمل بالصور',
        titleAccent: 'الصور',
        desc: 'تصور بشكل ملموس الخطوات الرئيسية لمهمتك المستقبلية: من التسمية الدقيقة إلى مراقبة الجودة الصارمة.',
        items: {
          etiquetage: {
            title: 'عملية التسمية',
            desc: 'عرض حقيقي لاستخدام آلة التسمية اليدوية.'
          },
          pliage: {
            title: 'تقنية الطي',
            desc: 'فيديو توضيحي يظهر طي المنشورات.'
          },
          qualite: {
            title: 'مراقبة الجودة',
            desc: 'التحقق من المحاذاة والنظافة.'
          },
          logistique: {
            title: 'الخدمات اللوجستية',
            desc: 'عملية الاستلام والتوصيل.'
          },
          materiel: {
            title: 'معدات احترافية',
            desc: 'آلة وضع الملصقات المكتبية.'
          },
          fini: {
            title: 'الإنتاج النهائي',
            desc: 'مجموعة من زجاجات التجميل المسماة.'
          }
        },
        formation: {
          title: 'التدريب مشمول',
          desc: 'نحن لا نكتفي بتسليم الآلات. يتلقى كل شريك تدريباً كاملاً عبر الفيديو ودليلاً مفصلاً.'
        }
      },
      faq: {
        badge: 'الأسئلة الشائعة',
        title: 'كل ما تحتاج',
        titleAccent: 'معرفته',
        desc: 'لديك أسئلة حول كيفية عمل EDIFLOR؟ تجد هنا الإجابات على الأسئلة الأكثر شيوعاً.',
        items: {
          q1: {
            q: 'كيف يعمل التوظيف؟',
            a: 'العملية بسيطة: تقدم عبر نموذجنا، ندرس ملفك، وإذا تم اختيارك، نرسل لك المعدات والتدريب.'
          },
          q2: {
            q: 'هل يجب أن أدفع ثمن المعدات؟',
            a: 'لا، EDIFLOR توفر جميع المعدات اللازمة.'
          },
          q3: {
            q: 'كيف يتم التوصيل؟',
            a: 'نود توضيح أن الشركة لديها متطلبات تتعلق بتكاليف التوصيل الحقيقية. يتحمل الموظفون الجدد تكاليف التوصيل بعد توقيع العقد.'
          },
          q4: {
            q: 'هل يمكنني العمل بالسرعة التي تناسبني؟',
            a: 'نعم، طالما تم تحقيق هدف الإنتاج في دورة 28 يوماً.'
          },
          q5: {
            q: 'هل هناك تدريب؟',
            a: 'بالتأكيد. يتلقى كل شريك جديد مجموعة تدريب فيديو ودليلاً مفصلاً.'
          },
          q6: {
            q: 'كيف يتم الدفع لي؟',
            a: 'يتم الدفع عن طريق التحويل المصرفي كل شهر، بعد استلام وفحص إنتاجك.'
          }
        }
      },
      testimonials: {
        badge: 'شهادات',
        title: 'ماذا يقول',
        titleAccent: 'شركاؤنا',
        desc: 'اكتشف تجارب أولئك الذين انضموا إلى مغامرة EDIFLOR.',
        items: {
          t1: {
            name: 'جان دوبونت',
            role: 'وكيل تسمية، ليون',
            quote: 'غيرت Ediflor حياتي. تتيح لي مرونة العمل من المنزل قضاء المزيد من الوقت مع عائلتي.'
          },
          t2: {
            name: 'ماري لوران',
            role: 'وكيلة تعبئة، باريس',
            quote: 'المعدات سهلة الاستخدام والدعم موجود دائماً. أوصي بهذا البرنامج بشدة.'
          },
          t3: {
            name: 'توماس برنارد',
            role: 'وكيل إنتاج، مارسيليا',
            quote: 'خدمة جادة واحترافية. المدفوعات دائماً في وقتها والأهداف قابلة للتحقيق.'
          }
        }
      },
      careers: {
        title: 'انضم إلى برنامج Ediflor',
        desc: 'نحن نوظف حالياً وكلاء تسمية للعمل من المنزل. استمتع بساعات عمل مرنة وتعويضات مغرية.',
        job: {
          title: 'وكيل تسمية زجاجات',
          desc: 'نحن نبحث عن أشخاص جادين للانضمام إلى فريقنا. يتيح لك هذا المنصب العمل من منزلك.',
          missions: 'المهام',
          missionsList: ['التسمية وفق المعايير', 'احترام المواعيد', 'الإدارة الذاتية'],
          profil: 'الملف الشخصي',
          profilList: ['متحمس وجاد', 'العمل المستقل', 'حس التنظيم'],
          fullDesc: 'تسمية منتجات التجميل في المنزل. نحن نوفر كل المعدات. الاستلام كل 28 يوماً.',
          salaryLabel: 'الراتب الشهري',
          salaryValue: 'دخل صافي ثابت',
          objectiveLabel: 'الهدف',
          objectiveValue: '2000 وحدة / 28 يوم',
          badge: 'التوظيف جارٍ',
          quote: '"الأمر ليس صعباً، نحن نوفر كل شيء."'
        },
        form: {
          title: 'قدم الآن',
          successTitle: 'تم إرسال الطلب!',
          success: 'تم إرسال الطلب!',
          successDesc: 'شكراً لاهتمامك. سيتصل بك فريقنا قريباً.',
          successMsg: 'شكراً لاهتمامك. سيتصل بك فريقنا قريباً.',
          error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
          back: 'العودة للموقع',
          nom: 'اللقب',
          prenom: 'الاسم الأول',
          email: 'البريد الإلكتروني',
          tel: 'الهاتف',
          poste: 'المنصب المطلوب',
          postePlaceholder: 'اختر منصباً',
          message: 'الرسالة / الدافع',
          messagePlaceholder: 'أخبرنا عن نفسك...',
          aiImprove: 'تحسين بالذكاء الاصطناعي',
          aiImproving: 'جاري التحسين...',
          cv: 'سيرتك الذاتية',
          cvPlaceholder: 'انقر للتحميل أو اسحب وأفلت',
          recaptcha: 'محمي بواسطة reCAPTCHA',
          submit: 'إرسال طلبي',
          submitting: 'جاري الإرسال...',
          cancel: 'إلغاء'
        }
      },
      contact: {
        badge: 'اتصل بنا',
        title: 'سؤال؟ مشروع؟ لنتحدث اليوم.',
        desc: 'فريقنا في خدمتك للإجابة على جميع تساؤلاتك.',
        phone: 'الهاتف',
        address: 'العنوان',
        form: {
          nom: 'الاسم',
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'رسالتك...',
          submit: 'إرسال الرسالة',
          submitting: 'جاري الإرسال...',
          success: 'تم الإرسال بنجاح!',
          another: 'إرسال رسالة أخرى'
        },
        legal: {
          title: 'معلومات قانونية',
          activity: 'النشاط',
          activityValue: 'الطباعة وتجارة الجملة',
          creation: 'التأسيس',
          creationValue: '15/04/1998',
          manager: 'المدير',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'رأس المال',
          capitalValue: '400,000.00 يورو',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'الشكل القانوني',
          formValue: 'SARL',
          tva: 'رقم الضريبة',
          rcs: 'رقم RCS'
        }
      },
      footer: {
        desc: 'خبير في إدارة المرافق وخدمات الأعمال. نخلق بيئات عمل صحية ومنتجة.',
        nav: 'التنقل',
        links: {
          title: 'التنقل'
        },
        services: 'الخدمات',
        contact: 'اتصل بنا',
        newsletter: {
          title: 'النشرة الإخبارية',
          desc: 'ابق على اطلاع بآخر أخبارنا وعروض العمل.',
          success: 'تم الاشتراك بنجاح!',
          placeholder: 'بريدك الإلكتروني...'
        },
        rights: '© 2026 EDIFLOR. جميع الحقوق محفوظة.',
        legal: 'إشعار قانوني',
        privacy: 'الخصوصية',
        cookies: 'ملفات تعريف الارتباط'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        services: '招聘',
        gallery: '图库',
        faq: '常见问题',
        careers: '招聘',
        contact: '联系我们',
        language: '语言'
      },
      hero: {
        badge: '2026年招聘中',
        title: '将您的空闲时间转化为',
        titleAccent: '保障收入',
        desc: '加入家居包装领域的领导者 EDIFLOR。在家为奢侈品贴标，每月固定净工资。',
        cta: '立即申请',
        secondaryCta: '我们的服务',
        stats: {
          salary: '保障收入',
          salaryDesc: '固定净工资',
          partners: '500+',
          partnersDesc: '活跃代理',
          satisfaction: '98%',
          satisfactionDesc: '满意度',
          community: '加入我们的社区',
          quality: '质量保证',
          qualityDesc: 'ISO 9001 认证流程',
          topRated: '最高评价',
          topRatedDesc: '2026年最佳居家工作计划'
        }
      },
      about: {
        badge: '我们是谁？',
        title: '卓越的',
        titleAccent: '居家服务',
        desc1: '10多年来，EDIFLOR 一直在精细物流方面支持企业，同时为数百人提供灵活的工作机会。',
        desc2: '我们的使命很简单：将工业严谨性与居家工作的灵活性相结合。我们提供成功所需的所有设备。',
        more: '了解更多关于我们的历史',
        points: {
          p1: '免费提供专业设备',
          p2: '全面的培训和支持',
          p3: '包含送货和取货物流',
          p4: '稳定安全的合同'
        }
      },
      services: {
        badge: '我们的服务和职业',
        title: '简单的任务，真实的',
        titleAccent: '影响',
        desc: '探索我们为居家合作伙伴提供的各种职业。每项任务都遵循严格的质量协议。',
        apply: '立即申请',
        items: {
          pliage: {
            title: '传单折叠',
            desc: '制作和折叠广告传单。简单的重复性手工工作。'
          },
          pli: {
            title: '信封封装',
            desc: '将文件装入信封。非常适合精细工作。'
          },
          emballage: {
            title: '包装和装箱',
            desc: '包装轻型产品并准备发货包裹。'
          },
          etiquetage: {
            title: '瓶子贴标',
            desc: '为化妆品和香水贴标。提供设备，28天一个周期。'
          },
          livraison: {
            title: '简化交付',
            desc: '每周或每月直接从您家中取走您的成果。'
          }
        }
      },
      gallery: {
        badge: '真实插图和职业',
        title: '工作实景',
        titleAccent: '图片',
        desc: '直观地了解您未来工作的关键步骤：从精确贴标到严格的质量控制。',
        items: {
          etiquetage: {
            title: '贴标过程',
            desc: '手动贴标机的使用演示。'
          },
          pliage: {
            title: '折叠技术',
            desc: '展示传单折叠的视频。'
          },
          qualite: {
            title: '质量控制',
            desc: '检查对齐和清洁度。'
          },
          logistique: {
            title: '物流',
            desc: '取货和送货过程。'
          },
          materiel: {
            title: '专业设备',
            desc: '桌面标签涂布机。'
          },
          fini: {
            title: '成品',
            desc: '一批贴好标签的化妆品瓶。'
          }
        },
        formation: {
          title: '包含培训',
          desc: '我们不仅仅是交付机器。每位合作伙伴都会收到完整的视频培训和详细指南。'
        }
      },
      faq: {
        badge: '常见问题',
        title: '您需要知道的',
        titleAccent: '一切',
        desc: '对 EDIFLOR 的运作有疑问？在这里您可以找到最常见问题的答案。',
        items: {
          q1: {
            q: '招聘如何运作？',
            a: '过程很简单：通过我们的表格申请，我们审核您的资料，如果选中，我们将发送设备和培训。'
          },
          q2: {
            q: '我 need 支付设备费用吗？',
            a: '不需要，EDIFLOR 提供所有必要的设备。'
          },
          q3: {
            q: '如何交付？',
            a: '公司对实际送货成本（重量、距离）有要求。新员工在签署合同后承担送货费用。'
          },
          q4: {
            q: '我可以按照自己的节奏工作吗？',
            a: '可以，只要在28天的周期内达到生产目标即可。'
          },
          q5: {
            q: '有培训吗？',
            a: '当然有。每位新合作伙伴都会收到视频培训包和详细手册。'
          },
          q6: {
            q: '我如何获得报酬？',
            a: '每月在收到并核实您的生产成果后，通过银行转账支付报酬。'
          }
        }
      },
      testimonials: {
        badge: '证言',
        title: '我们的合作伙伴',
        titleAccent: '怎么说',
        desc: '探索那些已经加入 EDIFLOR 冒险的人们的经历。',
        items: {
          t1: {
            name: '张伟',
            role: '贴标代理，里昂',
            quote: 'Ediflor 改变了我的生活。居家工作的灵活性让我有更多时间陪伴家人。'
          },
          t2: {
            name: '王芳',
            role: '包装代理，巴黎',
            quote: '设备使用简单，支持团队随时待命。我强烈推荐这个计划。'
          },
          t3: {
            name: '李强',
            role: '生产代理，马赛',
            quote: '严肃且专业的服务。付款准时，目标可达成。'
          }
        }
      },
      careers: {
        title: '加入 Ediflor 计划',
        desc: '我们目前正在招聘居家贴标代理。享受灵活的工作时间和诱人的报酬。',
        job: {
          title: '瓶子贴标代理',
          desc: '我们正在寻找认真的人加入我们的团队。这个职位允许您在舒适的家中工作。',
          missions: '任务',
          missionsList: ['按标准贴标', '遵守截止日期', '自主管理'],
          profil: '个人资料',
          profilList: ['积极认真', '独立工作', '有组织性'],
          fullDesc: '在家为化妆品贴标。我们提供所有设备。每28天取货一次。',
          salaryLabel: '月薪',
          salaryValue: '固定净收入',
          objectiveLabel: '目标',
          objectiveValue: '2,000 单位 / 28 天',
          badge: '招聘中',
          quote: '"这并不难，我们提供一切所需。"'
        },
        form: {
          title: '立即申请',
          successTitle: '申请已发送！',
          success: '申请已发送！',
          successDesc: '感谢您的关注。我们的团队将很快与您联系。',
          successMsg: '感谢您的关注。我们的团队将很快与您联系。',
          error: '发生错误。请重试。',
          back: '返回首页',
          nom: '姓',
          prenom: '名',
          email: '电子邮件',
          tel: '电话',
          poste: '申请职位',
          postePlaceholder: '选择职位',
          message: '留言 / 动机',
          messagePlaceholder: '向我们介绍一下您自己...',
          aiImprove: '使用 AI 改进',
          aiImproving: '正在改进...',
          cv: '您的简历',
          cvPlaceholder: '点击上传或拖放文件',
          recaptcha: '受 reCAPTCHA 保护',
          submit: '发送我的申请',
          submitting: '正在发送...',
          cancel: '取消'
        }
      },
      contact: {
        badge: '联系我们',
        title: '有疑问？有项目？今天就聊聊。',
        desc: '我们的团队随时为您解答所有疑问。',
        phone: '电话',
        address: '地址',
        form: {
          nom: '姓名',
          name: '姓名',
          email: '电子邮件',
          subject: '主题',
          message: '您的留言...',
          submit: '发送信息',
          submitting: '正在发送...',
          success: '发送成功！',
          another: '发送另一条信息'
        },
        legal: {
          title: '法律信息',
          activity: '活动',
          activityValue: '印刷和批发贸易',
          creation: '成立日期',
          creationValue: '1998年4月15日',
          manager: '经理',
          managerValue: 'Legrand Patrick MENIS',
          capital: '资本',
          capitalValue: '400,000.00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: '法律形式',
          formValue: 'SARL',
          tva: '增值税号',
          rcs: 'RCS 号码'
        }
      },
      footer: {
        desc: '设施管理和商业服务专家。我们创造健康且高效的工作环境。',
        nav: '导航',
        links: {
          title: '导航'
        },
        services: '服务',
        contact: '联系我们',
        newsletter: {
          title: '通讯',
          desc: '随时了解我们的最新消息和工作机会。',
          success: '订阅成功！',
          placeholder: '您的电子邮件...'
        },
        rights: '© 2026 EDIFLOR. 保留所有权利。',
        legal: '法律声明',
        privacy: '隐私政策',
        cookies: 'Cookies'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        about: '会社概要',
        services: '採用',
        gallery: 'ギャラリー',
        faq: 'よくある質問',
        careers: '採用',
        contact: 'お問い合わせ',
        language: '言語'
      },
      hero: {
        badge: '2026年度採用受付中',
        title: '空き時間を',
        titleAccent: '確実な収入に',
        desc: '在宅パッケージングのリーダー、EDIFLORに参加しませんか。高級品のラベル貼りを自宅で行い、月額固定給を実現。',
        cta: '今すぐ応募',
        secondaryCta: 'サービスを見る',
        stats: {
          salary: '確実な収入',
          salaryDesc: '固定給（手取り）',
          partners: '500+',
          partnersDesc: 'アクティブなエージェント',
          satisfaction: '98%',
          satisfactionDesc: '満足度',
          community: '私たちのコミュニティに参加',
          quality: '品質保証',
          qualityDesc: 'ISO 9001認証プロセス',
          topRated: '最高評価',
          topRatedDesc: '2026年度ベスト在宅ワークプログラム選出'
        }
      },
      about: {
        badge: 'EDIFLORについて',
        title: '在宅サービスの',
        titleAccent: '卓越性',
        desc1: '10年以上にわたり、EDIFLORは企業の精密物流をサポートすると同時に、何百人もの人々に柔軟な就業機会を提供してきました。',
        desc2: '私たちの使命はシンプルです。産業的な厳格さと在宅ワークの柔軟性を融合させることです。成功に必要なすべての機器を提供します。',
        more: '私たちの歩みをもっと知る',
        points: {
          p1: 'プロ仕様の機器を無料提供',
          p2: '包括的なトレーニングとサポート',
          p3: '配送・回収のロジスティクス込み',
          p4: '安定した安全な契約'
        }
      },
      services: {
        badge: 'サービスと職種',
        title: 'シンプルな作業で',
        titleAccent: '確かな成果',
        desc: '在宅パートナー向けの様々な職種をご紹介します。すべての作業は厳格な品質プロトコルに基づいています。',
        apply: '今すぐ応募',
        items: {
          pliage: {
            title: 'チラシ折り',
            desc: '広告チラシの作成と折り。シンプルな反復手作業です。'
          },
          pli: {
            title: '封入作業',
            desc: '書類を封筒に入れる作業。几帳面な方に最適です。'
          },
          emballage: {
            title: '梱包・包装',
            desc: '軽量製品の梱包と発送準備。'
          },
          etiquetage: {
            title: 'ボトルラベル貼り',
            desc: '化粧品や香水のラベル貼り。機器貸与、28日サイクル。'
          },
          livraison: {
            title: '簡素化された配送',
            desc: '週単位または月単位で、ご自宅まで成果物を回収に伺います。'
          }
        }
      },
      gallery: {
        badge: '実際の様子と仕事内容',
        title: '写真で見る',
        titleAccent: '仕事現場',
        desc: '正確なラベル貼りから厳格な品質管理まで、将来の仕事の主なステップを視覚的に確認してください。',
        items: {
          etiquetage: {
            title: 'ラベル貼りプロセス',
            desc: '手動ラベル貼り機の使用デモンストレーション。'
          },
          pliage: {
            title: '折り技術',
            desc: 'チラシ折りのデモンストレーション動画。'
          },
          qualite: {
            title: '品質管理',
            desc: '配置と清潔さのチェック。'
          },
          logistique: {
            title: 'ロジスティクス',
            desc: '回収と配送のプロセス。'
          },
          materiel: {
            title: 'プロ仕様の機器',
            desc: '卓上ラベルアプリケーター。'
          },
          fini: {
            title: '完成品',
            desc: 'ラベルが貼られた化粧品ボトルのロット。'
          }
        },
        formation: {
          title: 'トレーニング込み',
          desc: '機器を届けるだけではありません。各パートナーには完全なビデオトレーニングと詳細なガイドが提供されます。'
        }
      },
      faq: {
        badge: 'よくある質問',
        title: '知っておくべき',
        titleAccent: 'すべて',
        desc: 'EDIFLORの仕組みについて質問がありますか？よくある質問への回答をこちらにまとめました。',
        items: {
          q1: {
            q: '採用の流れは？',
            a: '流れはシンプルです。フォームから応募し、選考を経て、機器とトレーニング資料が送付されます。'
          },
          q2: {
            q: '機器の費用はかかりますか？',
            a: 'いいえ、EDIFLORが必要なすべての機器を提供します。'
          },
          q3: {
            q: '配送はどうなりますか？',
            a: '実際の配送コスト（重量、距離）に関する要件があります。新採用の方は契約署名後に配送費用を負担していただきます。'
          },
          q4: {
            q: '自分のペースで働けますか？',
            a: 'はい、28日間のサイクル内で生産目標を達成できれば問題ありません。'
          },
          q5: {
            q: 'トレーニングはありますか？',
            a: 'もちろんです。すべての新しいパートナーにビデオトレーニングパックと詳細なマニュアルが提供されます。'
          },
          q6: {
            q: '報酬はどのように支払われますか？',
            a: '報酬は、毎月、生産物の受け取りと確認の後に銀行振込で支払われます。'
          }
        }
      },
      testimonials: {
        badge: '体験談',
        title: 'パートナーの',
        titleAccent: '声',
        desc: 'EDIFLORに参加した人々の体験談をご紹介します。',
        items: {
          t1: {
            name: '佐藤 健',
            role: 'ラベル貼りエージェント、リヨン',
            quote: 'Ediflorは私の人生を変えました。在宅ワークの柔軟性のおかげで、家族と過ごす時間が増えました。'
          },
          t2: {
            name: '田中 美紀',
            role: '梱包エージェント、パリ',
            quote: '機器の操作は簡単で、サポートも充実しています。このプログラムを強くお勧めします。'
          },
          t3: {
            name: '鈴木 浩',
            role: '生産エージェント、マルセイユ',
            quote: '真面目でプロフェッショナルなサービスです。支払いは常に正確で、目標も達成可能です。'
          }
        }
      },
      careers: {
        title: 'Ediflorプログラムに参加する',
        desc: '現在、在宅ラベル貼りエージェントを募集しています。柔軟な勤務時間と魅力的な報酬を享受してください。',
        job: {
          title: 'ボトルラベル貼りエージェント',
          desc: '私たちのチームに加わってくれる真面目な方を募集しています。このポジションでは、自宅で快適に仕事ができます。',
          missions: '主な業務',
          missionsList: ['基準に沿ったラベル貼り', '納期厳守', '自己管理'],
          profil: '求める人物像',
          profilList: ['意欲的で真面目', '自律して働ける', '整理整頓ができる'],
          fullDesc: '自宅での化粧品ラベル貼り作業。すべての機器を提供します。28日ごとに回収。',
          salaryLabel: '月給',
          salaryValue: '固定手取り収入',
          objectiveLabel: '目標',
          objectiveValue: '2,000 ユニット / 28 日',
          badge: '募集中',
          quote: '"難しくありません。必要なものはすべて提供します。"'
        },
        form: {
          title: '今すぐ応募',
          successTitle: '応募完了！',
          success: '応募完了！',
          successDesc: 'ご応募ありがとうございます。担当者より近日中にご連絡いたします。',
          successMsg: 'ご応募ありがとうございます。担当者より近日中にご連絡いたします。',
          error: 'エラーが発生しました。もう一度お試しください。',
          back: 'ホームに戻る',
          nom: '姓',
          prenom: '名',
          email: 'メールアドレス',
          tel: '電話番号',
          poste: '希望職種',
          postePlaceholder: '職種を選択',
          message: 'メッセージ / 志望動機',
          messagePlaceholder: '自己紹介をお願いします...',
          aiImprove: 'AIでブラッシュアップ',
          aiImproving: 'ブラッシュアップ中...',
          cv: '履歴書',
          cvPlaceholder: 'クリックしてアップロード、またはドラッグ＆ドロップ',
          recaptcha: 'reCAPTCHAで保護されています',
          submit: '応募する',
          submitting: '送信中...',
          cancel: 'キャンセル'
        }
      },
      contact: {
        badge: 'お問い合わせ',
        title: 'ご質問やご相談はこちらから。',
        desc: '私たちのチームが、あらゆる疑問にお答えします。',
        phone: '電話',
        address: '住所',
        form: {
          nom: 'お名前',
          name: 'お名前',
          email: 'メールアドレス',
          subject: '件名',
          message: 'メッセージ...',
          submit: '送信する',
          submitting: '送信中...',
          success: '送信完了！',
          another: '別のメッセージを送る'
        },
        legal: {
          title: '法的情報',
          activity: '事業内容',
          activityValue: '印刷および卸売業',
          creation: '設立',
          creationValue: '1998年4月15日',
          manager: '代表者',
          managerValue: 'Legrand Patrick MENIS',
          capital: '資本金',
          capitalValue: '400,000.00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: '法的形態',
          formValue: 'SARL',
          tva: '付加価値税番号',
          rcs: 'RCS番号'
        }
      },
      footer: {
        desc: 'ファシリティマネジメントとビジネスサービスの専門家。健康的で生産的な職場環境を創造します。',
        nav: 'ナビゲーション',
        links: {
          title: 'ナビゲーション'
        },
        services: 'サービス',
        contact: 'お問い合わせ',
        newsletter: {
          title: 'ニュースレター',
          desc: '最新ニュースや採用情報をいち早くお届けします。',
          success: '購読ありがとうございます！',
          placeholder: 'メールアドレス...'
        },
        rights: '© 2026 EDIFLOR. All rights reserved.',
        legal: '法的通知',
        privacy: 'プライバシーポリシー',
        cookies: 'Cookies'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        about: 'हमारे बारे में',
        services: 'भर्ती',
        gallery: 'गैलरी',
        faq: 'सामान्य प्रश्न',
        careers: 'भर्ती',
        contact: 'संपर्क करें',
        language: 'भाषा'
      },
      hero: {
        badge: 'भर्ती खुली है - 2026',
        title: 'अपने खाली समय को बदलें',
        titleAccent: 'गारंटीकृत आय में',
        desc: 'होम पैकेजिंग में अग्रणी EDIFLOR से जुड़ें। निश्चित शुद्ध वेतन के साथ घर से लक्जरी उत्पादों की लेबलिंग करें।',
        cta: 'अभी आवेदन करें',
        secondaryCta: 'हमारी सेवाएं',
        stats: {
          salary: 'गारंटीकृत आय',
          salaryDesc: 'निश्चित शुद्ध वेतन',
          partners: '500+',
          partnersDesc: 'सक्रिय एजेंट',
          satisfaction: '98%',
          satisfactionDesc: 'संतुष्टि दर',
          community: 'हमारे समुदाय से जुड़ें',
          quality: 'गुणवत्ता आश्वासन',
          qualityDesc: 'ISO 9001 प्रमाणित प्रक्रिया',
          topRated: 'टॉप रेटेड',
          topRatedDesc: '2026 का सर्वश्रेष्ठ वर्क-फ्रॉम-होम प्रोग्राम'
        }
      },
      about: {
        badge: 'हम कौन हैं?',
        title: 'उत्कृष्ट',
        titleAccent: 'होम सर्विस',
        desc1: '10 से अधिक वर्षों से, EDIFLOR कंपनियों को उनके रसद में सहायता कर रहा है और सैकड़ों लोगों को लचीले काम के अवसर प्रदान कर रहा है।',
        desc2: 'हमारा मिशन सरल है: औद्योगिक कठोरता को घर से काम करने के लचीलेपन के साथ जोड़ना। हम आपकी सफलता के लिए आवश्यक सभी उपकरण प्रदान करते हैं।',
        more: 'हमारे इतिहास के बारे में और जानें',
        points: {
          p1: 'पेशेवर उपकरण मुफ्त प्रदान किए गए',
          p2: 'व्यापक प्रशिक्षण और सहायता',
          p3: 'डिलीवरी और पिकअप रसद शामिल',
          p4: 'स्थिर और सुरक्षित अनुबंध'
        }
      },
      services: {
        badge: 'हमारी सेवाएं और पेशे',
        title: 'सरल कार्य, वास्तविक',
        titleAccent: 'प्रभाव',
        desc: 'हमारे होम पार्टनर्स के लिए उपलब्ध विभिन्न पेशों की खोज करें। प्रत्येक कार्य एक सख्त गुणवत्ता प्रोटोकॉल द्वारा शासित होता है।',
        apply: 'अभी आवेदन करें',
        items: {
          pliage: {
            title: 'लीफलेट फोल्डिंग',
            desc: 'विज्ञापन लीफलेट्स बनाना और फोल्ड करना। सरल दोहराव वाला मैन्युअल काम।'
          },
          pli: {
            title: 'लिफाफा भरना',
            desc: 'लिफाफों में दस्तावेज डालना। सटीक काम के लिए आदर्श।'
          },
          emballage: {
            title: 'पैकेजिंग और रैपिंग',
            desc: 'हल्के उत्पादों की पैकेजिंग और शिपमेंट के लिए पार्सल तैयार करना।'
          },
          etiquetage: {
            title: 'बोतल लेबलिंग',
            desc: 'सौंदर्य प्रसाधन और इत्र उत्पादों की लेबलिंग। उपकरण प्रदान किए गए, 28 दिन का चक्र।'
          },
          livraison: {
            title: 'सरलीकृत डिलीवरी',
            desc: 'साप्ताहिक या मासिक आधार पर सीधे आपके घर से आपके उत्पादन का पिकअप।'
          }
        }
      },
      gallery: {
        badge: 'वास्तविक चित्र और पेशा',
        title: 'काम की',
        titleAccent: 'तस्वीरें',
        desc: 'अपने भविष्य के काम के मुख्य चरणों की कल्पना करें: सटीक लेबलिंग से लेकर सख्त गुणवत्ता नियंत्रण तक।',
        items: {
          etiquetage: {
            title: 'लेबलिंग प्रक्रिया',
            desc: 'मैन्युअल लेबलर के उपयोग का प्रदर्शन।'
          },
          pliage: {
            title: 'फोल्डिंग तकनीक',
            desc: 'लीफलेट फोल्डिंग दिखाते हुए वीडियो।'
          },
          qualite: {
            title: 'गुणवत्ता नियंत्रण',
            desc: 'संरेखण और स्वच्छता की जांच।'
          },
          logistique: {
            title: 'रसद',
            desc: 'पिकअप और डिलीवरी प्रक्रिया।'
          },
          materiel: {
            title: 'पेशेवर उपकरण',
            desc: 'टेबलटॉप लेबल एप्लिकेटर।'
          },
          fini: {
            title: 'तैयार उत्पाद',
            desc: 'लेबल किए गए कॉस्मेटिक बोतलों का बैच।'
          }
        },
        formation: {
          title: 'प्रशिक्षण शामिल',
          desc: 'हम केवल मशीनें डिलीवर नहीं करते। प्रत्येक पार्टनर को पूरा वीडियो प्रशिक्षण और एक विस्तृत गाइड मिलती है।'
        }
      },
      faq: {
        badge: 'सामान्य प्रश्न',
        title: 'वह सब जो आपको',
        titleAccent: 'जानना चाहिए',
        desc: 'EDIFLOR कैसे काम करता है, इसके बारे में प्रश्न हैं? यहां आपको सबसे आम सवालों के जवाब मिलेंगे।',
        items: {
          q1: {
            q: 'भर्ती कैसे काम करती है?',
            a: 'प्रक्रिया सरल है: हमारे फॉर्म के माध्यम से आवेदन करें, हम आपकी प्रोफाइल की समीक्षा करते हैं, और यदि चुने जाते हैं, तो हम उपकरण और प्रशिक्षण भेजते हैं।'
          },
          q2: {
            q: 'क्या मुझे उपकरणों के लिए भुगतान करना होगा?',
            a: 'नहीं, EDIFLOR सभी आवश्यक उपकरण प्रदान करता है।'
          },
          q3: {
            q: 'डिलीवरी कैसे होती है?',
            a: 'कंपनी की वास्तविक डिलीवरी लागत (वजन, दूरी) से संबंधित आवश्यकताएं हैं। नए कर्मचारी अनुबंध पर हस्ताक्षर करने के बाद डिलीवरी शुल्क वहन करते हैं।'
          },
          q4: {
            q: 'क्या मैं अपनी गति से काम कर सकता हूं?',
            a: 'हाँ, जब तक 28 दिन के चक्र में उत्पादन लक्ष्य पूरा हो जाता है।'
          },
          q5: {
            q: 'क्या कोई प्रशिक्षण है?',
            a: 'बिल्कुल। प्रत्येक नए पार्टनर को एक वीडियो प्रशिक्षण पैक और एक विस्तृत मैनुअल मिलता है।'
          },
          q6: {
            q: 'मुझे भुगतान कैसे किया जाता है?',
            a: 'आपके उत्पादन की प्राप्ति और सत्यापन के बाद हर महीने बैंक हस्तांतरण द्वारा भुगतान किया जाता है।'
          }
        }
      },
      testimonials: {
        badge: 'प्रशंसापत्र',
        title: 'हमारे पार्टनर',
        titleAccent: 'क्या कहते हैं',
        desc: 'उन लोगों के अनुभवों की खोज करें जो पहले से ही EDIFLOR साहसिक कार्य में शामिल हो चुके हैं।',
        items: {
          t1: {
            name: 'राहुल शर्मा',
            role: 'लेबलिंग एजेंट, ल्यों',
            quote: 'Ediflor ने मेरा जीवन बदल दिया है। घर से काम करने का लचीलापन मुझे अपने परिवार के साथ अधिक समय बिताने की अनुमति देता है।'
          },
          t2: {
            name: 'अंजलि गुप्ता',
            role: 'पैकेजिंग एजेंट, पेरिस',
            quote: 'उपकरण उपयोग में सरल हैं और सहायता हमेशा उपलब्ध है। मैं इस कार्यक्रम की अत्यधिक अनुशंसा करती हूं।'
          },
          t3: {
            name: 'विक्रम सिंह',
            role: 'उत्पादन एजेंट, मार्सिले',
            quote: 'गंभीर और पेशेवर सेवा। भुगतान हमेशा समय पर होते हैं और लक्ष्य प्राप्त करने योग्य होते हैं।'
          }
        }
      },
      careers: {
        title: 'Ediflor प्रोग्राम से जुड़ें',
        desc: 'हम वर्तमान में घर से काम करने वाले लेबलिंग एजेंटों की भर्ती कर रहे हैं। लचीले घंटों और आकर्षक मुआवजे का आनंद लें।',
        job: {
          title: 'बोतल लेबलिंग एजेंट',
          desc: 'हम अपनी टीम में शामिल होने के लिए गंभीर लोगों की तलाश कर रहे हैं। यह पद आपको अपने घर के आराम से काम करने की अनुमति देता है।',
          missions: 'मिशन',
          missionsList: ['मानकों के अनुसार लेबलिंग', 'समय सीमा का सम्मान', 'स्वायत्तता'],
          profil: 'प्रोफ़ाइल',
          profilList: ['प्रेरित और गंभीर', 'स्वतंत्र रूप से काम करना', 'संगठित होने की भावना'],
          fullDesc: 'घर पर सौंदर्य प्रसाधन उत्पादों की लेबलिंग। हम सभी उपकरण प्रदान करते हैं। हर 28 दिन में पिकअप।',
          salaryLabel: 'मासिक वेतन',
          salaryValue: 'निश्चित शुद्ध आय',
          objectiveLabel: 'लक्ष्य',
          objectiveValue: '2,000 इकाइयां / 28 दिन',
          badge: 'भर्ती जारी है',
          quote: '"यह कठिन नहीं है, हम आपकी ज़रूरत की हर चीज़ प्रदान करते हैं।"'
        },
        form: {
          title: 'अभी आवेदन करें',
          successTitle: 'आवेदन भेजा गया!',
          success: 'आवेदन भेजा गया!',
          successDesc: 'आपकी रुचि के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।',
          successMsg: 'आपकी रुचि के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।',
          error: 'एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
          back: 'होम पर वापस जाएं',
          nom: 'उपनाम',
          prenom: 'पहला नाम',
          email: 'ईमेल',
          tel: 'फोन',
          poste: 'पद जिसके लिए आवेदन कर रहे हैं',
          postePlaceholder: 'एक पद चुनें',
          message: 'संदेश / प्रेरणा',
          messagePlaceholder: 'हमें अपने बारे में थोड़ा बताएं...',
          aiImprove: 'AI के साथ सुधारें',
          aiImproving: 'सुधार हो रहा है...',
          cv: 'आपका बायोडाटा',
          cvPlaceholder: 'अपलोड करने के लिए क्लिक करें या ड्रैग एंड ड्रॉप करें',
          recaptcha: 'reCAPTCHA द्वारा सुरक्षित',
          submit: 'मेरा आवेदन भेजें',
          submitting: 'भेजा जा रहा है...',
          cancel: 'रद्द करें'
        }
      },
      contact: {
        badge: 'संपर्क करें',
        title: 'कोई प्रश्न? कोई प्रोजेक्ट? आज ही बात करते हैं।',
        desc: 'हमारी टीम आपके सभी सवालों के जवाब देने के लिए आपके पास है।',
        phone: 'फोन',
        address: 'पता',
        form: {
          nom: 'नाम',
          name: 'नाम',
          email: 'ईमेल',
          subject: 'विषय',
          message: 'आपका संदेश...',
          submit: 'संदेश भेजें',
          submitting: 'भेजा जा रहा है...',
          success: 'सफलतापूर्वक भेजा गया!',
          another: 'एक और संदेश भेजें'
        },
        legal: {
          title: 'कानूनी जानकारी',
          activity: 'गतिविधि',
          activityValue: 'मुद्रण और थोक व्यापार',
          creation: 'निर्माण',
          creationValue: '15/04/1998',
          manager: 'प्रबंधक',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'पूंजी',
          capitalValue: '400,000.00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'कानूनी रूप',
          formValue: 'SARL',
          tva: 'वैट नंबर',
          rcs: 'RCS नंबर'
        }
      },
      footer: {
        desc: 'सुविधा प्रबंधन और व्यावसायिक सेवाओं में विशेषज्ञ। हम स्वस्थ और उत्पादक कार्य वातावरण बनाते हैं।',
        nav: 'नेविगेशन',
        links: {
          title: 'नेविगेशन'
        },
        services: 'सेवाएं',
        contact: 'संपर्क करें',
        newsletter: {
          title: 'न्यूज़लेटर',
          desc: 'हमारी नवीनतम समाचारों और नौकरी के प्रस्तावों से अवगत रहें।',
          success: 'सदस्यता सफल!',
          placeholder: 'आपका ईमेल...'
        },
        rights: '© 2026 EDIFLOR. सर्वाधिकार सुरक्षित।',
        legal: 'कानूनी नोटिस',
        privacy: 'गोपनीयता नीति',
        cookies: 'Cookies'
      }
    }
  },
  tr: {
    translation: {
      nav: {
        home: 'Anasayfa',
        about: 'Hakkımızda',
        services: 'İşe Alım',
        gallery: 'Galeri',
        faq: 'SSS',
        careers: 'İşe Alım',
        contact: 'İletişim',
        language: 'Dil'
      },
      hero: {
        badge: 'İşe Alım Açık - 2026',
        title: 'Boş Zamanınızı',
        titleAccent: 'Garantili Kazanca Dönüştürün',
        desc: 'Evde paketleme alanında lider EDIFLOR\'a katılın. Lüks ürünleri evden etiketleyin, aylık net sabit maaş kazanın.',
        cta: 'Şimdi Başvur',
        secondaryCta: 'Hizmetlerimizi Keşfedin',
        stats: {
          salary: 'Garantili Kazanç',
          salaryDesc: 'Sabit Net Maaş',
          partners: '500+',
          partnersDesc: 'Aktif Temsilciler',
          satisfaction: '%98',
          satisfactionDesc: 'Memnuniyet Oranı',
          community: 'Topluluğumuza Katılın',
          quality: 'Kalite Güvencesi',
          qualityDesc: 'ISO 9001 Sertifikalı Süreç',
          topRated: 'En İyi Dereceli',
          topRatedDesc: '2026\'nın En İyi Evden Çalışma Programı Seçildi'
        }
      },
      about: {
        badge: 'Biz Kimiz?',
        title: 'Ev Hizmetlerinde',
        titleAccent: 'Mükemmeliyet',
        desc1: '10 yılı aşkın süredir EDIFLOR, şirketlere hassas lojistik konularında destek verirken yüzlerce kişiye esnek iş fırsatları sunmaktadır.',
        desc2: 'Misyonumuz basit: Endüstriyel titizliği evden çalışma esnekliğiyle birleştirmek. Başarınız için gerekli tüm ekipmanı sağlıyoruz.',
        more: 'Tarihimiz hakkında daha fazlasını öğrenin',
        points: {
          p1: 'Profesyonel ekipman ücretsiz sağlanır',
          p2: 'Kapsamlı eğitim ve destek',
          p3: 'Teslimat ve toplama lojistiği dahil',
          p4: 'İstikrarlı ve güvenli sözleşme'
        }
      },
      services: {
        badge: 'Hizmetlerimiz ve Mesleklerimiz',
        title: 'Basit Görevler, Gerçek',
        titleAccent: 'Etki',
        desc: 'Ev ortaklarımız için mevcut olan farklı meslekleri keşfedin. Her görev katı bir kalite protokolü ile yönetilir.',
        apply: 'Şimdi Başvur',
        items: {
          pliage: {
            title: 'Broşür Katlama',
            desc: 'Reklam broşürlerinin oluşturulması ve katlanması. Basit tekrarlayan manuel iş.'
          },
          pli: {
            title: 'Zarflama',
            desc: 'Belgelerin zarflara yerleştirilmesi. Titiz çalışma için ideal.'
          },
          emballage: {
            title: 'Paketleme ve Ambalaj',
            desc: 'Hafif ürünlerin paketlenmesi ve sevkiyat için parsellerin hazırlanması.'
          },
          etiquetage: {
            title: 'Şişe Etiketleme',
            desc: 'Kozmetik ve parfüm ürünlerinin etiketlenmesi. Ekipman sağlanır, 28 günlük döngü.'
          },
          livraison: {
            title: 'Basitleştirilmiş Teslimat',
            desc: 'Üretiminizin haftalık veya aylık olarak doğrudan evinizden toplanması.'
          }
        }
      },
      gallery: {
        badge: 'Gerçek Resimler ve Meslek',
        title: 'İş Başında',
        titleAccent: 'Görüntüler',
        desc: 'Gelecekteki işinizin ana adımlarını somut olarak hayal edin: hassas etiketlemeden katı kalite kontrolüne kadar.',
        items: {
          etiquetage: {
            title: 'Etiketleme Süreci',
            desc: 'Manuel etiketleyici kullanımının gerçek gösterimi.'
          },
          pliage: {
            title: 'Katlama Tekniği',
            desc: 'Broşür katlamayı gösteren video.'
          },
          qualite: {
            title: 'Kalite Kontrol',
            desc: 'Hizalama ve temizlik kontrolü.'
          },
          logistique: {
            title: 'Lojistik',
            desc: 'Toplama ve teslimat süreci.'
          },
          materiel: {
            title: 'Profesyonel Ekipman',
            desc: 'Masaüstü etiket aplikatörü.'
          },
          fini: {
            title: 'Bitmiş Üretim',
            desc: 'Etiketlenmiş kozmetik şişeleri partisi.'
          }
        },
        formation: {
          title: 'Eğitim Dahil',
          desc: 'Sadece makineleri teslim etmiyoruz. Her ortak tam bir video eğitimi ve ayrıntılı bir kılavuz alır.'
        }
      },
      faq: {
        badge: 'Sıkça Sorulan Sorular',
        title: 'Bilmeniz Gereken',
        titleAccent: 'Her Şey',
        desc: 'EDIFLOR\'un nasıl çalıştığı hakkında sorularınız mı var? En yaygın soruların cevaplarını burada bulabilirsiniz.',
        items: {
          q1: {
            q: 'İşe alım nasıl işler?',
            a: 'Süreç basittir: Formumuz aracılığıyla başvurursunuz, profilinizi inceleriz ve seçilirseniz ekipman ve eğitimi göndeririz.'
          },
          q2: {
            q: 'Ekipman için ödeme yapmam gerekiyor mu?',
            a: 'Hayır, EDIFLOR gerekli tüm ekipmanı sağlar.'
          },
          q3: {
            q: 'Teslimat nasıl yapılır?',
            a: 'Şirketin gerçek teslimat maliyetleri (ağırlık, mesafe) ile ilgili gereksinimleri vardır. Yeni çalışanlar sözleşmeyi imzaladıktan sonra teslimat ücretlerini üstlenirler.'
          },
          q4: {
            q: 'Kendi hızımla çalışabilir miyim?',
            a: 'Evet, 28 günlük döngüde üretim hedefi karşılandığı sürece.'
          },
          q5: {
            q: 'Eğitim var mı?',
            a: 'Kesinlikle. Her yeni ortağa bir video eğitim paketi ve ayrıntılı bir kılavuz verilir.'
          },
          q6: {
            q: 'Ödemem nasıl yapılıyor?',
            a: 'Ödemeler, üretiminizin alınması ve doğrulanmasının ardından her ay banka havalesi ile yapılır.'
          }
        }
      },
      testimonials: {
        badge: 'Referanslar',
        title: 'Ortaklarımız',
        titleAccent: 'Ne Diyor',
        desc: 'EDIFLOR macerasına katılmış olanların deneyimlerini keşfedin.',
        items: {
          t1: {
            name: 'Jean Dupont',
            role: 'Etiketleme Temsilcisi, Lyon',
            quote: 'Ediflor hayatımı değiştirdi. Evden çalışma esnekliği ailemle daha fazla zaman geçirmemi sağlıyor.'
          },
          t2: {
            name: 'Marie Laurent',
            role: 'Paketleme Temsilcisi, Paris',
            quote: 'Ekipman kullanımı basit ve destek her zaman mevcut. Bu programı şiddetle tavsiye ediyorum.'
          },
          t3: {
            name: 'Thomas Bernard',
            role: 'Üretim Temsilcisi, Marsilya',
            quote: 'Ciddi ve profesyonel hizmet. Ödemeler her zaman zamanında ve hedeflere ulaşılabilir.'
          }
        }
      },
      careers: {
        title: 'Ediflor Programına Katılın',
        desc: 'Şu anda evden çalışacak etiketleme temsilcileri arıyoruz. Esnek saatlerin ve cazip ücretlerin tadını çıkarın.',
        job: {
          title: 'Şişe Etiketleme Temsilcisi',
          desc: 'Ekibimize katılacak ciddi kişiler arıyoruz. Bu pozisyon evinizin konforunda çalışmanıza olanak tanır.',
          missions: 'Görevler',
          missionsList: ['Standartlara uygun etiketleme', 'Son teslim tarihlerine uyum', 'Özerklik'],
          profil: 'Profil',
          profilList: ['Motive ve ciddi', 'Bağımsız çalışma', 'Organizasyon duygusu'],
          fullDesc: 'Evde kozmetik ürünlerinin etiketlenmesi. Tüm ekipmanı sağlıyoruz. Her 28 günde bir toplama.',
          salaryLabel: 'Aylık Maaş',
          salaryValue: 'Sabit Net Gelir',
          objectiveLabel: 'Hedef',
          objectiveValue: '2.000 birim / 28 gün',
          badge: 'İŞE ALIM SÜRÜYOR',
          quote: '"Zor değil, ihtiyacınız olan her şeyi sağlıyoruz."'
        },
        form: {
          title: 'Şimdi Başvur',
          successTitle: 'Başvuru Gönderildi!',
          success: 'Başvuru Gönderildi!',
          successDesc: 'İlginiz için teşekkür ederiz. Ekibimiz yakında sizinle iletişime geçecektir.',
          successMsg: 'İlginiz için teşekkür ederiz. Ekibimiz yakında sizinle iletişime geçecektir.',
          error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
          back: 'Anasayfaya Dön',
          nom: 'Soyad',
          prenom: 'Ad',
          email: 'E-posta',
          tel: 'Telefon',
          poste: 'Başvurulan Pozisyon',
          postePlaceholder: 'Bir pozisyon seçin',
          message: 'Mesaj / Motivasyon',
          messagePlaceholder: 'Bize biraz kendinizden bahsedin...',
          aiImprove: 'AI ile İyileştir',
          aiImproving: 'İyileştiriliyor...',
          cv: 'Özgeçmişiniz',
          cvPlaceholder: 'Yüklemek için tıklayın veya sürükleyip bırakın',
          recaptcha: 'reCAPTCHA ile korunmaktadır',
          submit: 'Başvurumu Gönder',
          submitting: 'Gönderiliyor...',
          cancel: 'İptal'
        }
      },
      contact: {
        badge: 'Bize Ulaşın',
        title: 'Bir sorunuz mu var? Bir projeniz mi var? Bugün konuşalım.',
        desc: 'Ekibimiz tüm sorularınızı yanıtlamak için yanınızda.',
        phone: 'Telefon',
        address: 'Adres',
        form: {
          nom: 'Ad',
          name: 'Ad',
          email: 'E-posta',
          subject: 'Konu',
          message: 'Mesajınız...',
          submit: 'Mesajı Gönder',
          submitting: 'Gönderiliyor...',
          success: 'Başarıyla Gönderildi!',
          another: 'Başka bir mesaj gönder'
        },
        legal: {
          title: 'Yasal Bilgiler',
          activity: 'Faaliyet',
          activityValue: 'Baskı ve toptan ticaret',
          creation: 'Kuruluş',
          creationValue: '15/04/1998',
          manager: 'Müdür',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Sermaye',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Yasal Form',
          formValue: 'SARL',
          tva: 'KDV No',
          rcs: 'RCS No'
        }
      },
      footer: {
        desc: 'Tesis yönetimi ve iş hizmetlerinde uzman. Sağlıklı ve üretken çalışma ortamları yaratıyoruz.',
        nav: 'Navigasyon',
        links: {
          title: 'Navigasyon'
        },
        services: 'Hizmetler',
        contact: 'Bize Ulaşın',
        newsletter: {
          title: 'Bülten',
          desc: 'En son haberlerimizden ve iş tekliflerimizden haberdar olun.',
          success: 'Abonelik başarılı!',
          placeholder: 'E-postanız...'
        },
        rights: '© 2026 EDIFLOR. Tüm hakları saklıdır.',
        legal: 'Yasal Uyarı',
        privacy: 'Gizlilik Politikası',
        cookies: 'Cookies'
      }
    }
  },
  nl: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Over ons',
        services: 'Recrutering',
        gallery: 'Galerij',
        faq: 'FAQ',
        careers: 'Recrutering',
        contact: 'Contact',
        language: 'Taal'
      },
      hero: {
        badge: 'Recrutering Open - 2026',
        title: 'Transformeer uw vrije tijd in',
        titleAccent: 'gegarandeerd inkomen',
        desc: 'Sluit u aan bij EDIFLOR, leider in thuisverpakking. Label luxeproducten vanuit huis met bir vast netto maandsalaris.',
        cta: 'Nu solliciteren',
        secondaryCta: 'Ontdek onze diensten',
        stats: {
          salary: 'Gegarandeerd Inkomen',
          salaryDesc: 'Vast netto salaris',
          partners: '500+',
          partnersDesc: 'Actieve agenten',
          satisfaction: '98%',
          satisfactionDesc: 'Tevredenheidspercentage',
          community: 'Word lid van onze actieve gemeenschap',
          quality: 'Gegarandeerde Kwaliteit',
          qualityDesc: 'ISO 9001 gecertificeerd proces',
          topRated: 'Top Rated',
          topRatedDesc: 'Verkozen tot beste thuiswerkprogramma 2026'
        }
      },
      about: {
        badge: 'Wie zijn wij?',
        title: 'Uitmuntendheid in',
        titleAccent: 'thuisservice',
        desc1: 'Al meer dan 10 jaar ondersteunt EDIFLOR bedrijven bij hun fijne logistiek en biedt het flexibele werkmogelijkheden aan honderden particulieren.',
        desc2: 'Onze missie is simpel: industriële strengheid combineren met de flexibiliteit van thuiswerken. Wij leveren alle benodigde apparatuur zodat u uw missies met bir gerust hart kunt volbrengen.',
        more: 'Lees meer over onze geschiedenis',
        points: {
          p1: 'Professionele apparatuur gratis verstrekt',
          p2: 'Volledige training en continue ondersteuning',
          p3: 'Inclusief leverings- en ophaallogistiek',
          p4: 'Stabiel en veilig arbeidscontract'
        }
      },
      services: {
        badge: 'Onze Diensten & Beroepen',
        title: 'Eenvoudige missies, echte',
        titleAccent: 'impact',
        desc: 'Ontdek de verschillende beroepen die wij aanbieden aan onze thuispartners. Elke missie wordt begeleid door bir strikt kwaliteitsprotocol.',
        apply: 'Nu solliciteren',
        items: {
          pliage: {
            title: 'Flyers vouwen',
            desc: 'Creatie en vouwen van reclameflyers. Eenvoudig en repetitief handwerk.'
          },
          pli: {
            title: 'Enveloppen vullen',
            desc: 'Documenten in enveloppen steken. Ideaal voor precisiewerk.'
          },
          emballage: {
            title: 'Verpakking & Verpakkingswerk',
            desc: 'Verpakken van lichte producten en voorbereiden van pakketten voor verzending.'
          },
          etiquetage: {
            title: 'Flessen etiketteren',
            desc: 'Etiketteren van cosmetische producten en parfums. Apparatuur verstrekt, cyclus van 28 dagen.'
          },
          livraison: {
            title: 'Vereenvoudigde levering',
            desc: 'Wekelijkse of maandelijkse ophaling van uw productie direct bij u thuis.'
          }
        }
      },
      gallery: {
        badge: 'Echte Illustraties & Beroep',
        title: 'Het werk in',
        titleAccent: 'beelden',
        desc: 'Visualiseer concreet de belangrijkste stappen van uw toekomstige missie: van nauwkeurig etiketteren tot strikte kwaliteitscontrole.',
        items: {
          etiquetage: {
            title: 'Etiketteringsproces',
            desc: 'Echte demonstratie van het gebruik van de handmatige etiketteermachine.'
          },
          pliage: {
            title: 'Vouwtechniek',
            desc: 'Illustratievideo die het vouwen van flyers toont.'
          },
          qualite: {
            title: 'Kwaliteitscontrole',
            desc: 'Controle van uitlijning en netheid.'
          },
          logistique: {
            title: 'Logistiek',
            desc: 'Ophaal- en leveringsproces.'
          },
          materiel: {
            title: 'Professionele apparatuur',
            desc: 'Tafelmodel etikettenapplicator.'
          },
          fini: {
            title: 'Eindproductie',
            desc: 'Partij geëtiketteerde cosmetische flacons.'
          }
        },
        formation: {
          title: 'Training inbegrepen',
          desc: 'We leveren niet alleen de machines. Elke partner ontvangt bir volledige videotraining en bir gedetailleerde gebruikershandleiding om het etiketteren en verpakken in slechts enkele uren onder de knie te krijgen.'
        }
      },
      faq: {
        badge: 'Veelgestelde Vragen',
        title: 'Alles wat u moet',
        titleAccent: 'weten',
        desc: 'Heeft u vragen over hoe EDIFLOR werkt? Vind hier de antwoorden op de meest voorkomende vragen van onze toekomstige partners.',
        items: {
          q1: {
            q: 'Hoe werkt de recrutering?',
            a: 'Het proces is eenvoudig: u solliciteert via ons formulier, wij bestuderen uw profiel en als u wordt geselecteerd, sturen we u de apparatuur en bir volledige training.'
          },
          q2: {
            q: 'Moet ik betalen voor de apparatuur?',
            a: 'Nee, EDIFLOR levert alle benodigde apparatuur (etiketteermachine, producten, etiketten).'
          },
          q3: {
            q: 'Hoe verloopt de levering?',
            a: 'Het bedrijf stelt bepaalde eisen aan de werkelijke leveringskosten van de machine (afstand, gewicht, behandeling) en wettelijke verplichtingen. Het bedrijf vereist dat nieuwe werknemers de leveringskosten op zich nemen. U kunt er zeker van zijn dat u deze kosten betaalt na ondertekening van uw arbeidscontract.'
          },
          q4: {
            q: 'Kan ik in mijn eigen tempo werken?',
            a: 'Ja, zolang de productiedoelstelling binnen de cyclus van 28 dagen wordt behaald, organiseert u uw tijd zoals u dat wilt.'
          },
          q5: {
            q: 'Is er bir training?',
            a: 'Absoluut. Elke nieuwe partner ontvangt bir videotrainingskit en bir gedetailleerde handleiding om de technische handelingen onder de knie te krijgen.'
          },
          q6: {
            q: 'Hoe word ik betaald?',
            a: 'Betalingen geschieden elke maand via bankoverschrijving, na ontvangst en verificatie van uw productie.'
          }
        }
      },
      contact: {
        badge: 'Contacteer ons',
        title: 'Een vraag? Een project? Laten we er vandaag over praten.',
        desc: 'Ons team staat tot uw beschikking om al uw vragen over onze thuisverpakkingsdiensten te beantwoorden.',
        phone: 'Telefoon',
        address: 'Adres',
        form: {
          nom: 'Naam',
          name: 'Naam',
          email: 'E-mail',
          subject: 'Onderwerp',
          message: 'Uw bericht...',
          submit: 'Bericht verzenden',
          submitting: 'Verzenden...',
          success: 'Bericht succesvol verzonden!',
          another: 'Stuur nog bir bericht'
        },
        legal: {
          title: 'Juridische Informatie',
          activity: 'Activiteit',
          activityValue: 'Drukkerij en groothandel',
          creation: 'Oprichting',
          creationValue: '15/04/1998',
          manager: 'Bestuurder',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Maatschappelijk Kapitaal',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Juridische vorm',
          formValue: 'SARL',
          tva: 'BTW-nummer',
          rcs: 'RCS-nummer'
        }
      },
      footer: {
        desc: 'Expert in facility management en zakelijke diensten. Wij creëren gezonde en productieve werkomgevingen.',
        nav: 'Navigatie',
        links: {
          title: 'Navigatie'
        },
        services: 'Diensten',
        contact: 'Contact',
        newsletter: {
          title: 'Nieuwsbrief',
          desc: 'Blijf op de hoogte van ons laatste nieuws en vacatures.',
          success: 'Succesvol ingeschreven!',
          placeholder: 'Uw e-mail...'
        },
        rights: '© 2026 EDIFLOR. Alle rechten voorbehouden.',
        legal: 'Juridische kennisgeving',
        privacy: 'Privacybeleid',
        cookies: 'Cookies'
      }
    }
  },
  pl: {
    translation: {
      nav: {
        home: 'Strona Główna',
        about: 'O nas',
        services: 'Rekrutacja',
        gallery: 'Galeria',
        faq: 'FAQ',
        careers: 'Rekrutacja',
        contact: 'Kontakt',
        language: 'Język'
      },
      hero: {
        badge: 'Rekrutacja Otwarta - 2026',
        title: 'Zmień swój wolny czas w',
        titleAccent: 'gwarantowany dochód',
        desc: 'Dołącz do EDIFLOR, lidera w pakowaniu domowym. Etykietuj produkty luksusowe z domu ze stałym wynagrodzeniem netto miesięcznie.',
        cta: 'Aplikuj teraz',
        secondaryCta: 'Odkryj nasze usługi',
        stats: {
          salary: 'Gwarantowany dochód',
          salaryDesc: 'Stałe wynagrodzenie netto',
          partners: '500+',
          partnersDesc: 'Aktywni agenci',
          satisfaction: '98%',
          satisfactionDesc: 'Wskaźnik satysfakcji',
          community: 'Dołącz do naszej aktywnej społeczności',
          quality: 'Gwarantowana jakość',
          qualityDesc: 'Proces z certyfikatem ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Wybrany najlepszym programem pracy z domu 2026'
        }
      },
      about: {
        badge: 'Kim jesteśmy?',
        title: 'Doskonałość w',
        titleAccent: 'usługach domowych',
        desc1: 'Od ponad 10 lat EDIFLOR wspiera firmy w ich precyzyjnej logistyce, oferując jednocześnie elastyczne możliwości pracy setkom osób prywatnych.',
        desc2: 'Nasza misja jest prosta: łączyć rygor przemysłowy z elastycznością pracy z domu. Dostarczamy cały niezbędny sprzęt, abyś mógł z powodzeniem realizować swoje misje.',
        more: 'Dowiedz się więcej o naszej historii',
        points: {
          p1: 'Profesjonalny sprzęt dostarczany bezpłatnie',
          p2: 'Pełne szkolenie i ciągłe wsparcie',
          p3: 'Logistyka dostaw i odbiorów w cenie',
          p4: 'Stabilna i bezpieczna umowa o pracę'
        }
      },
      services: {
        badge: 'Nasze usługi i zawody',
        title: 'Proste misje, realny',
        titleAccent: 'wpływ',
        desc: 'Odkryj różne zawody, które oferujemy naszym partnerom domowym. Każda misja jest nadzorowana przez ścisły protokół jakości.',
        apply: 'Aplikuj teraz',
        items: {
          pliage: {
            title: 'Składanie ulotek',
            desc: 'Tworzenie i składanie ulotek reklamowych. Prosta i powtarzalna praca ręczna.'
          },
          pli: {
            title: 'Kopertowanie',
            desc: 'Wkładanie dokumentów do kopert. Idealne do pracy precyzyjnej.'
          },
          emballage: {
            title: 'Pakowanie i konfekcjonowanie',
            desc: 'Pakowanie lekkich produktów i przygotowywanie paczek do wysyłki.'
          },
          etiquetage: {
            title: 'Etykietowanie butelek',
            desc: 'Etykietowanie produktów kosmetycznych i perfum. Sprzęt dostarczony, cykl 28 dni.'
          },
          livraison: {
            title: 'Uproszczona dostawa',
            desc: 'Cotygodniowy lub miesięczny odbiór Twojej produkcji bezpośrednio z Twojego domu.'
          }
        }
      },
      gallery: {
        badge: 'Realne ilustracje i zawód',
        title: 'Praca w',
        titleAccent: 'obrazach',
        desc: 'Wizualizuj konkretnie kluczowe etapy swojej przyszłej misji: od precyzyjnego etykietowania po ścisłą kontrolę jakości.',
        items: {
          etiquetage: {
            title: 'Proces etykietowania',
            desc: 'Realna demonstracja użycia ręcznej etykieciarki.'
          },
          pliage: {
            title: 'Technika składania',
            desc: 'Film ilustracyjny pokazujący składanie ulotek.'
          },
          qualite: {
            title: 'Kontrola jakości',
            desc: 'Weryfikacja wyrównania i czystości.'
          },
          logistique: {
            title: 'Logistyka',
            desc: 'Proces odbioru i dostawy.'
          },
          materiel: {
            title: 'Sprzęt profesjonalny',
            desc: 'Stołowy aplikator etykiet.'
          },
          fini: {
            title: 'Gotowa produkcja',
            desc: 'Partia zaetykietowanych flakonów kosmetycznych.'
          }
        },
        formation: {
          title: 'Szkolenie w cenie',
          desc: 'Nie tylko dostarczamy maszyny. Każdy partner otrzymuje pełne szkolenie wideo i szczegółową instrukcję obsługi, aby opanować etykietowanie i pakowanie w zaledwie kilka godzin.'
        }
      },
      faq: {
        badge: 'Często zadawane pytania',
        title: 'Wszystko, co musisz',
        titleAccent: 'wiedzieć',
        desc: 'Masz pytania dotyczące działania EDIFLOR? Tutaj znajdziesz odpowiedzi na najczęstsze pytania naszych przyszłych partnerów.',
        items: {
          q1: {
            q: 'Jak działa rekrutacja?',
            a: 'Proces jest prosty: aplikujesz przez nasz formularz, analizujemy Twój profil, a jeśli zostaniesz wybrany, wysyłamy Ci sprzęt i pełne szkolenie.'
          },
          q2: {
            q: 'Czy muszę płacić za sprzęt?',
            a: 'Nie, EDIFLOR dostarcza cały niezbędny sprzęt (etykieciarkę, produkty, etykiety).'
          },
          q3: {
            q: 'Jak wygląda dostawa?',
            a: 'Firma ma pewne wymagania związane z rzeczywistymi kosztami dostawy maszyny (odległość, waga, obsługa) oraz obowiązkami prawnymi. Firma wymaga, aby nowi pracownicy pokryli koszty dostawy. Możesz być spokojny, że opłacisz te koszty po podpisaniu umowy o pracę.'
          },
          q4: {
            q: 'Czy mogę pracować we własnym tempie?',
            a: 'Tak, o ile cel produkcyjny zostanie osiągnięty w cyklu 28 dni, organizujesz swój czas tak, jak chcesz.'
          },
          q5: {
            q: 'Czy jest szkolenie?',
            a: 'Absolutnie. Każdy nowy partner otrzymuje zestaw szkoleniowy wideo i szczegółową instrukcję, aby opanować gesty techniczne.'
          },
          q6: {
            q: 'Jak otrzymam wynagrodzenie?',
            a: 'Płatności dokonywane są przelewem bankowym co miesiąc, po otrzymaniu i weryfikacji Twojej produkcji.'
          }
        }
      },
      contact: {
        badge: 'Skontaktuj się z nami',
        title: 'Pytanie? Projekt? Porozmawiajmy o tym dzisiaj.',
        desc: 'Nasz zespół jest do Twojej dyspozycji, aby odpowiedzieć na wszystkie pytania dotyczące naszych usług pakowania domowego.',
        phone: 'Telefon',
        address: 'Adres',
        form: {
          nom: 'Nazwisko',
          name: 'Nazwisko',
          email: 'Email',
          subject: 'Temat',
          message: 'Twoja wiadomość...',
          submit: 'Wyślij wiadomość',
          submitting: 'Wysyłanie...',
          success: 'Wiadomość wysłana pomyślnie!',
          another: 'Wyślij kolejną wiadomość'
        },
        legal: {
          title: 'Informacje prawne',
          activity: 'Działalność',
          activityValue: 'Drukarnia i handel hurtowy',
          creation: 'Utworzenie',
          creationValue: '15/04/1998',
          manager: 'Zarządzający',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Kapitał zakładowy',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Forma prawna',
          formValue: 'SARL',
          tva: 'Numer VAT',
          rcs: 'Numer RCS'
        }
      },
      footer: {
        desc: 'Ekspert w zarządzaniu obiektami i usługach dla biznesu. Tworzymy zdrowe i produktywne środowiska pracy.',
        nav: 'Nawigacja',
        links: {
          title: 'Nawigacja'
        },
        services: 'Usługi',
        contact: 'Kontakt',
        newsletter: {
          title: 'Newsletter',
          desc: 'Bądź na bieżąco z naszymi najnowszymi wiadomościami i ofertami pracy.',
          success: 'Zapisano pomyślnie!',
          placeholder: 'Twój email...'
        },
        rights: '© 2026 EDIFLOR. Wszelkie prawa zastrzeżone.',
        legal: 'Nota prawna',
        privacy: 'Polityka prywatności',
        cookies: 'Cookies'
      }
    }
  },
  ro: {
    translation: {
      nav: {
        home: 'Acasă',
        about: 'Despre noi',
        services: 'Recrutare',
        gallery: 'Galerie',
        faq: 'FAQ',
        careers: 'Recrutare',
        contact: 'Contact',
        language: 'Limbă'
      },
      hero: {
        badge: 'Recrutare Deschisă - 2026',
        title: 'Transformă-ți timpul liber în',
        titleAccent: 'venit garantat',
        desc: 'Alătură-te EDIFLOR, lider în ambalarea la domiciliu. Etichetează produse de lux de acasă cu un salariu fix net pe lună.',
        cta: 'Aplică acum',
        secondaryCta: 'Descoperă serviciile noastre',
        stats: {
          salary: 'Venit Garantat',
          salaryDesc: 'Salariu fix net',
          partners: '500+',
          partnersDesc: 'Agenți activi',
          satisfaction: '98%',
          satisfactionDesc: 'Rata de satisfacție',
          community: 'Alătură-te comunității noastre active',
          quality: 'Calitate Garantată',
          qualityDesc: 'Proces certificat ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Votat cel mai bun program de lucru de acasă 2026'
        }
      },
      about: {
        badge: 'Cine suntem noi?',
        title: 'Excelență în',
        titleAccent: 'servicii la domiciliu',
        desc1: 'De peste 10 ani, EDIFLOR sprijină companiile în logistica lor fină, oferind în același timp oportunități de lucru flexibile pentru sute de persoane fizice.',
        desc2: 'Misiunea noastră este simplă: să combinăm rigoarea industrială cu flexibilitatea lucrului de acasă. Oferim tot echipamentul necesar pentru ca tu să îți poți îndeplini misiunile cu succes.',
        more: 'Află mai multe despre istoria noastră',
        points: {
          p1: 'Echipament profesional furnizat gratuit',
          p2: 'Instruire completă și asistență continuă',
          p3: 'Logistică de livrare și colectare inclusă',
          p4: 'Contract de muncă stabil și sigur'
        }
      },
      services: {
        badge: 'Serviciile și Meseriile Noastre',
        title: 'Misiuni simple, impact',
        titleAccent: 'real',
        desc: 'Descoperă diferitele meserii pe care le oferim partenerilor noștri la domiciliu. Fiecare misiune este guvernată de un protocol strict de calitate.',
        apply: 'Aplică acum',
        items: {
          pliage: {
            title: 'Pliere Flyere',
            desc: 'Crearea și plierea flyerelor publicitare. Muncă manuală simplă și repetitivă.'
          },
          pli: {
            title: 'Introducere în plicuri',
            desc: 'Introducerea documentelor în plicuri. Ideal pentru muncă de precizie.'
          },
          emballage: {
            title: 'Ambalare și Colete',
            desc: 'Ambalarea produselor ușoare și pregătirea coletelor pentru expediere.'
          },
          etiquetage: {
            title: 'Etichetare Sticle',
            desc: 'Etichetarea produselor cosmetice și a parfumurilor. Echipament furnizat, ciclu de 28 de zile.'
          },
          livraison: {
            title: 'Livrare Simplificată',
            desc: 'Colectarea săptămânală sau lunară a producției tale direct de la domiciliu.'
          }
        }
      },
      gallery: {
        badge: 'Ilustrații Reale și Meserie',
        title: 'Munca în',
        titleAccent: 'imagini',
        desc: 'Vizualizează concret etapele cheie ale viitoarei tale misiuni: de la etichetarea precisă la controlul riguros al calității.',
        items: {
          etiquetage: {
            title: 'Procesul de etichetare',
            desc: 'Demonstrație reală a utilizării etichetatorului manual.'
          },
          pliage: {
            title: 'Tehnica de pliere',
            desc: 'Video ilustrativ care arată plierea flyerelor.'
          },
          qualite: {
            title: 'Controlul calității',
            desc: 'Verificarea aliniamentului și a curățeniei.'
          },
          logistique: {
            title: 'Logistică',
            desc: 'Procesul de colectare și livrare.'
          },
          materiel: {
            title: 'Echipament Pro',
            desc: 'Aplicator de etichete de masă.'
          },
          fini: {
            title: 'Producție Finită',
            desc: 'Lot de flacoane cosmetice etichetate.'
          }
        },
        formation: {
          title: 'Instruire inclusă',
          desc: 'Nu ne limităm doar la livrarea mașinilor. Fiecare partener primește o instruire video completă și un manual de utilizare detaliat pentru a stăpâni etichetarea și ambalarea în doar câteva ore.'
        }
      },
      faq: {
        badge: 'Întrebări Frecvente',
        title: 'Tot ce trebuie să',
        titleAccent: 'știi',
        desc: 'Ai întrebări despre cum funcționează EDIFLOR? Găsește aici răspunsurile la cele mai frecvente întrebări ale viitorilor noștri parteneri.',
        items: {
          q1: {
            q: 'Cum funcționează recrutarea?',
            a: 'Procesul este simplu: aplici prin formularul nostru, îți studiem profilul și, dacă ești selectat, îți trimitem echipamentul și o instruire completă.'
          },
          q2: {
            q: 'Trebuie să plătesc pentru echipament?',
            a: 'Nu, EDIFLOR furnizează tot echipamentul necesar (etichetator, produse, etichete).'
          },
          q3: {
            q: 'Cum se desfășoară livrarea?',
            a: 'Compania are anumite cerințe legate de costurile reale de livrare ale mașinii (distanță, greutate, manipulare) și obligațiile legale. Compania solicită noilor angajați să suporte costurile de livrare. Poți fi sigur(ă) că vei achita aceste costuri după semnarea contractului de muncă.'
          },
          q4: {
            q: 'Pot lucra în ritmul meu?',
            a: 'Da, atâta timp cât obiectivul de producție este atins în ciclul de 28 de zile, îți organizezi timpul așa cum dorești.'
          },
          q5: {
            q: 'Există instruire?',
            a: 'Absolut. Fiecare nou partener primește un kit de instruire video și un manual detaliat pentru a stăpâni gesturile tehnice.'
          },
          q6: {
            q: 'Cum sunt plătit?',
            a: 'Plățile se fac prin transfer bancar în fiecare lună, după primirea și verificarea producției dumneavoastră.'
          }
        }
      },
      contact: {
        badge: 'Contactează-ne',
        title: 'O întrebare? Un proiect? Să vorbim despre asta astăzi.',
        desc: 'Echipa noastră îți stă la dispoziție pentru a răspunde la toate întrebările tale privind serviciile noastre de ambalare la domiciliu.',
        phone: 'Telefon',
        address: 'Adresă',
        form: {
          nom: 'Nume',
          name: 'Nume',
          email: 'Email',
          subject: 'Subiect',
          message: 'Mesajul tău...',
          submit: 'Trimite mesajul',
          submitting: 'Se trimite...',
          success: 'Mesaj trimis cu succes!',
          another: 'Trimite un alt mesaj'
        },
        legal: {
          title: 'Informații Juridice',
          activity: 'Activitate',
          activityValue: 'Tipografie și comerț cu ridicata',
          creation: 'Creare',
          creationValue: '15/04/1998',
          manager: 'Administrator',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Capital Social',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Formă juridică',
          formValue: 'SARL',
          tva: 'Număr TVA',
          rcs: 'Număr RCS'
        }
      },
      footer: {
        desc: 'Expert în facility management și servicii pentru afaceri. Creăm medii de lucru sănătoase și productive.',
        nav: 'Navigare',
        links: {
          title: 'Navigare'
        },
        services: 'Servicii',
        contact: 'Contact',
        newsletter: {
          title: 'Newsletter',
          desc: 'Fii la curent cu ultimele noastre știri și oferte de muncă.',
          success: 'Înscris cu succes!',
          placeholder: 'Email-ul tău...'
        },
        rights: '© 2026 EDIFLOR. Toate drepturile rezervate.',
        legal: 'Mențiuni Legale',
        privacy: 'Confidențialitate',
        cookies: 'Cookies'
      }
    }
  },
  sv: {
    translation: {
      nav: {
        home: 'Hem',
        about: 'Om oss',
        services: 'Rekrytering',
        gallery: 'Galleri',
        faq: 'FAQ',
        careers: 'Rekrytering',
        contact: 'Kontakt',
        language: 'Språk'
      },
      hero: {
        badge: 'Rekrytering Öppen - 2026',
        title: 'Förvandla din fritid till',
        titleAccent: 'garanterad inkomst',
        desc: 'Gå med i EDIFLOR, ledande inom hemförpackning. Etikettera lyxprodukter hemifrån med en fast nettolön per månad.',
        cta: 'Ansök nu',
        secondaryCta: 'Upptäck våra tjänster',
        stats: {
          salary: 'Garanterad inkomst',
          salaryDesc: 'Fast nettolön',
          partners: '500+',
          partnersDesc: 'Aktiva agenter',
          satisfaction: '98%',
          satisfactionDesc: 'Nöjdhetsgrad',
          community: 'Gå med i vår aktiva gemenskap',
          quality: 'Garanterad kvalitet',
          qualityDesc: 'ISO 9001-certifierad process',
          topRated: 'Top Rated',
          topRatedDesc: 'Vald till bästa hemmaprogram 2026'
        }
      },
      about: {
        badge: 'Vilka är vi?',
        title: 'Excellens inom',
        titleAccent: 'hemservice',
        desc1: 'I över 10 år har EDIFLOR stöttat företag i deras finlogistik samtidigt som vi erbjudit flexibla arbetsmöjligheter till hundratals privatpersoner.',
        desc2: 'Vårt uppdrag är enkelt: att kombinera industriell noggrannhet med flexibiliteten i att arbeta hemifrån. Vi tillhandahåller all nödvändig utrustning så att du kan lyckas med dina uppdrag.',
        more: 'Läs mer om vår historia',
        points: {
          p1: 'Professionell utrustning tillhandahålls gratis',
          p2: 'Fullständig utbildning och kontinuerligt stöd',
          p3: 'Leverans- och hämtningslogistik ingår',
          p4: 'Stabilt och säkert anställningsavtal'
        }
      },
      services: {
        badge: 'Våra tjänster och yrken',
        title: 'Enkla uppdrag, verklig',
        titleAccent: 'påverkan',
        desc: 'Upptäck de olika yrken vi erbjuder våra hempartners. Varje uppdrag styrs av ett strikt kvalitetsprotokoll.',
        apply: 'Ansök nu',
        items: {
          pliage: {
            title: 'Vikning av flyers',
            desc: 'Skapande och vikning av reklamflyers. Enkelt och repetitivt manuellt arbete.'
          },
          pli: {
            title: 'Kuvertering',
            desc: 'Inläggning av dokument i kuvert. Idealiskt för precisionsarbete.'
          },
          emballage: {
            title: 'Förpackning och paketering',
            desc: 'Förpackning av lätta produkter och förberedelse av paket för leverans.'
          },
          etiquetage: {
            title: 'Etikettering av flaskor',
            desc: 'Etikettering av kosmetiska produkter och parfymer. Utrustning tillhandahålls, cykel på 28 dagar.'
          },
          livraison: {
            title: 'Förenklad leverans',
            desc: 'Vecko- eller månadsvis hämtning av din produktion direkt från ditt hem.'
          }
        }
      },
      gallery: {
        badge: 'Verkliga illustrationer och yrke',
        title: 'Arbetet i',
        titleAccent: 'bilder',
        desc: 'Visualisera konkret de viktigaste stegen i ditt framtida uppdrag: från exakt etikettering till strikt kvalitetskontroll.',
        items: {
          etiquetage: {
            title: 'Etiketteringsprocess',
            desc: 'Verklig demonstration av användningen av den manuella etiketteringsmaskinen.'
          },
          pliage: {
            title: 'Vikningsteknik',
            desc: 'Illustrationsvideo som visar vikning av flyers.'
          },
          qualite: {
            title: 'Kvalitetskontroll',
            desc: 'Verifiering av inriktning och renhet.'
          },
          logistique: {
            title: 'Logistik',
            desc: 'Hämtnings- och leveransprocess.'
          },
          materiel: {
            title: 'Pro-utrustning',
            desc: 'Bordsapplikator för etiketter.'
          },
          fini: {
            title: 'Färdig produktion',
            desc: 'Parti med etiketterade kosmetiska flaskor.'
          }
        },
        formation: {
          title: 'Utbildning ingår',
          desc: 'Vi nöjer oss inte bara med att leverera maskinerna. Varje partner får en fullständig videoutbildning och en detaljerad användarmanual för att bemästra etikettering och förpackning på bara några timmar.'
        }
      },
      faq: {
        badge: 'Vanliga frågor',
        title: 'Allt du behöver',
        titleAccent: 'veta',
        desc: 'Har du frågor om hur EDIFLOR fungerar? Här hittar du svaren på de vanligaste frågorna från våra framtida partner.',
        items: {
          q1: {
            q: 'Hur fungerar rekryteringen?',
            a: 'Processen är enkel: du ansöker via vårt formulär, vi studerar din profil och om du blir utvald skickar vi utrustningen och en fullständig utbildning.'
          },
          q2: {
            q: 'Måste jag betala för utrustningen?',
            a: 'Nej, EDIFLOR tillhandahåller all nödvändig utrustning (etiketteringsmaskin, produkter, etiketter).'
          },
          q3: {
            q: 'Hur går leveransen till?',
            a: 'Företaget har vissa krav relaterade till de faktiska leveranskostnaderna för maskinen (avstånd, vikt, hantering) och juridiska skyldigheter. Företaget kräver att nya anställda står för leveranskostnaderna. Du kan vara säker på att du betalar dessa kostnader efter att du har skrivit på ditt anställningsavtal.'
          },
          q4: {
            q: 'Kan jag arbeta i min egen takt?',
            a: 'Ja, så länge produktionsmålet uppnås inom 28-dagarsperioden organiserar du din tid som du vill.'
          },
          q5: {
            q: 'Finns det utbildning?',
            a: 'Absolut. Varje ny partner får ett videoutbildningskit och en detaljerad manual för att bemästra de tekniska momenten.'
          },
          q6: {
            q: 'Hur får jag betalt?',
            a: 'Betalningar sker via banköverföring varje månad, efter mottagande och verifiering av din produktion.'
          }
        }
      },
      contact: {
        badge: 'Kontakta oss',
        title: 'En fråga? Ett projekt? Låt oss prata om det idag.',
        desc: 'Vårt team står till ditt förfogande för att svara på alla dina frågor om våra hemförpackningstjänster.',
        phone: 'Telefon',
        address: 'Adress',
        form: {
          nom: 'Efternamn',
          name: 'Efternamn',
          email: 'E-post',
          subject: 'Ämne',
          message: 'Ditt meddelande...',
          submit: 'Skicka meddelande',
          submitting: 'Skickar...',
          success: 'Meddelandet har skickats!',
          another: 'Skicka ett annat meddelande'
        },
        legal: {
          title: 'Juridisk information',
          activity: 'Verksamhet',
          activityValue: 'Tryckeri och partihandel',
          creation: 'Skapande',
          creationValue: '15/04/1998',
          manager: 'Chef',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Aktiekapital',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Juridisk form',
          formValue: 'SARL',
          tva: 'Momsnummer',
          rcs: 'RCS-nummer'
        }
      },
      footer: {
        desc: 'Expert på facility management och företagstjänster. Vi skapar hälsosamma och produktiva arbetsmiljöer.',
        nav: 'Navigering',
        links: {
          title: 'Navigering'
        },
        services: 'Tjänster',
        contact: 'Kontakt',
        newsletter: {
          title: 'Nyhetsbrev',
          desc: 'Håll dig informerad om våra senaste nyheter och jobberbjudanden.',
          success: 'Anmäld!',
          placeholder: 'Din e-post...'
        },
        rights: '© 2026 EDIFLOR. Alla rättigheter förbehållna.',
        legal: 'Juridisk information',
        privacy: 'Integritetspolicy',
        cookies: 'Cookies'
      }
    }
  },
  el: {
    translation: {
      nav: {
        home: 'Αρχική',
        about: 'Σχετικά',
        services: 'Προσλήψεις',
        gallery: 'Γκαλερί',
        faq: 'FAQ',
        careers: 'Προσλήψεις',
        contact: 'Επικοινωνία',
        language: 'Γλώσσα'
      },
      hero: {
        badge: 'Προσλήψεις Ανοιχτές - 2026',
        title: 'Μετατρέψτε τον ελεύθερο χρόνο σας σε',
        titleAccent: 'εγγυημένο εισόδημα',
        desc: 'Γίνετε μέλος της EDIFLOR, ηγέτη στη συσκευασία στο σπίτι. Ετικετάρετε προϊόντα πολυτελείας από το σπίτι με σταθερό καθαρό μισθό ανά μήνα.',
        cta: 'Κάντε Αίτηση Τώρα',
        secondaryCta: 'Ανακαλύψτε τις υπηρεσίες μας',
        stats: {
          salary: 'Εγγυημένο Εισόδημα',
          salaryDesc: 'Σταθερός καθαρός μισθός',
          partners: '500+',
          partnersDesc: 'Ενεργοί πράκτορες',
          satisfaction: '98%',
          satisfactionDesc: 'Ποσοστό ικανοποίησης',
          community: 'Γίνετε μέλος της ενεργής κοινότητάς μας',
          quality: 'Εγγυημένη Ποιότητα',
          qualityDesc: 'Πιστοποιημένη διαδικασία ISO 9001',
          topRated: 'Top Rated',
          topRatedDesc: 'Ψηφίστηκε ως το καλύτερο πρόγραμμα εργασίας από το σπίτι 2026'
        }
      },
      about: {
        badge: 'Ποιοι είμαστε;',
        title: 'Αριστεία στην',
        titleAccent: 'υπηρεσία κατ\' οίκον',
        desc1: 'Για περισσότερα από 10 χρόνια, η EDIFLOR υποστηρίζει τις εταιρείες στην λεπτή εφοδιαστική τους, προσφέροντας παράλληλα ευέλικτες ευκαιρίες εργασίας σε εκατοντάδες ιδιώτες.',
        desc2: 'Η αποστολή μας είναι απλή: να συνδυάσουμε τη βιομηχανική αυστηρότητα με την ευελιξία της εργασίας από το σπίτι. Παρέχουμε όλο τον απαραίτητο εξοπλισμό για να πετύχετε στις αποστολές σας.',
        more: 'Μάθετε περισσότερα για την ιστορία μας',
        points: {
          p1: 'Επαγγελματικός εξοπλισμός παρέχεται δωρεάν',
          p2: 'Πλήρης εκπαίδευση και συνεχή υποστήριξη',
          p3: 'Περιλαμβάνεται η εφοδιαστική παράδοσης και παραλαβής',
          p4: 'Σταθερή και ασφαλής σύμβαση εργασίας'
        }
      },
      services: {
        badge: 'Οι Υπηρεσίες & τα Επαγγέλματά μας',
        title: 'Απλές αποστολές, πραγματικός',
        titleAccent: 'αντίκτυπος',
        desc: 'Ανακαλύψτε τα διάφορα επαγγέλματα που προσφέρουμε στους συνεργάτες μας κατ\' οίκον. Κάθε αποστολή διέπεται από ένα αυστηρό πρωτόκολλο ποιότητας.',
        apply: 'Κάντε αίτηση τώρα',
        items: {
          pliage: {
            title: 'Δίπλωμα Φυλλαδίων',
            desc: 'Δημιουργία και δίπλωμα διαφημιστικών φυλλαδίων. Απλή και επαναλαμβανόμενη χειρωνακτική εργασία.'
          },
          pli: {
            title: 'Εμφακέλωση',
            desc: 'Εισαγωγή εγγράφων σε φακέλους. Ιδανικό για εργασία ακριβείας.'
          },
          emballage: {
            title: 'Συσκευασία & Πακετάρισμα',
            desc: 'Συσκευασία ελαφρών προϊόντων και προετοιμασία δεμάτων για αποστολή.'
          },
          etiquetage: {
            title: 'Ετικετάρισμα Μπουκαλιών',
            desc: 'Ετικετάρισμα καλλυντικών προϊόντων και αρωμάτων. Παρέχεται εξοπλισμός, κύκλος 28 ημερών.'
          },
          livraison: {
            title: 'Απλοποιημένη Παράδοση',
            desc: 'Εβδομαδιαία ή μηνιαία παραλαβή της παραγωγής σας απευθείας από το σπίτι σας.'
          }
        }
      },
      gallery: {
        badge: 'Πραγματικές Εικονογραφήσεις & Επάγγελμα',
        title: 'Η εργασία σε',
        titleAccent: 'εικόνες',
        desc: 'Οπτικοποιήστε συγκεκριμένα τα βασικά στάδια της μελλοντικής σας αποστολής: από το ακριβές ετικετάρισμα έως τον αυστηρό ποιοτικό έλεγχο.',
        items: {
          etiquetage: {
            title: 'Διαδικασία Ετικεταρίσματος',
            desc: 'Πραγματική επίδειξη της χρήσης του χειροκίνητου ετικετογράφου.'
          },
          pliage: {
            title: 'Τεχνική Διπλώματος',
            desc: 'Επεξηγηματικό βίντεο που δείχνει το δίπλωμα φυλλαδίων.'
          },
          qualite: {
            title: 'Ποιοτικός Έλεγχος',
            desc: 'Επαλήθευση ευθυγράμμισης και καθαριότητας.'
          },
          logistique: {
            title: 'Εφοδιαστική',
            desc: 'Διαδικασία παραλαβής και παράδοσης.'
          },
          materiel: {
            title: 'Επαγγελματικός Εξοπλισμός',
            desc: 'Επιτραπέζιος εφαρμογέας ετικετών.'
          },
          fini: {
            title: 'Τελική Παραγωγή',
            desc: 'Παρτίδα ετικεταρισμένων καλλυντικών φιαλιδίων.'
          }
        },
        formation: {
          title: 'Περιλαμβάνεται εκπαίδευση',
          desc: 'Δεν περιοριζόμαστε μόνο στην παράδοση των μηχανημάτων. Κάθε συνεργάτης λαμβάνει μια πλήρη εκπαίδευση βίντεο και ένα λεπτομερές εγχειρίδιο χρήσης για να κατακτήσει το ετικετάρισμα και τη συσκευασία σε λίγες μόνο ώρες.'
        }
      },
      faq: {
        badge: 'Συχνές Ερωτήσεις',
        title: 'Όλα όσα πρέπει να',
        titleAccent: 'γνωρίζετε',
        desc: 'Έχετε ερωτήσεις σχετικά με τη λειτουργία της EDIFLOR; Βρείτε εδώ τις απαντήσεις στις πιο συνηθισμένες ερωτήσεις των μελλοντικών μας συνεργατών.',
        items: {
          q1: {
            q: 'Πώς λειτουργεί η πρόσληψη;',
            a: 'Η διαδικασία είναι απλή: κάνετε αίτηση μέσω της φόρμας μας, μελετάμε το προφίλ σας και, εάν επιλεγείτε, σας στέλνουμε τον εξοπλισμό και μια πλήρη εκπαίδευση.'
          },
          q2: {
            q: 'Πρέπει να πληρώσω για τον εξοπλισμό;',
            a: 'Όχι, η EDIFLOR παρέχει όλο τον απαραίτητο εξοπλισμό (ετικετογράφο, προϊόντα, ετικέτες).'
          },
          q3: {
            q: 'Πώς γίνεται η παράδοση;',
            a: 'Η εταιρεία έχει ορισμένες απαιτήσεις που σχετίζονται με το πραγματικό κόστος παράδοσης του μηχανήματος (απόσταση, βάρος, χειρισμός) και τις νομικές υποχρεώσεις. Η εταιρεία απαιτεί από τους νέους υπαλλήλους να αναλάβουν τα έξοδα παράδοσης. Μπορείτε να είστε σίγουροι ότι θα πληρώσετε αυτά τα έξοδα μετά την υπογραφή της σύμβασης εργασίας σας.'
          },
          q4: {
            q: 'Μπορώ να εργαστώ με τον δικό μου ρυθμό;',
            a: 'Ναι, εφόσον ο στόχος παραγωγής επιτυγχάνεται στον κύκλο των 28 ημερών, οργανώνετε το χρόνο σας όπως επιθυμείτε.'
          },
          q5: {
            q: 'Υπάρχει εκπαίδευση;',
            a: 'Απολύτως. Κάθε νέος συνεργάτης λαμβάνει ένα κιτ εκπαίδευσης βίντεο και ένα λεπτομερές εγχειρίδιο για να κατακτήσει τις τεχνικές κινήσεις.'
          },
          q6: {
            q: 'Πώς πληρώνομαι;',
            a: 'Οι πληρωμές γίνονται με τραπεζικό έμβασμα κάθε μήνα, μετά την παραλαβή και την επαλήθευση της παραγωγής σας.'
          }
        }
      },
      contact: {
        badge: 'Επικοινωνήστε μαζί μας',
        title: 'Μια ερώτηση; Ένα έργο; Ας μιλήσουμε γι\' αυτό σήμερα.',
        desc: 'Η ομάδα μας είναι στη διάθεσή σας για να απαντήσει σε όλες τις ερωτήσεις σας σχετικά με τις υπηρεσίες συσκευασίας στο σπίτι.',
        phone: 'Τηλέφωνο',
        address: 'Διεύθυνση',
        form: {
          nom: 'Επώνυμο',
          name: 'Επώνυμο',
          email: 'Email',
          subject: 'Θέμα',
          message: 'Το μήνυμά σας...',
          submit: 'Αποστολή μηνύματος',
          submitting: 'Αποστολή...',
          success: 'Το μήνυμα στάλθηκε με επιτυχία!',
          another: 'Αποστολή άλλου μηνύματος'
        },
        legal: {
          title: 'Νομικές Πληροφορίες',
          activity: 'Δραστηριότητα',
          activityValue: 'Τυπογραφείο και χονδρικό εμπόριο',
          creation: 'Δημιουργία',
          creationValue: '15/04/1998',
          manager: 'Διευθυντής',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Μετοχικό Κεφάλαιο',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Νομική μορφή',
          formValue: 'SARL',
          tva: 'Αριθμός ΦΠΑ',
          rcs: 'Αριθμός RCS'
        }
      },
      footer: {
        desc: 'Ειδικός στη διαχείριση εγκαταστάσεων και επιχειρηματικών υπηρεσιών. Δημιουργούμε υγιή και παραγωγικά περιβάλλοντα εργασίας.',
        nav: 'Πλοήγηση',
        links: {
          title: 'Πλοήγηση'
        },
        services: 'Υπηρεσίες',
        contact: 'Επικοινωνία',
        newsletter: {
          title: 'Newsletter',
          desc: 'Μείνετε ενημερωμένοι για τα τελευταία νέα και τις προσφορές εργασίας μας.',
          success: 'Εγγραφήκατε με επιτυχία!',
          placeholder: 'Το email σας...'
        },
        rights: '© 2026 EDIFLOR. Με την επιφύλαξη παντός δικαιώματος.',
        legal: 'Νομική Σημείωση',
        privacy: 'Πολιτική Απορρήτου',
        cookies: 'Cookies'
      }
    }
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        about: '회사 소개',
        services: '채용',
        gallery: '갤러리',
        faq: '자주 묻는 질문',
        careers: '채용',
        contact: '문의하기',
        language: '언어'
      },
      hero: {
        badge: '2026년 채용 진행 중',
        title: '자유 시간을',
        titleAccent: '보장된 수입으로 바꾸세요',
        desc: '가정용 포장 분야의 선두주자인 EDIFLOR에 합류하세요. 집에서 럭셔리 제품 라벨링을 하고 매월 고정 순수익을 얻으세요.',
        cta: '지금 지원하기',
        secondaryCta: '서비스 둘러보기',
        stats: {
          salary: '보장된 수입',
          salaryDesc: '고정 순수익',
          partners: '500명 이상',
          partnersDesc: '활동 중인 파트너',
          satisfaction: '98%',
          satisfactionDesc: '만족도',
          community: '활발한 커뮤니티에 참여하세요',
          quality: '품질 보증',
          qualityDesc: 'ISO 9001 인증 프로세스',
          topRated: '최고 등급',
          topRatedDesc: '2026년 최고의 재택 근무 프로그램 선정'
        }
      },
      about: {
        badge: '우리는 누구인가요?',
        title: '가정 서비스의',
        titleAccent: '탁월함',
        desc1: '10년 이상 EDIFLOR는 기업의 정밀 물류를 지원하는 동시에 수백 명의 개인에게 유연한 업무 기회를 제공해 왔습니다.',
        desc2: '우리의 사명은 간단합니다. 산업적 엄격함과 재택 근무의 유연성을 결합하는 것입니다. 귀하가 업무를 성공적으로 수행할 수 있도록 필요한 모든 장비를 제공합니다.',
        more: '우리의 역사에 대해 더 알아보기',
        points: {
          p1: '전문 장비 무료 제공',
          p2: '포괄적인 교육 및 지속적인 지원',
          p3: '배송 및 수거 물류 포함',
          p4: '안정적이고 안전한 고용 계약'
        }
      },
      services: {
        badge: '우리의 서비스 및 직무',
        title: '간단한 업무, 실질적인',
        titleAccent: '영향력',
        desc: '재택 파트너에게 제공되는 다양한 직무를 확인해 보세요. 모든 업무는 엄격한 품질 프로토콜에 따라 관리됩니다.',
        apply: '지금 지원하기',
        items: {
          pliage: {
            title: '전단지 접기',
            desc: '광고 전단지 제작 및 접기. 간단하고 반복적인 수작업입니다.'
          },
          pli: {
            title: '봉투 삽입',
            desc: '봉투에 서류 넣기. 정밀한 작업에 이상적입니다.'
          },
          emballage: {
            title: '포장 및 패키징',
            desc: '가벼운 제품 포장 및 배송용 박스 준비.'
          },
          etiquetage: {
            title: '병 라벨링',
            desc: '화장품 및 향수 제품 라벨링. 장비 제공, 28일 주기.'
          },
          livraison: {
            title: '간편한 배송',
            desc: '매주 또는 매월 귀하의 집에서 직접 생산품을 수거합니다.'
          }
        }
      },
      gallery: {
        badge: '실제 현장 및 직무',
        title: '이미지로 보는',
        titleAccent: '업무',
        desc: '정밀한 라벨링부터 엄격한 품질 관리까지, 귀하의 미래 업무의 주요 단계를 확인해 보세요.',
        items: {
          etiquetage: {
            title: '라벨링 프로세스',
            desc: '수동 라벨러 사용의 실제 시연.'
          },
          pliage: {
            title: '접기 기술',
            desc: '전단지 접기를 보여주는 설명 영상.'
          },
          qualite: {
            title: '품질 관리',
            desc: '정렬 및 청결 상태 확인.'
          },
          logistique: {
            title: '물류',
            desc: '수거 및 배송 프로세스.'
          },
          materiel: {
            title: '전문 장비',
            desc: '탁상용 라벨 부착기.'
          },
          fini: {
            title: '완성된 제품',
            desc: '라벨링이 완료된 화장품 병 세트.'
          }
        },
        formation: {
          title: '교육 포함',
          desc: '우리는 단순히 기계만 배송하지 않습니다. 모든 파트너는 단 몇 시간 만에 라벨링과 포장을 마스터할 수 있도록 전체 영상 교육과 상세한 사용자 매뉴얼을 받게 됩니다.'
        }
      },
      faq: {
        badge: '자주 묻는 질문',
        title: '알아야 할',
        titleAccent: '모든 것',
        desc: 'EDIFLOR의 운영 방식에 대해 궁금한 점이 있으신가요? 미래의 파트너들이 가장 자주 묻는 질문에 대한 답변을 여기서 확인하세요.',
        items: {
          q1: {
            q: '채용은 어떻게 진행되나요?',
            a: '프로세스는 간단합니다. 양식을 통해 지원하시면 저희가 귀하의 프로필을 검토하고, 선정되시면 장비와 전체 교육 자료를 보내드립니다.'
          },
          q2: {
            q: '장비 비용을 지불해야 하나요?',
            a: '아니요, EDIFLOR에서 필요한 모든 장비(라벨러, 제품, 라벨)를 제공합니다.'
          },
          q3: {
            q: '배송은 어떻게 이루어지나요?',
            a: '회사는 기계의 실제 배송 비용(거리, 무게, 취급) 및 법적 의무와 관련된 특정 요구 사항이 있습니다. 회사는 신입 사원이 배송비를 부담할 것을 요구합니다. 고용 계약서 서명 후에 이 비용을 지불하게 되므로 안심하셔도 됩니다.'
          },
          q4: {
            q: '내 속도에 맞춰 일할 수 있나요?',
            a: '네, 28일 주기 내에 생산 목표만 달성한다면 원하는 대로 시간을 구성할 수 있습니다.'
          },
          q5: {
            q: '교육이 제공되나요?',
            a: '물론입니다. 모든 신규 파트너는 기술적인 동작을 마스터할 수 있도록 영상 교육 키트와 상세 매뉴얼을 받게 됩니다.'
          },
          q6: {
            q: '급여는 어떻게 지급되나요?',
            a: '급여는 매달 생산물을 수령하고 확인한 후 은행 송금으로 지급됩니다.'
          }
        }
      },
      contact: {
        badge: '문의하기',
        title: '궁금한 점이 있으신가요? 프로젝트가 있으신가요? 오늘 바로 이야기해 보세요.',
        desc: '저희 팀은 가정용 포장 서비스에 관한 모든 질문에 답변해 드릴 준비가 되어 있습니다.',
        phone: '전화',
        address: '주소',
        form: {
          nom: '성',
          name: '성',
          email: '이메일',
          subject: '제목',
          message: '메시지...',
          submit: '메시지 보내기',
          submitting: '보내는 중...',
          success: '메시지가 성공적으로 전송되었습니다!',
          another: '다른 메시지 보내기'
        },
        legal: {
          title: '법적 정보',
          activity: '활동',
          activityValue: '인쇄 및 도매업',
          creation: '설립',
          creationValue: '1998년 4월 15일',
          manager: '관리자',
          managerValue: 'Legrand Patrick MENIS',
          capital: '자본금',
          capitalValue: '400,000.00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: '법적 형태',
          formValue: 'SARL',
          tva: '부가가치세 번호',
          rcs: 'RCS 번호'
        }
      },
      footer: {
        desc: '시설 관리 및 비즈니스 서비스 전문가. 우리는 건강하고 생산적인 업무 환경을 조성합니다.',
        nav: '네비게이션',
        links: {
          title: '네비게이션'
        },
        services: '서비스',
        contact: '문의하기',
        newsletter: {
          title: '뉴스레터',
          desc: '최신 뉴스 및 채용 정보를 받아보세요.',
          success: '성공적으로 구독되었습니다!',
          placeholder: '이메일 주소...'
        },
        rights: '© 2026 EDIFLOR. All rights reserved.',
        legal: '법적 고지',
        privacy: '개인정보 처리방침',
        cookies: 'Cookies'
      }
    }
  },
  vi: {
    translation: {
      nav: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        services: 'Tuyển dụng',
        gallery: 'Thư viện',
        faq: 'Câu hỏi thường gặp',
        careers: 'Tuyển dụng',
        contact: 'Liên hệ',
        language: 'Ngôn ngữ'
      },
      hero: {
        badge: 'Tuyển dụng năm 2026 đang diễn ra',
        title: 'Biến thời gian rảnh',
        titleAccent: 'thành thu nhập ổn định',
        desc: 'Gia nhập EDIFLOR, đơn vị hàng đầu trong lĩnh vực đóng gói tại nhà. Dán nhãn sản phẩm cao cấp tại nhà và nhận thu nhập ròng cố định hàng tháng.',
        cta: 'Ứng tuyển ngay',
        secondaryCta: 'Khám phá dịch vụ',
        stats: {
          salary: 'Thu nhập đảm bảo',
          salaryDesc: 'Thu nhập ròng cố định',
          partners: '500+',
          partnersDesc: 'Đối tác đang hoạt động',
          satisfaction: '98%',
          satisfactionDesc: 'Mức độ hài lòng',
          community: 'Tham gia cộng đồng năng động',
          quality: 'Đảm bảo chất lượng',
          qualityDesc: 'Quy trình đạt chuẩn ISO 9001',
          topRated: 'Đánh giá cao nhất',
          topRatedDesc: 'Chương trình làm việc tại nhà tốt nhất năm 2026'
        }
      },
      about: {
        badge: 'Chúng tôi là ai?',
        title: 'Sự xuất sắc trong',
        titleAccent: 'dịch vụ tại nhà',
        desc1: 'Trong hơn 10 năm, EDIFLOR đã hỗ trợ các doanh nghiệp trong lĩnh vực hậu cần chính xác đồng thời mang lại cơ hội làm việc linh hoạt cho hàng trăm cá nhân.',
        desc2: 'Sứ mệnh của chúng tôi rất đơn giản: kết hợp sự nghiêm túc của công nghiệp với sự linh hoạt của làm việc tại nhà. Chúng tôi cung cấp tất cả các thiết bị cần thiết để bạn thành công trong công việc.',
        more: 'Tìm hiểu thêm về lịch sử của chúng tôi',
        points: {
          p1: 'Cung cấp thiết bị chuyên dụng miễn phí',
          p2: 'Đào tạo toàn diện và hỗ trợ liên tục',
          p3: 'Bao gồm hậu cần giao hàng và thu hồi',
          p4: 'Hợp đồng lao động ổn định và an toàn'
        }
      },
      services: {
        badge: 'Dịch vụ và Vị trí của chúng tôi',
        title: 'Công việc đơn giản,',
        titleAccent: 'tác động thực tế',
        desc: 'Khám phá các vị trí khác nhau dành cho đối tác tại nhà của chúng tôi. Tất cả các nhiệm vụ đều được quản lý theo các quy trình chất lượng nghiêm ngặt.',
        apply: 'Ứng tuyển ngay',
        items: {
          pliage: {
            title: 'Gấp tờ rơi',
            desc: 'Tạo và gấp tờ rơi quảng cáo. Một công việc thủ công đơn giản và lặp đi lặp lại.'
          },
          pli: {
            title: 'Bỏ phong bì',
            desc: 'Cho tài liệu vào phong bì. Lý tưởng cho những người thích sự tỉ mỉ.'
          },
          emballage: {
            title: 'Đóng gói và Bao bì',
            desc: 'Đóng gói các sản phẩm nhẹ và chuẩn bị thùng carton để vận chuyển.'
          },
          etiquetage: {
            title: 'Dán nhãn chai',
            desc: 'Dán nhãn cho các sản phẩm mỹ phẩm và nước hoa. Thiết bị được cung cấp, chu kỳ 28 ngày.'
          },
          livraison: {
            title: 'Giao hàng tận nơi',
            desc: 'Chúng tôi thu hồi sản phẩm trực tiếp tại nhà bạn hàng tuần hoặc hàng tháng.'
          }
        }
      },
      gallery: {
        badge: 'Hiện trường và Công việc thực tế',
        title: 'Công việc',
        titleAccent: 'qua hình ảnh',
        desc: 'Từ việc dán nhãn tỉ mỉ đến kiểm soát chất lượng nghiêm ngặt, hãy khám phá các giai đoạn chính trong công việc tương lai của bạn.',
        items: {
          etiquetage: {
            title: 'Quy trình dán nhãn',
            desc: 'Minh họa thực tế việc sử dụng máy dán nhãn thủ công.'
          },
          pliage: {
            title: 'Kỹ thuật gấp',
            desc: 'Video hướng dẫn cách gấp tờ rơi.'
          },
          qualite: {
            title: 'Kiểm soát chất lượng',
            desc: 'Kiểm tra độ thẳng hàng và độ sạch sẽ.'
          },
          logistique: {
            title: 'Hậu cần',
            desc: 'Quy trình thu hồi và giao hàng.'
          },
          materiel: {
            title: 'Thiết bị chuyên dụng',
            desc: 'Máy dán nhãn để bàn.'
          },
          fini: {
            title: 'Sản phẩm hoàn thiện',
            desc: 'Bộ chai mỹ phẩm đã được dán nhãn.'
          }
        },
        formation: {
          title: 'Bao gồm đào tạo',
          desc: 'Chúng tôi không chỉ giao máy móc. Mỗi đối tác đều nhận được khóa đào tạo qua video đầy đủ và hướng dẫn sử dụng chi tiết để thành thạo việc dán nhãn và đóng gói chỉ trong vài giờ.'
        }
      },
      faq: {
        badge: 'Câu hỏi thường gặp',
        title: 'Mọi thứ bạn',
        titleAccent: 'cần biết',
        desc: 'Bạn có thắc mắc về cách thức hoạt động của EDIFLOR? Tìm câu trả lời cho những câu hỏi thường gặp nhất từ các đối tác tương lai của chúng tôi tại đây.',
        items: {
          q1: {
            q: 'Quy trình tuyển dụng như thế nào?',
            a: 'Quy trình rất đơn giản: bạn ứng tuyển qua biểu mẫu, chúng tôi xem xét hồ sơ của bạn và nếu được chọn, chúng tôi sẽ gửi thiết bị và tài liệu đào tạo đầy đủ cho bạn.'
          },
          q2: {
            q: 'Tôi có phải trả tiền cho thiết bị không?',
            a: 'Không, EDIFLOR cung cấp tất cả các thiết bị cần thiết (máy dán nhãn, sản phẩm, nhãn dán).'
          },
          q3: {
            q: 'Việc giao hàng diễn ra như thế nào?',
            a: 'Công ty có các yêu cầu cụ thể liên quan đến chi phí thực tế của việc giao máy móc (khoảng cách, trọng lượng, bốc xếp) và các nghĩa vụ pháp lý. Công ty yêu cầu nhân viên mới phải chịu chi phí giao hàng. Bạn có thể yên tâm vì chi phí này sẽ được thanh toán sau khi ký hợp đồng lao động.'
          },
          q4: {
            q: 'Tôi có thể làm việc theo tốc độ của riêng mình không?',
            a: 'Có, bạn tự sắp xếp thời gian của mình miễn là đạt được mục tiêu sản xuất trong chu kỳ 28 ngày.'
          },
          q5: {
            q: 'Có đào tạo không?',
            a: 'Chắc chắn rồi. Mỗi đối tác mới đều nhận được một bộ đào tạo qua video và hướng dẫn chi tiết để thành thạo các thao tác kỹ thuật.'
          },
          q6: {
            q: 'Tôi được thanh toán như thế nào?',
            a: 'Thanh toán được thực hiện bằng chuyển khoản ngân hàng hàng tháng, sau khi nhận và xác minh sản phẩm của bạn.'
          }
        }
      },
      contact: {
        badge: 'Liên hệ với chúng tôi',
        title: 'Bạn có thắc mắc? Một dự án? Hãy trao đổi với chúng tôi ngay hôm nay.',
        desc: 'Đội ngũ của chúng tôi sẵn sàng trả lời tất cả các câu hỏi của bạn về dịch vụ đóng gói tại nhà.',
        phone: 'Điện thoại',
        address: 'Địa chỉ',
        form: {
          nom: 'Họ',
          name: 'Tên',
          email: 'Email',
          subject: 'Chủ đề',
          message: 'Tin nhắn...',
          submit: 'Gửi tin nhắn',
          submitting: 'Đang gửi...',
          success: 'Tin nhắn đã được gửi thành công!',
          another: 'Gửi tin nhắn khác'
        },
        legal: {
          title: 'Thông tin pháp lý',
          activity: 'Hoạt động',
          activityValue: 'In ấn và bán buôn',
          creation: 'Ngày thành lập',
          creationValue: '15 tháng 4 năm 1998',
          manager: 'Người quản lý',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Vốn điều lệ',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Hình thức pháp lý',
          formValue: 'SARL',
          tva: 'Mã số thuế GTGT',
          rcs: 'Số RCS'
        }
      },
      footer: {
        desc: 'Chuyên gia về quản lý cơ sở vật chất và dịch vụ kinh doanh. Chúng tôi tạo ra môi trường làm việc lành mạnh và năng suất.',
        nav: 'Điều hướng',
        links: {
          title: 'Điều hướng'
        },
        services: 'Dịch vụ',
        contact: 'Liên hệ',
        newsletter: {
          title: 'Bản tin',
          desc: 'Nhận tin tức và cơ hội tuyển dụng mới nhất.',
          success: 'Đăng ký thành công!',
          placeholder: 'Địa chỉ email của bạn...'
        },
        rights: '© 2026 EDIFLOR. Bảo lưu mọi quyền.',
        legal: 'Thông báo pháp lý',
        privacy: 'Chính sách bảo mật',
        cookies: 'Cookies'
      }
    }
  },
  bg: {
    translation: {
      nav: {
        home: 'Начало',
        about: 'За нас',
        services: 'Набиране на персонал',
        gallery: 'Галерия',
        faq: 'ЧЗВ',
        careers: 'Набиране на персонал',
        contact: 'Контакт',
        language: 'Език'
      },
      hero: {
        badge: 'Набирането на персонал за 2026 г. е в ход',
        title: 'Превърнете свободното си време',
        titleAccent: 'в гарантиран доход',
        desc: 'Присъединете се към EDIFLOR, лидер в опаковането у дома. Етикетирайте луксозни продукти от вкъщи и получавайте фиксиран месечен нетен доход.',
        cta: 'Кандидатствайте сега',
        secondaryCta: 'Разгледайте услугите',
        stats: {
          salary: 'Гарантиран доход',
          salaryDesc: 'Фиксиран нетен доход',
          partners: '500+',
          partnersDesc: 'Активни партньори',
          satisfaction: '98%',
          satisfactionDesc: 'Удовлетвореност',
          community: 'Присъединете се към динамична общност',
          quality: 'Гаранция за качество',
          qualityDesc: 'Процеси, сертифицирани по ISO 9001',
          topRated: 'Най-високо оценени',
          topRatedDesc: 'Избрана за най-добра програма за работа от вкъщи за 2026 г.'
        }
      },
      about: {
        badge: 'Кои сме ние?',
        title: 'Превъзходство в',
        titleAccent: 'услугите у дома',
        desc1: 'Повече от 10 години EDIFLOR подкрепя компаниите в тяхната прецизна логистика, като същевременно предлага гъвкави възможности за работа на стотици хора.',
        desc2: 'Нашата мисия е проста: да комбинираме индустриалната строгост с гъвкавостта на работата от вкъщи. Ние предоставяме цялото необходимо оборудване, за да успеете в задачите си.',
        more: 'Научете повече за нашата история',
        points: {
          p1: 'Безплатно предоставяне на професионално оборудване',
          p2: 'Цялостно обучение и постоянна подкрепа',
          p3: 'Включена логистика за доставка и вземане',
          p4: 'Стабилен и сигурен трудов договор'
        }
      },
      services: {
        badge: 'Нашите услуги и позиции',
        title: 'Обикновени задачи, реално',
        titleAccent: 'въздействие',
        desc: 'Открийте различните позиции, достъпни за нашите партньори у дома. Всички задачи се управляват съгласно строги протоколи за качество.',
        apply: 'Кандидатствайте сега',
        items: {
          pliage: {
            title: 'Сгъване на листовки',
            desc: 'Създаване и сгъване на рекламни листовки. Проста и повтаряща се ръчна работа.'
          },
          pli: {
            title: 'Пликоване',
            desc: 'Поставяне на документи в пликове. Идеално за тези, които обичат прецизността.'
          },
          emballage: {
            title: 'Опаковане и пакетиране',
            desc: 'Опаковане на леки продукти и подготовка на кашони за изпращане.'
          },
          etiquetage: {
            title: 'Етикетиране на бутилки',
            desc: 'Етикетиране на козметични и парфюмерийни продукти. Предоставено оборудване, 28-дневен цикъл.'
          },
          livraison: {
            title: 'Лесна доставка',
            desc: 'Ние вземаме вашата продукция директно от дома ви всяка седмица или месец.'
          }
        }
      },
      gallery: {
        badge: 'Реални сцени и задачи',
        title: 'Работата',
        titleAccent: 'в снимки',
        desc: 'От прецизното етикетиране до строгия контрол на качеството, открийте основните етапи на вашата бъдеща работа.',
        items: {
          etiquetage: {
            title: 'Процес на етикетиране',
            desc: 'Реална демонстрация на използването на ръчен етикетировчик.'
          },
          pliage: {
            title: 'Техника на сгъване',
            desc: 'Обяснително видео, показващо сгъването на листовки.'
          },
          qualite: {
            title: 'Контрол на качеството',
            desc: 'Проверка на подравняването и чистотата.'
          },
          logistique: {
            title: 'Логистика',
            desc: 'Процес на вземане и доставка.'
          },
          materiel: {
            title: 'Професионално оборудване',
            desc: 'Настолна машина за поставяне на етикети.'
          },
          fini: {
            title: 'Готов продукт',
            desc: 'Комплект козметични бутилки, готови за етикетиране.'
          }
        },
        formation: {
          title: 'Включено обучение',
          desc: 'Ние не доставяме само машини. Всеки партньор получава пълно видео обучение и подробно ръководство за потребителя, за да овладее етикетирането и опаковането само за няколко часа.'
        }
      },
      faq: {
        badge: 'Често задавани въпроси',
        title: 'Всичко, което трябва',
        titleAccent: 'да знаете',
        desc: 'Имате въпроси относно начина на работа на EDIFLOR? Намерете отговорите на най-често задаваните въпроси от нашите бъдещи партньори тук.',
        items: {
          q1: {
            q: 'Как протича набирането на персонал?',
            a: 'Процесът е прост: кандидатствате чрез формуляра, ние преглеждаме вашия профил и ако бъдете избрани, ви изпращаме оборудването и пълните материали за обучение.'
          },
          q2: {
            q: 'Трябва ли да плащам за оборудването?',
            a: 'Не, EDIFLOR предоставя цялото необходимо оборудване (етикетировчик, продукти, етикети).'
          },
          q3: {
            q: 'Как се извършва доставката?',
            a: 'Компанията има специфични изисквания, свързани с реалните разходи за доставка на машините (разстояние, тегло, обработка) и законови задължения. Компанията изисква от новия служител да поеме разходите за доставка. Можете да бъдете спокойни, тъй като тези разходи се заплащат след подписване на трудовия договор.'
          },
          q4: {
            q: 'Мога ли да работя със собствено темпо?',
            a: 'Да, вие организирате времето си, стига да постигате производствените цели в рамките на 28-дневния цикъл.'
          },
          q5: {
            q: 'Осигурено ли е обучение?',
            a: 'Разбира се. Всеки нов партньор получава комплект за видео обучение и подробно ръководство за овладяване на техническите жестове.'
          },
          q6: {
            q: 'Как ми се плаща?',
            a: 'Плащанията се извършват по банков път всеки месец, след получаване и проверка на вашата продукция.'
          }
        }
      },
      contact: {
        badge: 'Свържете се с нас',
        title: 'Имате въпрос? Проект? Говорете с нас днес.',
        desc: 'Нашият екип е на разположение да отговори на всички ваши въпроси относно услугите за опаковане у дома.',
        phone: 'Телефон',
        address: 'Адрес',
        form: {
          nom: 'Фамилия',
          name: 'Име',
          email: 'Имейл',
          subject: 'Тема',
          message: 'Съобщение...',
          submit: 'Изпрати съобщение',
          submitting: 'Изпращане...',
          success: 'Съобщението е изпратено успешно!',
          another: 'Изпрати друго съобщение'
        },
        legal: {
          title: 'Правна информация',
          activity: 'Дейност',
          activityValue: 'Печат и търговия на едро',
          creation: 'Дата на създаване',
          creationValue: '15 април 1998 г.',
          manager: 'Управител',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Капитал',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Правна форма',
          formValue: 'SARL',
          tva: 'ДДС номер',
          rcs: 'RCS номер'
        }
      },
      footer: {
        desc: 'Експерт в управлението на съоръжения и бизнес услуги. Ние създаваме здравословна и продуктивна работна среда.',
        nav: 'Навигация',
        links: {
          title: 'Навигация'
        },
        services: 'Услуги',
        contact: 'Контакт',
        newsletter: {
          title: 'Бюлетин',
          desc: 'Получавайте най-новите новини и възможности за работа.',
          success: 'Успешно абониране!',
          placeholder: 'Вашият имейл адрес...'
        },
        rights: '© 2026 EDIFLOR. Всички права запазени.',
        legal: 'Правно известие',
        privacy: 'Политика за поверителност',
        cookies: 'Бисквитки'
      }
    }
  },
  cs: {
    translation: {
      nav: {
        home: 'Domů',
        about: 'O nás',
        services: 'Nábor',
        gallery: 'Galerie',
        faq: 'Často kladené dotazy',
        careers: 'Nábor',
        contact: 'Kontakt',
        language: 'Jazyk'
      },
      hero: {
        badge: 'Nábor pro rok 2026 probíhá',
        title: 'Proměňte svůj volný čas',
        titleAccent: 'v garantovaný příjem',
        desc: 'Připojte se k EDIFLOR, lídrovi v domácím balení. Štítkujte luxusní produkty z domova a získejte fixní měsíční čistý příjem.',
        cta: 'Přihlásit se nyní',
        secondaryCta: 'Prozkoumat služby',
        stats: {
          salary: 'Garantovaný příjem',
          salaryDesc: 'Fixní čistý příjem',
          partners: '500+',
          partnersDesc: 'Aktivních partnerů',
          satisfaction: '98%',
          satisfactionDesc: 'Spokojenost',
          community: 'Připojte se k dynamické komunitě',
          quality: 'Záruka kvality',
          qualityDesc: 'Procesy certifikované podle ISO 9001',
          topRated: 'Nejlépe hodnocené',
          topRatedDesc: 'Vybráno jako nejlepší program práce z domova pro rok 2026'
        }
      },
      about: {
        badge: 'Kdo jsme?',
        title: 'Excelence v',
        titleAccent: 'domácích službách',
        desc1: 'Již více než 10 let EDIFLOR podporuje firmy v jejich precizní logistice a zároveň nabízí flexibilní pracovní příležitosti stovkám jednotlivců.',
        desc2: 'Naše mise je jednoduchá: spojit průmyslovou přísnost s flexibilitou práce z domova. Poskytujeme veškeré potřebné vybavení, abyste ve svých úkolech uspěli.',
        more: 'Dozvědět se více o naší historii',
        points: {
          p1: 'Bezplatné poskytnutí profesionálního vybavení',
          p2: 'Komplexní školení a neustálá podpora',
          p3: 'Logistika doručení a vyzvednutí v ceně',
          p4: 'Stabilní a bezpečná pracovní smlouva'
        }
      },
      services: {
        badge: 'Naše služby a pozice',
        title: 'Jednoduché úkoly, reálný',
        titleAccent: 'dopad',
        desc: 'Objevte různé pozice dostupné pro naše domácí partnery. Všechny úkoly jsou řízeny podle přísných kvalitativních protokolů.',
        apply: 'Přihlásit se nyní',
        items: {
          pliage: {
            title: 'Skládání letáků',
            desc: 'Tvorba a skládání reklamních letáků. Jednoduchá a opakující se manuální práce.'
          },
          pli: {
            title: 'Plnění obálek',
            desc: 'Vkládání dokumentů do obálek. Ideální pro ty, kteří mají rádi preciznost.'
          },
          emballage: {
            title: 'Balení a balení',
            desc: 'Balení lehkých produktů a příprava kartonů k odeslání.'
          },
          etiquetage: {
            title: 'Štítkování lahví',
            desc: 'Štítkování kosmetických a parfémových produktů. Vybavení zajištěno, 28denní cyklus.'
          },
          livraison: {
            title: 'Snadné doručení',
            desc: 'Vaši produkci vyzvedáváme přímo u vás doma každý týden nebo měsíc.'
          }
        }
      },
      gallery: {
        badge: 'Reálné scény a úkoly',
        title: 'Práce',
        titleAccent: 'v obrazech',
        desc: 'Od precizního štítkování po přísnou kontrolu kvality, objevte hlavní fáze vaší budoucí práce.',
        items: {
          etiquetage: {
            title: 'Proces štítkování',
            desc: 'Reálná ukázka použití ručního štítkovače.'
          },
          pliage: {
            title: 'Technika skládání',
            desc: 'Instruktážní video ukazující skládání letáků.'
          },
          qualite: {
            title: 'Kontrola kvality',
            desc: 'Kontrola zarovnání a čistoty.'
          },
          logistique: {
            title: 'Logistika',
            desc: 'Proces vyzvednutí a doručení.'
          },
          materiel: {
            title: 'Profesionální vybavení',
            desc: 'Stolní stroj na nanášení štítků.'
          },
          fini: {
            title: 'Hotový produkt',
            desc: 'Sada kosmetických lahviček připravených ke štítkování.'
          }
        },
        formation: {
          title: 'Školení v ceně',
          desc: 'Nedodáváme jen stroje. Každý partner obdrží kompletní video školení a podrobný uživatelský manuál, aby zvládl štítkování a balení během několika hodin.'
        }
      },
      faq: {
        badge: 'Často kladené dotazy',
        title: 'Vše, co potřebujete',
        titleAccent: 'vědět',
        desc: 'Máte dotazy ohledně fungování EDIFLOR? Zde najdete odpovědi na nejčastější dotazy našich budoucích partnerů.',
        items: {
          q1: {
            q: 'Jak probíhá nábor?',
            a: 'Proces je jednoduchý: přihlásíte se přes formulář, my posoudíme váš profil a pokud budete vybráni, zašleme vám vybavení a kompletní školicí materiály.'
          },
          q2: {
            q: 'Musím za vybavení platit?',
            a: 'Ne, EDIFLOR poskytuje veškeré potřebné vybavení (štítkovač, produkty, štítky).'
          },
          q3: {
            q: 'Jak probíhá doručení?',
            a: 'Společnost má specifické požadavky týkající se reálných nákladů na doručení strojů (vzdálenost, hmotnost, manipulace) a zákonných povinností. Společnost vyžaduje, aby nový zaměstnanec nesl náklady na doručení. Můžete být v klidu, protože tyto náklady se platí po podpisu pracovní smlouvy.'
          },
          q4: {
            q: 'Mohu pracovat vlastním tempem?',
            a: 'Ano, svůj čas si organizujete sami, pokud dosáhnete výrobních cílů v rámci 28denního cyklu.'
          },
          q5: {
            q: 'Je zajištěno školení?',
            a: 'Samozřejmě. Každý nový partner obdrží sadu video školení a podrobný manuál pro zvládnutí technických úkonů.'
          },
          q6: {
            q: 'Jak dostanu zaplaceno?',
            a: 'Platby probíhajo bankovním převodem každý měsíc, po obdržení a ověření vaší produkce.'
          }
        }
      },
      contact: {
        badge: 'Kontaktujte nás',
        title: 'Máte dotaz? Projekt? Promluvte si s námi ještě dnes.',
        desc: 'Náš tým je k dispozici, aby odpověděl na všechny vaše dotazy týkající se služeb domácího balení.',
        phone: 'Telefon',
        address: 'Adresa',
        form: {
          nom: 'Příjmení',
          name: 'Jméno',
          email: 'Email',
          subject: 'Předmět',
          message: 'Zpráva...',
          submit: 'Odeslat zprávu',
          submitting: 'Odesílání...',
          success: 'Zpráva byla úspěšně odeslána!',
          another: 'Odeslat další zprávu'
        },
        legal: {
          title: 'Právní informace',
          activity: 'Činnost',
          activityValue: 'Tisk a velkoobchod',
          creation: 'Datum založení',
          creationValue: '15. dubna 1998',
          manager: 'Manažer',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Kapitál',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Právní forma',
          formValue: 'SARL',
          tva: 'DIČ',
          rcs: 'Číslo RCS'
        }
      },
      footer: {
        desc: 'Expert na správu zařízení a obchodní služby. Vytváříme zdravé a produktivní pracovní prostředí.',
        nav: 'Navigace',
        links: {
          title: 'Navigace'
        },
        services: 'Služby',
        contact: 'Kontakt',
        newsletter: {
          title: 'Newsletter',
          desc: 'Dostávejte nejnovější zprávy a pracovní příležitosti.',
          success: 'Úspěšně přihlášeno!',
          placeholder: 'Vaše emailová adresa...'
        },
        rights: '© 2026 EDIFLOR. Všechna práva vyhrazena.',
        legal: 'Právní upozornění',
        privacy: 'Zásady ochrany osobních údajů',
        cookies: 'Cookies'
      }
    }
  },
  da: {
    translation: {
      nav: {
        home: 'Hjem',
        about: 'Om os',
        services: 'Rekruttering',
        gallery: 'Galleri',
        faq: 'Ofte stillede spørgsmål',
        careers: 'Rekruttering',
        contact: 'Kontakt',
        language: 'Sprog'
      },
      hero: {
        badge: 'Rekruttering for 2026 er i gang',
        title: 'Gør din fritid',
        titleAccent: 'til en garanteret indkomst',
        desc: 'Bliv en del af EDIFLOR, førende inden for hjemmepakning. Mærk luksusprodukter hjemmefra og få en fast månedlig nettoindkomst.',
        cta: 'Ansøg nu',
        secondaryCta: 'Udforsk tjenester',
        stats: {
          salary: 'Garanteret indkomst',
          salaryDesc: 'Fast nettoindkomst',
          partners: '500+',
          partnersDesc: 'Aktive partnere',
          satisfaction: '98%',
          satisfactionDesc: 'Tilfredshed',
          community: 'Bliv en del af et dynamisk fællesskab',
          quality: 'Kvalitetsgaranti',
          qualityDesc: 'ISO 9001 certificerede processer',
          topRated: 'Topvurderet',
          topRatedDesc: 'Valgt som det bedste arbejde-hjemmefra-program for 2026'
        }
      },
      about: {
        badge: 'Hvem er vi?',
        title: 'Excellence inden for',
        titleAccent: 'hjemmeservice',
        desc1: 'I mere end 10 år har EDIFLOR støttet virksomheder i deres præcisionslogistik, samtidig med at de har tilbudt fleksible arbejdsmuligheder til hundredvis af enkeltpersoner.',
        desc2: 'Vores mission er enkel: at kombinere industriel stringens med fleksibiliteten ved at arbejde hjemmefra. Vi leverer alt det nødvendige udstyr, så du kan få succes med dine opgaver.',
        more: 'Læs mere om vores historie',
        points: {
          p1: 'Gratis levering af professionelt udstyr',
          p2: 'Omfattende træning og løbende support',
          p3: 'Leverings- og afhentningslogistik inkluderet',
          p4: 'Stabil og sikker ansættelseskontrakt'
        }
      },
      services: {
        badge: 'Vores tjenester og stillinger',
        title: 'Enkle opgaver, reel',
        titleAccent: 'indvirkning',
        desc: 'Oplev de forskellige stillinger, der er tilgængelige for vores hjemmepartnere. Alle opgaver styres i henhold til strenge kvalitetsprotokoller.',
        apply: 'Ansøg nu',
        items: {
          pliage: {
            title: 'Foldning af brochurer',
            desc: 'Oprettelse og foldning af reklamebrochurer. Et enkelt og gentaget manuelt arbejde.'
          },
          pli: {
            title: 'Kuvertering',
            desc: 'Lægge dokumenter i kuverter. Ideelt for dem, der kan lide præcision.'
          },
          emballage: {
            title: 'Indpakning og emballering',
            desc: 'Indpakning af lette produkter og klargøring af papkasser til forsendelse.'
          },
          etiquetage: {
            title: 'Mærkning af flasker',
            desc: 'Mærkning af kosmetik- og parfumeprodukter. Udstyr leveret, 28-dages cyklus.'
          },
          livraison: {
            title: 'Nem levering',
            desc: 'Vi afhenter din produktion direkte hos dig hver uge eller måned.'
          }
        }
      },
      gallery: {
        badge: 'Reelle scener og opgaver',
        title: 'Arbejdet',
        titleAccent: 'i billeder',
        desc: 'Fra præcis mærkning til streng kvalitetskontrol, oplev de vigtigste faser i dit fremtidige arbejde.',
        items: {
          etiquetage: {
            title: 'Mærkningsproces',
            desc: 'Reel demonstration af brugen af en manuel mærkningsmaskine.'
          },
          pliage: {
            title: 'Foldeteknik',
            desc: 'Forklarende video, der viser foldning af brochurer.'
          },
          qualite: {
            title: 'Kvalitetskontrol',
            desc: 'Kontrol af justering og renhed.'
          },
          logistique: {
            title: 'Logistik',
            desc: 'Afhentnings- og leveringsproces.'
          },
          materiel: {
            title: 'Professionelt udstyr',
            desc: 'Bordmodel til påsætning af etiketter.'
          },
          fini: {
            title: 'Færdigt produkt',
            desc: 'Sæt med kosmetikflasker klar til mærkning.'
          }
        },
        formation: {
          title: 'Træning inkluderet',
          desc: 'Vi leverer ikke kun maskiner. Hver partner modtager fuld videotræning og en detaljeret brugervejledning for at mestre mærkning og pakning på få timer.'
        }
      },
      faq: {
        badge: 'Ofte stillede spørgsmål',
        title: 'Alt hvad du',
        titleAccent: 'skal vide',
        desc: 'Har du spørgsmål om, hvordan EDIFLOR fungerer? Find svarene på de hyppigste spørgsmål fra vores fremtidige partnere her.',
        items: {
          q1: {
            q: 'Hvordan foregår rekrutteringen?',
            a: 'Processen er enkel: du ansøger via formularen, vi gennemgår din profil, og hvis du bliver valgt, sender vi dig udstyret og det fulde træningsmateriale.'
          },
          q2: {
            q: 'Skal jeg betale for udstyret?',
            a: 'Nej, EDIFLOR leverer alt det nødvendige udstyr (mærkningsmaskine, produkter, etiketter).'
          },
          q3: {
            q: 'Hvordan foregår leveringen?',
            a: 'Virksomheden har specifikke krav relateret til de faktiske omkostninger ved levering af maskinerne (afstand, vægt, håndtering) og juridiske forpligtelser. Virksomheden kræver, at den nye medarbejder bærer leveringsomkostningerne. Du kan være tryg, da disse omkostninger betales efter underskrift af ansættelseskontrakten.'
          },
          q4: {
            q: 'Kan jeg arbejde i mit eget tempo?',
            a: 'Ja, du organiserer selv din tid, så længe du når produktionsmålene inden for 28-dages cyklussen.'
          },
          q5: {
            q: 'Er der træning inkluderet?',
            a: 'Selvfølgelig. Hver ny partner modtager et videotræningssæt og en detaljeret vejledning til at mestre de tekniske bevægelser.'
          },
          q6: {
            q: 'Hvordan bliver jeg betalt?',
            a: 'Betalinger sker via bankoverførsel hver måned efter modtagelse og verifikation af din produktion.'
          }
        }
      },
      contact: {
        badge: 'Kontakt os',
        title: 'Har du et spørgsmål? Et projekt? Tal med os i dag.',
        desc: 'Vores team er klar til at besvare alle dine spørgsmål om hjemmepakningstjenester.',
        phone: 'Telefon',
        address: 'Adresse',
        form: {
          nom: 'Efternavn',
          name: 'Fornavn',
          email: 'E-mail',
          subject: 'Emne',
          message: 'Besked...',
          submit: 'Send besked',
          submitting: 'Sender...',
          success: 'Beskeden er sendt korrekt!',
          another: 'Send en anden besked'
        },
        legal: {
          title: 'Juridisk information',
          activity: 'Aktivitet',
          activityValue: 'Trykning og engroshandel',
          creation: 'Oprettelsesdato',
          creationValue: '15. april 1998',
          manager: 'Manager',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Kapital',
          capitalValue: '400.000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Juridisk form',
          formValue: 'SARL',
          tva: 'Momsnummer',
          rcs: 'RCS-nummer'
        }
      },
      footer: {
        desc: 'Ekspert i facility management og forretningsservice. Vi skaber sunde og produktive arbejdsmiljøer.',
        nav: 'Navigation',
        links: {
          title: 'Navigation'
        },
        services: 'Tjenester',
        contact: 'Kontakt',
        newsletter: {
          title: 'Nyhedsbrev',
          desc: 'Modtag de seneste nyheder og jobmuligheder.',
          success: 'Tilmelding lykkedes!',
          placeholder: 'Din e-mailadresse...'
        },
        rights: '© 2026 EDIFLOR. Alle rettigheder forbeholdes.',
        legal: 'Juridisk meddelelse',
        privacy: 'Privatlivspolitik',
        cookies: 'Cookies'
      }
    }
  },
  fi: {
    translation: {
      nav: {
        home: 'Koti',
        about: 'Tietoa meistä',
        services: 'Rekrytointi',
        gallery: 'Galleria',
        faq: 'UKK',
        careers: 'Rekrytointi',
        contact: 'Ota yhteyttä',
        language: 'Kieli'
      },
      hero: {
        badge: 'Vuoden 2026 rekrytointi on käynnissä',
        title: 'Muuta vapaa-aikasi',
        titleAccent: 'takuutuloksi',
        desc: 'Liity EDIFLORiin, kotipakkausalan johtajaan. Merkitse luksustuotteita kotoa käsin ja saa kiinteät kuukausittaiset nettotulot.',
        cta: 'Hae nyt',
        secondaryCta: 'Tutustu palveluihin',
        stats: {
          salary: 'Takuutulo',
          salaryDesc: 'Kiinteä nettotulo',
          partners: '500+',
          partnersDesc: 'Aktiivista kumppania',
          satisfaction: '98%',
          satisfactionDesc: 'Tyytyväisyys',
          community: 'Liity dynaamiseen yhteisöön',
          quality: 'Laatutakuu',
          qualityDesc: 'ISO 9001 -sertifioidut prosessit',
          topRated: 'Huippuluokiteltu',
          topRatedDesc: 'Valittu vuoden 2026 parhaaksi etätyöohjelmaksi'
        }
      },
      about: {
        badge: 'Keitä me olemme?',
        title: 'Erinomaisuutta',
        titleAccent: 'kotipalveluissa',
        desc1: 'Yli 10 vuoden ajan EDIFLOR on tukenut yrityksiä niiden tarkkuuslogistiikassa ja tarjonnut samalla joustavia työmahdollisuuksia sadoille yksityishenkilöille.',
        desc2: 'Missiomme on yksinkertainen: yhdistää teollinen tarkkuus ja etätyön joustavuus. Tarjoamme kaikki tarvittavat laitteet, jotta onnistut tehtävissäsi.',
        more: 'Lue lisää historiastamme',
        points: {
          p1: 'Ammattimaisten laitteiden ilmainen toimitus',
          p2: 'Kattava koulutus ja jatkuva tuki',
          p3: 'Toimitus- ja noutologistiikka sisältyy hintaan',
          p4: 'Vakaa ja turvallinen työsopimus'
        }
      },
      services: {
        badge: 'Palvelumme ja tehtävämme',
        title: 'Yksinkertaisia tehtäviä, todellista',
        titleAccent: 'vaikutusta',
        desc: 'Tutustu erilaisiin kotikumppaneillemme tarjolla oleviin tehtäviin. Kaikkia tehtäviä hallinnoidaan tiukkojen laatustandardien mukaisesti.',
        apply: 'Hae nyt',
        items: {
          pliage: {
            title: 'Esiteiden taittelu',
            desc: 'Mainosesitteiden luominen ja taittelu. Yksinkertaista ja toistuvaa manuaalista työtä.'
          },
          pli: {
            title: 'Kirjeiden kuoritus',
            desc: 'Asiakirjojen laittaminen kuoriin. Ihanteellinen tarkkuutta rakastaville.'
          },
          emballage: {
            title: 'Pakkaaminen',
            desc: 'Kevyiden tuotteiden pakkaaminen ja laatikoiden valmistelu lähetystä varten.'
          },
          etiquetage: {
            title: 'Pullojen etiketöinti',
            desc: 'Kosmetiikka- ja hajuvesituotteiden etiketöinti. Laitteet toimitetaan, 28 päivän sykli.'
          },
          livraison: {
            title: 'Helppo toimitus',
            desc: 'Noudamme tuotantosi suoraan kotoasi viikoittain tai kuukausittain.'
          }
        }
      },
      gallery: {
        badge: 'Todellisia tilanteita ja tehtäviä',
        title: 'Työ',
        titleAccent: 'kuvina',
        desc: 'Tarkasta etiketöinnistä tiukkaan laadunvalvontaan, tutustu tulevan työsi tärkeimpiin vaiheisiin.',
        items: {
          etiquetage: {
            title: 'Etiketöintiprosessi',
            desc: 'Todellinen osoitus manuaalisen etiketöintilaitteen käytöstä.'
          },
          pliage: {
            title: 'Taittelutekniikka',
            desc: 'Esiteiden taittelua esittelevä opastusvideo.'
          },
          qualite: {
            title: 'Laadunvalvonta',
            desc: 'Kohdistuksen ja puhtauden tarkistus.'
          },
          logistique: {
            title: 'Logistiikka',
            desc: 'Nouto- ja toimitusprosessi.'
          },
          materiel: {
            title: 'Ammattimaiset laitteet',
            desc: 'Pöytämallinen etiketöintikone.'
          },
          fini: {
            title: 'Valmis tuote',
            desc: 'Setti kosmetiikkapulloja valmiina etiketöitäväksi.'
          }
        },
        formation: {
          title: 'Koulutus sisältyy',
          desc: 'Emme toimita vain koneita. Jokainen kumppani saa kattavan videokoulutuksen ja yksityiskohtaisen käyttöoppaan etiketöinnin ja pakkaamisen hallitsemiseksi muutamassa tunnissa.'
        }
      },
      faq: {
        badge: 'Usein kysytyt kysymykset',
        title: 'Kaikki mitä sinun',
        titleAccent: 'tulee tietää',
        desc: 'Onko sinulla kysyttävää EDIFLORin toiminnasta? Löydät vastaukset tulevien kumppaneidemme useimmin kysymiin kysymyksiin täältä.',
        items: {
          q1: {
            q: 'Miten rekrytointi tapahtuu?',
            a: 'Prosessi on yksinkertainen: haet lomakkeella, tarkistamme profiilisi ja jos sinut valitaan, lähetämme sinulle laitteet ja kattavan koulutusmateriaalin.'
          },
          q2: {
            q: 'Pitääkö minun maksaa laitteista?',
            a: 'Ei, EDIFLOR toimittaa kaikki tarvittavat laitteet (etiketöintilaite, tuotteet, etiketit).'
          },
          q3: {
            q: 'Miten toimitus tapahtuu?',
            a: 'Yrityksellä on erityisiä vaatimuksia, jotka liittyvät koneiden toimituksen todellisiin kustannuksiin (etäisyys, paino, käsittely) ja lakisääteisiin velvoitteisiin. Yritys edellyttää, että uusi työntekijä vastaa toimituskuluista. Voit olla rauhallisin mielin, sillä nämä kulut maksetaan työsopimuksen allekirjoittamisen jälkeen.'
          },
          q4: {
            q: 'Voinko työskennellä omaan tahtiini?',
            a: 'Kyllä, järjestät aikasi itse, kunhan saavutat tuotantotavoitteet 28 päivän syklin aikana.'
          },
          q5: {
            q: 'Onko koulutusta tarjolla?',
            a: 'Tietenkin. Jokainen uusi kumppani saa videokoulutuspaketin ja yksityiskohtaisen oppaan teknisten liikkeiden hallitsemiseksi.'
          },
          q6: {
            q: 'Miten minulle maksetaan?',
            a: 'Maksut suoritetaan pankkisiirrolla kuukausittain tuotantosi vastaanottamisen ja tarkistamisen jälkeen.'
          }
        }
      },
      contact: {
        badge: 'Ota yhteyttä',
        title: 'Onko sinulla kysyttävää? Projekti? Puhu meille tänään.',
        desc: 'Tiimimme on valmis vastaamaan kaikkiin kotipakkauspalveluita koskeviin kysymyksiisi.',
        phone: 'Puhelin',
        address: 'Osoite',
        form: {
          nom: 'Sukunimi',
          name: 'Etunimi',
          email: 'Sähköposti',
          subject: 'Aihe',
          message: 'Viesti...',
          submit: 'Lähetä viesti',
          submitting: 'Lähetetään...',
          success: 'Viesti on lähetetty onnistuneesti!',
          another: 'Lähetä toinen viesti'
        },
        legal: {
          title: 'Oikeudelliset tiedot',
          activity: 'Toiminta',
          activityValue: 'Painatus ja tukkukauppa',
          creation: 'Perustamispäivä',
          creationValue: '15. huhtikuuta 1998',
          manager: 'Johtaja',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Pääoma',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Oikeudellinen muoto',
          formValue: 'SARL',
          tva: 'ALV-numero',
          rcs: 'RCS-numero'
        }
      },
      footer: {
        desc: 'Kiinteistönhallinnan ja yrityspalveluiden asiantuntija. Luomme terveellisiä ja tuottavia työympäristöjä.',
        nav: 'Navigointi',
        links: {
          title: 'Navigointi'
        },
        services: 'Palvelut',
        contact: 'Ota yhteyttä',
        newsletter: {
          title: 'Uutiskirje',
          desc: 'Vastaanota viimeisimmät uutiset ja työmahdollisuudet.',
          success: 'Tilaus onnistui!',
          placeholder: 'Sähköpostiosoitteesi...'
        },
        rights: '© 2026 EDIFLOR. Kaikki oikeudet pidätetään.',
        legal: 'Oikeudellinen huomautus',
        privacy: 'Tietosuojakäytäntö',
        cookies: 'Evästeet'
      }
    }
  },
  hu: {
    translation: {
      nav: {
        home: 'Kezdőlap',
        about: 'Rólunk',
        services: 'Toborzás',
        gallery: 'Galéria',
        faq: 'GYIK',
        careers: 'Toborzás',
        contact: 'Kapcsolat',
        language: 'Nyelv'
      },
      hero: {
        badge: 'A 2026-os toborzás folyamatban van',
        title: 'Alakítsa szabadidejét',
        titleAccent: 'garantált jövedelemmé',
        desc: 'Csatlakozzon az EDIFLOR-hoz, az otthoni csomagolás vezetőjéhez. Címkézzen luxustermékeket otthonról, ja kapjon fix havi nettó jövedelmet.',
        cta: 'Jelentkezzen most',
        secondaryCta: 'Szolgáltatások felfedezése',
        stats: {
          salary: 'Garantált jövedelem',
          salaryDesc: 'Fix nettó jövedelem',
          partners: '500+',
          partnersDesc: 'Aktív partner',
          satisfaction: '98%',
          satisfactionDesc: 'Elégedettség',
          community: 'Csatlakozzon egy dinamikus közösséghez',
          quality: 'Minőségi garancia',
          qualityDesc: 'ISO 9001 tanúsítvánnyal rendelkező folyamatok',
          topRated: 'Legjobbra értékelt',
          topRatedDesc: 'A 2026-os év legjobb otthoni munkaprogramjának választva'
        }
      },
      about: {
        badge: 'Kik vagyunk mi?',
        title: 'Kiválóság az',
        titleAccent: 'otthoni szolgáltatásokban',
        desc1: 'Az EDIFLOR több mint 10 éve támogatja a vállalatokat precíziós logisztikájukban, miközben rugalmas munkalehetőséget kínál több száz magánszemélynek.',
        desc2: 'Küldetésünk egyszerű: az ipari szigort ötvözni az otthoni munkavégzés rugalmasságával. Minden szükséges felszerelést biztosítunk a feladatai sikeres elvégzéséhez.',
        more: 'Tudjon meg többet történetünkről',
        points: {
          p1: 'Professzionális felszerelés ingyenes biztosítása',
          p2: 'Átfogó képzés és folyamatos támogatás',
          p3: 'Szállítási és elszállítási logisztika az árban',
          p4: 'Stabil és biztonságos munkaszerződés'
        }
      },
      services: {
        badge: 'Szolgáltatásaink és pozícióink',
        title: 'Egyszerű feladatok, valós',
        titleAccent: 'hatás',
        desc: 'Fedezze fel az otthoni partnereink számára elérhető különböző pozíciókat. Minden feladatot szigorú minőségi protokollok szerint irányítunk.',
        apply: 'Jelentkezzen most',
        items: {
          pliage: {
            title: 'Szórólap hajtogatás',
            desc: 'Reklámanyagok készítése ja hajtogatása. Egyszerű ja ismétlődő manuális munka.'
          },
          pli: {
            title: 'Borítékolás',
            desc: 'Dokumentumok borítékba helyezése. Ideális a precizitást kedvelőknek.'
          },
          emballage: {
            title: 'Csomagolás és kiszerelés',
            desc: 'Könnyű termékek csomagolása ja kartonok előkészítése szállításra.'
          },
          etiquetage: {
            title: 'Palack címkézés',
            desc: 'Kozmetikai ja parfümtermékek címkézése. Biztosított felszerelés, 28 napos ciklus.'
          },
          livraison: {
            title: 'Egyszerű kiszállítás',
            desc: 'A termelést hetente vagy havonta közvetlenül az Ön otthonából szállítjuk el.'
          }
        }
      },
      gallery: {
        badge: 'Valós jelenetek és feladatok',
        title: 'A munka',
        titleAccent: 'képekben',
        desc: 'A precíz címkézéstől a szigorú minőségellenőrzésig fedezze fel jövőbeli munkájának főbb szakaszait.',
        items: {
          etiquetage: {
            title: 'Címkézési folyamat',
            desc: 'A kézi címkéző használatának valós bemutatása.'
          },
          pliage: {
            title: 'Hajtogatási technika',
            desc: 'A szórólapok hajtogatását bemutató oktatóvideó.'
          },
          qualite: {
            title: 'Minőségellenőrzés',
            desc: 'Az illesztés ja a tisztaság ellenőrzése.'
          },
          logistique: {
            title: 'Logisztika',
            desc: 'Elszállítási ja szállítási folyamat.'
          },
          materiel: {
            title: 'Professzionális felszerelés',
            desc: 'Asztali címke felhordó gép.'
          },
          fini: {
            title: 'Kész termék',
            desc: 'Címkézésre kész kozmetikai palack készlet.'
          }
        },
        formation: {
          title: 'Képzés az árban',
          desc: 'Nem csak gépeket szállítunk. Minden partner teljes videós képzést és részletes használati útmutatót kap, hogy néhány óra alatt elsajátítsa a címkézést és a csomagolást.'
        }
      },
      faq: {
        badge: 'Gyakran Ismételt Kérdések',
        title: 'Minden, amit',
        titleAccent: 'tudnia kell',
        desc: 'Kérdése van az EDIFLOR működésével kapcsolatban? Itt megtalálja a válaszokat a leendő partnereink által leggyakrabban feltett kérdésekre.',
        items: {
          q1: {
            q: 'Hogyan zajlik a toborzás?',
            a: 'A folyamat egyszerű: jelentkezik az űrlapon keresztül, mi átnézzük a profilját, és ha kiválasztjuk, elküldjük Önnek a felszerelést és a teljes képzési anyagot.'
          },
          q2: {
            q: 'Fizetnem kell a felszerelésért?',
            a: 'Nem, az EDIFLOR biztosítja az összes szükséges felszerelést (címkéző, termékek, címkék).'
          },
          q3: {
            q: 'Hogyan történik a kiszállítás?',
            a: 'A vállalatnak specifikus követelményei vannak a gépek szállításának valós költségeivel (távolság, súly, kezelés) és a jogi kötelezettségekkel kapcsolatban. A vállalat elvárja, hogy az új munkavállaló viselje a szállítási költségeket. Nyugodt lehet, mert ezeket a költségeket a munkaszerződés aláírása után kell kifizetni.'
          },
          q4: {
            q: 'Dolgozhatok a saját tempómban?',
            a: 'Igen, Ön osztja be az idejét, amíg eléri a termelési célokat a 28 napos cikluson belül.'
          },
          q5: {
            q: 'Van képzés?',
            a: 'Természetesen. Minden új partner videós képzési csomagot és részletes útmutatót kap a technikai mozdulatok elsajátításához.'
          },
          q6: {
            q: 'Hogyan kapok fizetést?',
            a: 'A kifizetések havonta banki átutalással történnek, a termelés átvétele és ellenőrzése után.'
          }
        }
      },
      contact: {
        badge: 'Lépjen kapcsolatba velünk',
        title: 'Kérdése van? Projektje? Beszéljen velünk még ma.',
        desc: 'Csapatunk készen áll, hogy válaszoljon az otthoni csomagolási szolgáltatásokkal kapcsolatos minden kérdésére.',
        phone: 'Telefon',
        address: 'Cím',
        form: {
          nom: 'Vezetéknév',
          name: 'Keresztnév',
          email: 'Email',
          subject: 'Tárgy',
          message: 'Üzenet...',
          submit: 'Üzenet küldése',
          submitting: 'Küldés...',
          success: 'Az üzenet sikeresen elküldve!',
          another: 'Másik üzenet küldése'
        },
        legal: {
          title: 'Jogi információk',
          activity: 'Tevékenység',
          activityValue: 'Nyomtatás és nagykereskedelem',
          creation: 'Alapítás dátuma',
          creationValue: '1998. április 15.',
          manager: 'Menedzser',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Tőke',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Jogi forma',
          formValue: 'SARL',
          tva: 'ÁFA szám',
          rcs: 'RCS szám'
        }
      },
      footer: {
        desc: 'Létesítménykezelési és üzleti szolgáltatási szakértő. Egészséges và produktív munkakörnyezetet teremtünk.',
        nav: 'Navigáció',
        links: {
          title: 'Navigáció'
        },
        services: 'Szolgáltatások',
        contact: 'Kapcsolat',
        newsletter: {
          title: 'Hírlevél',
          desc: 'Értesüljön a legfrissebb hírekről és munkalehetőségekről.',
          success: 'Sikeres feliratkozás!',
          placeholder: 'Az Ön email címe...'
        },
        rights: '© 2026 EDIFLOR. Minden jog fenntartva.',
        legal: 'Jogi nyilatkozat',
        privacy: 'Adatvédelmi irányelvek',
        cookies: 'Sütik'
      }
    }
  },
  no: {
    translation: {
      nav: {
        home: 'Hjem',
        about: 'Om oss',
        services: 'Rekruttering',
        gallery: 'Galleri',
        faq: 'FAQ',
        careers: 'Rekruttering',
        contact: 'Kontakt',
        language: 'Språk'
      },
      hero: {
        badge: 'Rekruttering for 2026 pågår',
        title: 'Gjør fritiden din',
        titleAccent: 'om til en garantert inntekt',
        desc: 'Bli med i EDIFLOR, ledende innen hjemmepakking. Merk luksusprodukter hjemmefra og få en fast månedlig nettoinntekt.',
        cta: 'Søk nå',
        secondaryCta: 'Utforsk tjenester',
        stats: {
          salary: 'Garantert inntekt',
          salaryDesc: 'Fast nettoinntekt',
          partners: '500+',
          partnersDesc: 'Aktive partnere',
          satisfaction: '98%',
          satisfactionDesc: 'Tilfredshet',
          community: 'Bli med i et dynamisk fellesskap',
          quality: 'Kvalitetsgaranti',
          qualityDesc: 'ISO 9001-sertifiserte prosesser',
          topRated: 'Toppvurdert',
          topRatedDesc: 'Valgt som det beste jobbe-hjemmefra-programmet for 2026'
        }
      },
      about: {
        badge: 'Hvem er vi?',
        title: 'Excellence innen',
        titleAccent: 'hjemmetjenester',
        desc1: 'I mer enn 10 år har EDIFLOR støttet bedrifter i deres presisjonslogistikk, samtidig som de har tilbudt fleksible arbeidsmuligheter til hundrevis av enkeltpersoner.',
        desc2: 'Vårt oppdrag er enkelt: å kombinere industriell stringens med fleksibiliteten ved å jobbe hjemmefra. Vi leverer alt nødvendig utstyr slik at du kan lykkes med oppgavene dine.',
        more: 'Les mer om vår historie',
        points: {
          p1: 'Gratis utlån av profesjonelt utstyr',
          p2: 'Omfattende opplæring og kontinuerlig støtte',
          p3: 'Leverings- og hentelogistikk inkludert',
          p4: 'Stabil og sikker arbeidsavtale'
        }
      },
      services: {
        badge: 'Våre tjenester og stillinger',
        title: 'Enkle oppgaver, reell',
        titleAccent: 'innvirkning',
        desc: 'Oppdag de ulike stillingene som er tilgjengelige for våre hjemmepartnere. Alle oppgaver styres i henhold til strenge kvalitetsprotokoller.',
        apply: 'Søk nå',
        items: {
          pliage: {
            title: 'Folding av brosjyrer',
            desc: 'Oppretting og folding av reklamebrosjyrer. Et enkelt og repeterende manuelt arbeid.'
          },
          pli: {
            title: 'Konvoluttering',
            desc: 'Legge dokumenter i konvolutter. Ideelt for de som liker presisjon.'
          },
          emballage: {
            title: 'Innpakning og emballasje',
            desc: 'Innpakning av lette produkter og klargjøring av esker for forsendelse.'
          },
          etiquetage: {
            title: 'Merking av flasker',
            desc: 'Merking av kosmetikk- og parfymeprodukter. Utstyr levert, 28-dagers syklus.'
          },
          livraison: {
            title: 'Enkel levering',
            desc: 'Vi henter produksjonen din direkte hjemme hos deg hver uke eller måned.'
          }
        }
      },
      gallery: {
        badge: 'Reelle scener og oppgaver',
        title: 'Arbeidet',
        titleAccent: 'i bilder',
        desc: 'Fra presis merking til streng kvalitetskontroll, oppdag de viktigste fasene i ditt fremtidige arbeid.',
        items: {
          etiquetage: {
            title: 'Merkingsprosess',
            desc: 'Reell demonstrasjon av bruk av en manuell merkingsmaskin.'
          },
          pliage: {
            title: 'Foldeteknikk',
            desc: 'Forklarende video som viser folding av brosjyrer.'
          },
          qualite: {
            title: 'Kvalitetskontroll',
            desc: 'Kontroll av justering og renhet.'
          },
          logistique: {
            title: 'Logistikk',
            desc: 'Hente- og leveringsprosess.'
          },
          materiel: {
            title: 'Profesjonelt utstyr',
            desc: 'Bordmodell for påføring av etiketter.'
          },
          fini: {
            title: 'Ferdig produkt',
            desc: 'Sett med kosmetikkflasker klare for merking.'
          }
        },
        formation: {
          title: 'Opplæring inkludert',
          desc: 'Vi leverer ikke bare maskiner. Hver partner mottar full videoopplæring og en detaljert brukermanual for å mestre merking og pakking på få timer.'
        }
      },
      faq: {
        badge: 'Ofte stilte spørsmål',
        title: 'Alt du',
        titleAccent: 'trenger å vite',
        desc: 'Har du spørsmål om hvordan EDIFLOR fungerer? Finn svarene på de vanligste spørsmålene fra våre fremtidige partnere her.',
        items: {
          q1: {
            q: 'Hvordan foregår rekrutteringen?',
            a: 'Prosessen er enkel: du søker via skjemaet, vi vurderer profilen din, og hvis du blir valgt, sender vi deg utstyret og fullstendig opplæringsmateriell.'
          },
          q3: {
            q: 'Må jeg betale for utstyret?',
            a: 'Nei, EDIFLOR leverer alt nødvendig utstyr (merkingsmaskin, produkter, etiketter).'
          },
          q4: {
            q: 'Hvordan foregår leveringen?',
            a: 'Selskapet har spesifikke krav knyttet til de faktiske kostnadene ved levering av maskinene (avstand, vekt, håndtering) og juridiske forpliktelser. Selskapet krever at den nyansatte bærer leveringskostnadene. Du kan være trygg, da disse kostnadene betales etter signering av arbeidsavtalen.'
          },
          q5: {
            q: 'Kan jeg jobbe i mitt eget tempo?',
            a: 'Ja, du organiserer tiden din selv, så lenge du når produksjonsmålene innen 28-dagers syklusen.'
          },
          q6: {
            q: 'Er det opplæring inkludert?',
            a: 'Selvfølgelig. Hver ny partner mottar et videoopplæringssett og en detaljert manual for å mestre de tekniske bevegelsene.'
          }
        }
      },
      contact: {
        badge: 'Kontakt oss',
        title: 'Har du et spørsmål? Et prosjekt? Snakk med oss i dag.',
        desc: 'Teamet vårt er tilgjengelig for å svare på alle dine spørsmål om hjemmepakkingstjenester.',
        phone: 'Telefon',
        address: 'Adresse',
        form: {
          nom: 'Etternavn',
          name: 'Fornavn',
          email: 'E-post',
          subject: 'Emne',
          message: 'Melding...',
          submit: 'Send melding',
          submitting: 'Sender...',
          success: 'Meldingen er sendt!',
          another: 'Send en annen melding'
        },
        legal: {
          title: 'Juridisk informasjon',
          activity: 'Aktivitet',
          activityValue: 'Trykking og engroshandel',
          creation: 'Opprettelsesdato',
          creationValue: '15. april 1998',
          manager: 'Manager',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Kapital',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Juridisk form',
          formValue: 'SARL',
          tva: 'Momsnummer',
          rcs: 'RCS-nummer'
        }
      },
      footer: {
        desc: 'Ekspert på facility management og forretningstjenester. Vi skaper sunne og produktive arbeidsmiljøer.',
        nav: 'Navigasjon',
        links: {
          title: 'Navigasjon'
        },
        services: 'Tjenester',
        contact: 'Kontakt',
        newsletter: {
          title: 'Nyhetsbrev',
          desc: 'Motta de siste nyhetene og jobbmulighetene.',
          success: 'Påmelding vellykket!',
          placeholder: 'Din e-postadresse...'
        },
        rights: '© 2026 EDIFLOR. Alle rettigheter forbeholdt.',
        legal: 'Juridisk merknad',
        privacy: 'Personvernerklæring',
        cookies: 'Cookies'
      }
    }
  },
  sk: {
    translation: {
      nav: {
        home: 'Domov',
        about: 'O nás',
        services: 'Nábor',
        gallery: 'Galéria',
        faq: 'Často kladené otázky',
        careers: 'Nábor',
        contact: 'Kontakt',
        language: 'Jazyk'
      },
      hero: {
        badge: 'Nábor na rok 2026 prebieha',
        title: 'Premeňte svoj voľný čas',
        titleAccent: 'na garantovaný príjem',
        desc: 'Pridajte sa k EDIFLOR, lídrovi v domácom balení. Štítkujte luxusné produkty z domova a získajte fixný mesačný čistý príjem.',
        cta: 'Prihlásiť sa teraz',
        secondaryCta: 'Preskúmať služby',
        stats: {
          salary: 'Garantovaný príjem',
          salaryDesc: 'Fixný čistý príjem',
          partners: '500+',
          partnersDesc: 'Aktívnych partnerov',
          satisfaction: '98%',
          satisfactionDesc: 'Spokojnosť',
          community: 'Pridajte sa k dynamickej komunite',
          quality: 'Záruka kvality',
          qualityDesc: 'Procesy certifikované podľa ISO 9001',
          topRated: 'Najlepšie hodnotené',
          topRatedDesc: 'Vybrané ako najlepší program práce z domu na rok 2026'
        }
      },
      about: {
        badge: 'Kto sme?',
        title: 'Excelentnosť v',
        titleAccent: 'domácich službách',
        desc1: 'Už viac ako 10 rokov EDIFLOR podporuje firmy v ich precíznej logistike a zároveň ponúka flexibilné pracovné príležitosti stovkám jednotlivcov.',
        desc2: 'Naša misia je jednoduchá: spojiť priemyselnú prísnosť s flexibilitou práce z domu. Poskytujeme všetko potrebné vybavenie, aby ste vo svojich úlohách uspeli.',
        more: 'Dozvedieť sa viac o našej histórii',
        points: {
          p1: 'Bezplatné poskytnutie profesionálneho vybavenia',
          p2: 'Komplexné školenie a neustála podpora',
          p3: 'Logistika doručenia a vyzdvihnutia v cene',
          p4: 'Stabilná a bezpečná pracovná zmluva'
        }
      },
      services: {
        badge: 'Naše služby a pozície',
        title: 'Jednoduché úlohy, reálny',
        titleAccent: 'dopad',
        desc: 'Objavte rôzne pozície dostupné pre našich domácich partnerov. Všetky úlohy sú riadené podľa prísnych kvalitatívnych protokolov.',
        apply: 'Prihlásiť sa teraz',
        items: {
          pliage: {
            title: 'Skladanie letákov',
            desc: 'Tvorba a skladanie reklamných letákov. Jednoduchá a opakujúca sa manuálna práca.'
          },
          pli: {
            title: 'Plnenie obálok',
            desc: 'Vkladanie dokumentov do obálok. Ideálne pre tých, ktorí majú radi precíznosť.'
          },
          emballage: {
            title: 'Balenie a balenie',
            desc: 'Balenie ľahkých produktov a príprava kartónov na odoslanie.'
          },
          etiquetage: {
            title: 'Štítkovanie fliaš',
            desc: 'Štítkovanie kozmetických a parfumových produktov. Vybavenie zabezpečené, 28-dňový cyklus.'
          },
          livraison: {
            title: 'Jednoduché doručenie',
            desc: 'Vašu produkciu vyzdvihujeme priamo u vás doma každý týždeň alebo mesiac.'
          }
        }
      },
      gallery: {
        badge: 'Reálne scény a úlohy',
        title: 'Práca',
        titleAccent: 'v obrazoch',
        desc: 'Od precízneho štítkovania po prísnu kontrolu kvality, objavte hlavné fázy vašej budúcej práce.',
        items: {
          etiquetage: {
            title: 'Proces štítkovania',
            desc: 'Reálna ukážka použitia ručného štítkovača.'
          },
          pliage: {
            title: 'Technika skladania',
            desc: 'Inštruktážne video ukazujúce skladanie letákov.'
          },
          qualite: {
            title: 'Kontrola kvality',
            desc: 'Kontrola zarovnania a čistoty.'
          },
          logistique: {
            title: 'Logistika',
            desc: 'Proces vyzdvihnutia a doručenia.'
          },
          materiel: {
            title: 'Profesionálne vybavenie',
            desc: 'Stolný stroj na nanášanie štítkov.'
          },
          fini: {
            title: 'Hotový produkt',
            desc: 'Sada kozmetických fľaštičiek pripravených na štítkovanie.'
          }
        },
        formation: {
          title: 'Školenie v cene',
          desc: 'Nedodávame len stroje. Každý partner dostane kompletné video školenie a podrobný užívateľský manuál, aby zvládol štítkovanie a balenie v priebehu niekoľkých hodín.'
        }
      },
      faq: {
        badge: 'Často kladené otázky',
        title: 'Všetko, čo potrebujete',
        titleAccent: 'vedieť',
        desc: 'Máte otázky ohľadom fungovania EDIFLOR? Tu nájdete odpovede na najčastejšie otázky našich budúcich partnerov.',
        items: {
          q1: {
            q: 'Ako prebieha nábor?',
            a: 'Proces je jednoduchý: prihlásite sa cez formulár, my posúdime váš profil a ak budete vybraní, zašleme vám vybavenie a kompletné školiace materiály.'
          },
          q2: {
            q: 'Musím za vybavenie platiť?',
            a: 'Nie, EDIFLOR poskytuje všetko potrebné vybavenie (štítkovač, produkty, štítky).'
          },
          q3: {
            q: 'Ako prebieha doručenie?',
            a: 'Spoločnosť má špecifické požiadavky týkajúce sa reálnych nákladov na doručenie strojov (vzdialenosť, hmotnosť, manipulácia) a zákonných povinností. Spoločnosť vyžaduje, aby nový zamestnanec znášal náklady na doručenie. Môžete byť v pokoji, pretože tieto náklady sa platia po podpise pracovnej zmluvy.'
          },
          q4: {
            q: 'Môžem pracovať vlastným tempom?',
            a: 'Áno, svoj čas si organizujete sami, pokiaľ dosiahnete výrobné ciele v rámci 28-dňového cyklu.'
          },
          q5: {
            q: 'Je zabezpečené školenie?',
            a: 'Samozrejme. Každý nový partner dostane sadu video školení a podrobný manuál na zvládnutie technických úkonov.'
          },
          q6: {
            q: 'Ako dostanem zaplatené?',
            a: 'Platby sa uskutočňujú bankovým prevodom každý mesiac, po prijatí a overení vašej produkcie.'
          }
        }
      },
      contact: {
        badge: 'Kontaktujte nás',
        title: 'Máte otázku? Projekt? Porozprávajte sa s nami ešte dnes.',
        desc: 'Náš tím je k dispozícii, aby odpovedal na všetky vaše otázky týkajúce sa služieb domáceho balenia.',
        phone: 'Telefón',
        address: 'Adresa',
        form: {
          nom: 'Priezvisko',
          name: 'Meno',
          email: 'Email',
          subject: 'Predmet',
          message: 'Správa...',
          submit: 'Odoslať správu',
          submitting: 'Odosiela sa...',
          success: 'Správa bola úspešne odoslaná!',
          another: 'Odoslať ďalšiu správu'
        },
        legal: {
          title: 'Právne informácie',
          activity: 'Činnosť',
          activityValue: 'Tlač a veľkoobchod',
          creation: 'Dátum založenia',
          creationValue: '15. apríla 1998',
          manager: 'Manažér',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Kapitál',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Právna forma',
          formValue: 'SARL',
          tva: 'DIČ',
          rcs: 'Číslo RCS'
        }
      },
      footer: {
        desc: 'Expert na správu zariadení a obchodné služby. Vytvárame zdravé a produktívne pracovné prostredie.',
        nav: 'Navigácia',
        links: {
          title: 'Navigácia'
        },
        services: 'Služby',
        contact: 'Kontakt',
        newsletter: {
          title: 'Newsletter',
          desc: 'Dostávajte najnovšie správy a pracovné príležitosti.',
          success: 'Úspešne prihlásené!',
          placeholder: 'Vaša emailová adresa...'
        },
        rights: '© 2026 EDIFLOR. Všetky práva vyhradené.',
        legal: 'Právne upozornenie',
        privacy: 'Zásady ochrany osobných údajov',
        cookies: 'Cookies'
      }
    }
  },
  uk: {
    translation: {
      nav: {
        home: 'Головна',
        about: 'Про нас',
        services: 'Рекрутинг',
        gallery: 'Галерея',
        faq: 'ЧАП',
        careers: 'Рекрутинг',
        contact: 'Контакти',
        language: 'Мова'
      },
      hero: {
        badge: 'Рекрутинг на 2026 рік триває',
        title: 'Перетворіть свій вільний час',
        titleAccent: 'на гарантований дохід',
        desc: 'Приєднуйтесь до EDIFLOR, лідера у сфері домашнього пакування. Маркуйте люксові товари вдома та отримуйте фіксований місячний чистий дохід.',
        cta: 'Подати заявку',
        secondaryCta: 'Ознайомитися з послугами',
        stats: {
          salary: 'Гарантований дохід',
          salaryDesc: 'Фіксований чистий дохід',
          partners: '500+',
          partnersDesc: 'Активних партнерів',
          satisfaction: '98%',
          satisfactionDesc: 'Задоволеність',
          community: 'Приєднуйтесь до динамічної спільноти',
          quality: 'Гарантія якості',
          qualityDesc: 'Процеси, сертифіковані за ISO 9001',
          topRated: 'Найвищий рейтинг',
          topRatedDesc: 'Обрано найкращою програмою для роботи вдома на 2026 рік'
        }
      },
      about: {
        badge: 'Хто ми?',
        title: 'Досконалість у',
        titleAccent: 'домашніх послугах',
        desc1: 'Понад 10 років EDIFLOR підтримує компанії в їхній прецизійній логістиці, пропонуючи гнучкі можливості роботи сотням людей.',
        desc2: 'Наша місія проста: поєднати промислову суворість із гнучкістю роботи вдома. Ми надаємо все необхідне обладнання, щоб ви досягли успіху у своїх завданнях.',
        more: 'Дізнатися більше про нашу історію',
        points: {
          p1: 'Безкоштовне надання професійного обладнання',
          p2: 'Комплексне навчання та постійна підтримка',
          p3: 'Логістика доставки та забору включена',
          p4: 'Стабільний та безпечний трудовий договір'
        }
      },
      services: {
        badge: 'Наші послуги та вакансії',
        title: 'Прості завдання, реальний',
        titleAccent: 'вплив',
        desc: 'Відкрийте для себе різні вакансії, доступні для наших домашніх партнерів. Усі завдання керуються відповідно до суворих протоколів якості.',
        apply: 'Подати заявку',
        items: {
          pliage: {
            title: 'Складання листівок',
            desc: 'Створення та складання рекламних листівок. Проста та повторювана ручна робота.'
          },
          pli: {
            title: 'Конвертування',
            desc: 'Вкладання документів у конверти. Ідеально для тих, хто любить точність.'
          },
          emballage: {
            title: 'Пакування та фасування',
            desc: 'Пакування легких товарів та підготовка коробок до відправлення.'
          },
          etiquetage: {
            title: 'Маркування пляшок',
            desc: 'Маркування косметичних та парфумерних товарів. Обладнання надається, цикл 28 днів.'
          },
          livraison: {
            title: 'Легка доставка',
            desc: 'Ми забираємо вашу продукцію безпосередньо у вас вдома щотижня або щомісяця.'
          }
        }
      },
      gallery: {
        badge: 'Реальні сцени та завдання',
        title: 'Робота',
        titleAccent: 'у фотографіях',
        desc: 'Від точного маркування до суворого контролю якості, відкрийте для себе основні етапи вашої майбутньої роботи.',
        items: {
          etiquetage: {
            title: 'Процес маркування',
            desc: 'Реальна демонстрація використання ручного маркувальника.'
          },
          pliage: {
            title: 'Техніка складання',
            desc: 'Пояснювальне відео, що показує складання листівок.'
          },
          qualite: {
            title: 'Контроль якості',
            desc: 'Перевірка вирівнювання та чистоти.'
          },
          logistique: {
            title: 'Логістика',
            desc: 'Процес забору та доставки.'
          },
          materiel: {
            title: 'Професійне обладнання',
            desc: 'Настільна машина для нанесення етикеток.'
          },
          fini: {
            title: 'Готовий продукт',
            desc: 'Набір косметичних пляшок, готових до маркування.'
          }
        },
        formation: {
          title: 'Навчання включено',
          desc: 'Ми не просто доставляємо машини. Кожен партнер отримує повне відео-навчання та детальний посібник користувача, щоб опанувати маркування та пакування за кілька годин.'
        }
      },
      faq: {
        badge: 'Часті запитання',
        title: 'Все, що вам',
        titleAccent: 'потрібно знати',
        desc: 'Маєте запитання щодо того, як працює EDIFLOR? Знайдіть відповіді на найпоширеніші запитання від наших майбутніх партнерів тут.',
        items: {
          q1: {
            q: 'Як проходить рекрутинг?',
            a: 'Процес простий: ви подаєте заявку через форму, ми переглядаємо ваш профіль і, якщо вас обрано, надсилаємо вам обладнання та повні навчальні матеріали.'
          },
          q2: {
            q: 'Чи потрібно мені платити за обладнання?',
            a: 'Ні, EDIFLOR надає все необхідне обладнання (маркувальник, товари, етикетки).'
          },
          q3: {
            q: 'Як відбувається доставка?',
            a: 'Компанія має специфічні вимоги щодо реальних витрат на доставку машин (відстань, вага, обробка) та юридичних зобов\'язань. Компанія вимагає від нового працівника нести витрати на доставку. Ви можете бути спокійні, оскільки ці витрати оплачуються після підписання трудового договору.'
          },
          q4: {
            q: 'Чи можу я працювати у власному темпі?',
            a: 'Так, ви самі організовуєте свій час, поки досягаєте виробничих цілей протягом 28-денного циклу.'
          },
          q5: {
            q: 'Чи передбачено навчання?',
            a: 'Звичайно. Кожен новий партнер отримує набір для відео-навчання та детальний посібник для опанування технічних жестів.'
          },
          q6: {
            q: 'Як мені платять?',
            a: 'Виплати здійснюються банківським переказом щомісяця після отримання та перевірки вашої продукції.'
          }
        }
      },
      contact: {
        badge: 'Зв\'яжіться з нами',
        title: 'Маєте запитання? Проєкт? Поговоріть з нами сьогодні.',
        desc: 'Наша команда готова відповісти на всі ваші запитання щодо послуг домашнього пакування.',
        phone: 'Телефон',
        address: 'Адреса',
        form: {
          nom: 'Прізвище',
          name: 'Ім\'я',
          email: 'Email',
          subject: 'Тема',
          message: 'Повідомлення...',
          submit: 'Надіслати повідомлення',
          submitting: 'Надсилання...',
          success: 'Повідомлення надіслано успішно!',
          another: 'Надіслати інше повідомлення'
        },
        legal: {
          title: 'Юридична інформація',
          activity: 'Діяльність',
          activityValue: 'Друк та оптова торгівля',
          creation: 'Дата створення',
          creationValue: '15 квітня 1998 р.',
          manager: 'Менеджер',
          managerValue: 'Legrand Patrick MENIS',
          capital: 'Капітал',
          capitalValue: '400 000,00 €',
          siren: 'SIREN',
          siret: 'SIRET',
          form: 'Юридична форма',
          formValue: 'SARL',
          tva: 'Номер ПДВ',
          rcs: 'Номер RCS'
        }
      },
      footer: {
        desc: 'Експерт з управління об\'єктами та бізнес-послуг. Ми створюємо здорове та продуктивне робоче середовище.',
        nav: 'Навігація',
        links: {
          title: 'Навігація'
        },
        services: 'Послуги',
        contact: 'Контакти',
        newsletter: {
          title: 'Розсилка',
          desc: 'Отримуйте останні новини та вакансії.',
          success: 'Успішно підписано!',
          placeholder: 'Ваша електронна адреса...'
        },
        rights: '© 2026 EDIFLOR. Усі права захищено.',
        legal: 'Юридичне повідомлення',
        privacy: 'Політика конфіденційності',
        cookies: 'Cookies'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
