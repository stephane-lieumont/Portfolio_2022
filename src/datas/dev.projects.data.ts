import CTPlandingPageImg from "~/assets/medias/projects/case-tes-potes-landingpage-2022.jpg";
import CTPlandingPageImgProject from "~/assets/medias/projects/case-tes-potes-landingpage-2022_project.jpg";
import CTPappMobileImg from "~/assets/medias/projects/case-tes-potes-mobile-2022.jpg";
import CTPappMobileImgProject from "~/assets/medias/projects/case-tes-potes-mobile-2022_project.jpg";
import CTPwebAppImg from "~/assets/medias/projects/case-tes-potes-webapp-2021.jpg";
import CTPwebAppImgProject from "~/assets/medias/projects/case-tes-potes-webapp-2021_project.jpg";
import KasaOcImg from "~/assets/medias/projects/oc-kasa-fromation-2021.jpg";
import KasaOcImgProject from "~/assets/medias/projects/oc-kasa-fromation-2021_project.jpg";
import Pixmodels2015Img from "~/assets/medias/projects/pixmodels-2016-service-comminucation.jpg";
import Pixmodels2015ImgProject from "~/assets/medias/projects/pixmodels-2016-service-comminucation_project.jpg";
import Portfolio2018Img from "~/assets/medias/projects/portfolio-3d-2018.jpg";
import Portfolio2018ImgProject from "~/assets/medias/projects/portfolio-3d-2018_project.jpg";
import { ProjectDevData, SpecialityData } from "~/interfaces/data.intf";

export const ProjectsDevData: ProjectDevData[] = [
  {
    id: "1",
    title: "Case Tes Potes - Mobile",
    hashName: "case-tes-potes-application-mobile-2022",
    description:
      "Case Tes Potes réinvente les sites de rencontre en mettant l'accent sur l'amitié dans les relations amoureuses. L'objectif est de faciliter les rencontres en guidant les célibataires à travers chaque étape, depuis la recherche de profils jusqu'à l'organisation de la première rencontre. Grâce à l'accompagnement d'un·e 'Caseur' ou 'Caseuse', les utilisateurs se laissent guider pour vivre une expérience de rencontre unique et authentique.",
    mission:
      "En tant que co-fondateur et lead developer, ma mission était de concevoir et développer une application mobile avec des fonctionnalités clés pour tester le produit sur le marché. Mon rôle a impliqué la définition de la stratégie technique, la gestion du développement et l'assurance qualité pour offrir une première version performante et attrayante",
    missionSteps: [
      "Analyse approfondie des besoins et définition des <strong>Users Stories</strong> pour comprendre les attentes des utilisateurs.",
      "Création d'une <strong>Roadmap produit</strong> détaillant les priorités de développement et les étapes de livraison.",
      "Conception d'une maquette interactive sous <strong>Adobe XD</strong>, permettant de visualiser l'expérience utilisateur avant le développement.",
      "Pilotage du projet en tant que chef d'équipe, en collaboration avec une équipe de deux développeurs, pour assurer la cohérence technique et la progression des tâches.",
      "Développement de l'application mobile en utilisant <strong>Flutter</strong>, pour une solution multiplateforme efficace sur <strong>Android</strong> et <strong>iOS</strong>.",
    ],
    technos: ["flutter", "dart", "xd", "illustrator", "git", "gitlab", "confluence", "jira"],
    imgFile: CTPappMobileImg,
    imgFileProject: CTPappMobileImgProject,
    imgAlt: "case tes potes - application mobile",
    hashtags: ["flutter", "dart", "Android", "IOS"],
    released: new Date("2022-08-30"),
  },
  {
    id: "2",
    title: "Case Tes Potes - Landing Page",
    hashName: "case-tes-potes-landing-page-2022",
    description:
      "La landing page a été conçue spécifiquement pour soutenir la campagne marketing de l'application. Elle sert de point d'entrée principal pour les utilisateurs souhaitant se préinscrire à la phase de test fermée. Cette page permet également aux visiteurs de contacter l'équipe pour plus d'informations et de suivre l'évolution du projet.",
    mission:
      "La mission consistait à développer une landing page interactive qui se connecte à l'API de Sendinblue pour gérer la campagne de communication. Les informations de contact des utilisateurs sont automatiquement ajoutées aux listes de diffusion, tandis que les données sont également stockées dans une base de données MongoDB via une API développée avec Koa",
    missionSteps: [
      "Analyse du besoin et définition des objectifs de la landing page pour aligner la conception avec la stratégie marketing.",
      "Création d'une maquette interactive de la landing page sous <strong>Figma</strong>, en prenant en compte l'UX/UI.",
      "Développement de la page avec <strong>React.js</strong>, pour garantir une expérience utilisateur rapide et fluide.",
      "Développement d'une API avec <strong>Koa</strong>, permettant la gestion des utilisateurs et l'intégration avec l'API de <strong>Sendinblue</strong> pour l'envoi d'emails de communication.",
      "Mise en place de tests unitaires et d'intégration avec <strong>Jest</strong> pour assurer la robustesse du code.",
      "Déploiement de l'application sous forme d'image <strong>Docker</strong> sur les serveurs AWS pour une gestion optimale de l'infrastructure.",
    ],
    technos: [
      "react",
      "typescript",
      "html",
      "sass",
      "node",
      "mongo",
      "git",
      "gitlab",
      "docker",
      "confluence",
      "jira",
    ],
    imgFile: CTPlandingPageImg,
    imgFileProject: CTPlandingPageImgProject,
    imgAlt: "Case Tes Potes - Landing Page 2022",
    hashtags: ["react", "typescript", "sass", "nodejs"],
    released: new Date("2022-03-15"),
    demoLink: "/demo/casetespotes-landingpage",
  },
  {
    id: "3",
    title: "Case Tes Potes - Web Application",
    hashName: "case-tes-potes-webapp-pour-app-mobile-2021",
    description:
      "L'une des fonctionnalités clés de l'application Case Tes Potes repose sur les témoignages d'ami·es pour enrichir le profil d'un célibataire. Afin de simplifier ce processus, une Web App accessible via un lien d'invitation a été développée, permettant aux proches de compléter ces informations sans avoir à télécharger l'application mobile.",
    mission:
      "Cette Web App a été conçue avec Webpack et communique directement avec l'API de l'application mobile. Elle assure la validation des invitations et l'authentification des utilisateurs avant de leur permettre de rédiger une description de leur ami·e",
    missionSteps: [
      "Création d'une maquette sous <strong>Adobe XD</strong> en cohérence avec l'expérience utilisateur de l'application mobile.",
      "Développement de la Web App avec <strong>Webpack</strong> et <strong>Vanilla JavaScript</strong> pour une exécution légère et rapide.",
      "Mise en place de tests unitaires et d'intégration avec <strong>Jest</strong> afin de garantir la fiabilité de l'application.",
      "Déploiement de l'application sous forme d'image <strong>Docker</strong> sur les serveurs AWS pour assurer performance et scalabilité.",
    ],
    technos: [
      "webpack",
      "javascript",
      "html",
      "sass",
      "node",
      "git",
      "gitlab",
      "docker",
      "confluence",
      "jira",
    ],
    imgFile: CTPwebAppImg,
    imgFileProject: CTPwebAppImgProject,
    imgAlt: "Case Tes Potes - Web Application 2021",
    hashtags: ["Webpack", "JavaScript", "Sass", "Nodejs"],
    released: new Date("2021-11-17"),
    demoLink: "/demo/casetespotes-webapp",
  },
  {
    id: "4",
    title: "Kasa - OpenClassrooms",
    hashName: "kasa-application-react-openclassrooms-2021",
    description:
      "Dans le cadre d’un projet OpenClassrooms, l’objectif était d’intégrer le design d’une maquette Figma en utilisant React.js. Ce projet a marqué ma première expérience avec React, l’utilisation de React Router et l’apprentissage de TypeScript.",
    mission:
      "Le site de Kasa, développé il y a plus de 10 ans en ASP.NET, souffrait d'un code legacy important. Laura, la CTO, a initié une refonte complète pour adopter une stack JavaScript moderne avec Node.js côté Back-end et React côté Front-end. Cette transition a également été l’occasion de repenser entièrement le design de l’application",
    missionSteps: [
      "Développement de l'application en <strong>React</strong> en respectant fidèlement la maquette Figma.",
      "Apprentissage et mise en pratique de <strong>TypeScript</strong> pour renforcer la robustesse du code.",
      "Mise en place du routage avec <strong>React Router</strong>.",
      "Création d’une image <strong>Docker</strong> pour faciliter le déploiement.",
      "Déploiement de l’application sur <strong>GitHub Pages</strong>.",
    ],
    technos: ["react", "typescript", "html", "sass", "git", "github", "docker"],
    imgFile: KasaOcImg,
    imgFileProject: KasaOcImgProject,
    imgAlt: "Kasa OpenClassrooms - Landing Page 2021",
    hashtags: ["React", "TypeScript", "Sass", "Node.js"],
    released: new Date("2021-12-10"),
    demoLink: "/demo/openclassrooms-kasa",
  },
  {
    id: "5",
    title: "Portfolio 3D",
    hashName: "portfolio-3d-stephane-lieumont-2018",
    description:
      "Passionné par l'évolution des techniques 3D dans le cinéma et les jeux vidéo depuis les années 2000, j’ai voulu explorer cet univers fascinant. Grâce à YouTube et diverses formations en ligne, j’ai acquis les bases de la production 3D. J’ai ensuite laissé libre cours à mon imagination et ma créativité pour concrétiser mes projets.",
    mission:
      "Depuis 2008, je souhaite présenter mes créations à travers ce portfolio en ligne. Retrouvez mes réalisations dans la section <a href='/portfolio-stephane-lieumont-cgi'>portfolio 3D</a>",
    missionSteps: [
      "Présenter mes réalisations 3D en ligne.",
      "Créer un site avec <strong>jQuery, HTML et CSS</strong>.",
      "Déployer le site sur un serveur mutualisé.",
    ],
    technos: ["html", "jquery", "git"],
    imgFile: Portfolio2018Img,
    imgFileProject: Portfolio2018ImgProject,
    imgAlt: "Portfolio 3D - 2018",
    hashtags: ["JavaScript", "CSS"],
    released: new Date("2018-09-17"),
    demoLink: "/demo/portfolio2018",
  },
  {
    id: "6",
    title: "Pixmodels",
    hashName: "pixmodels-communication-audiovisuelle-2015",
    description:
      "En 2015, j’ai créé mon entreprise et il était essentiel d’avoir une présence digitale pour présenter mes services. Étant spécialisée dans l’audiovisuel, une image de marque forte et soignée était primordiale.",
    mission:
      "L'objectif était de proposer mes services et réalisations via un site internet, avec un formulaire de contact pour les clients potentiels. Le but principal était de gagner en visibilité et crédibilité afin de vendre mes prestations",
    missionSteps: [
      "Étude du marché et des besoins.",
      "Conception de la maquette avec <strong>Photoshop</strong>.",
      "Développement du site en <strong>HTML, CSS, PHP et JavaScript</strong>.",
      "Déploiement sur un serveur mutualisé.",
    ],
    technos: ["html", "javascript", "php", "photoshop"],
    imgFile: Pixmodels2015Img,
    imgFileProject: Pixmodels2015ImgProject,
    imgAlt: "Pixmodels - Agence de communication audiovisuelle",
    hashtags: ["JavaScript", "PHP", "CSS"],
    released: new Date("2015-06-02"),
    demoLink: "/demo/pixmodels",
  },
];

export const SpecialitiesDevData: SpecialityData[] = [
  {
    name: "vue.js",
    src: require("~/assets/icons/vue.png"),
    alt: "vue js framework javascript",
    size: 100,
  },
  {
    name: "react.js",
    src: require("~/assets/icons/react.png"),
    alt: "react js framework javascript",
    size: 100,
  },
  {
    name: "flutter",
    src: require("~/assets/icons/flutter.png"),
    alt: "flutter application mobiles",
    size: 100,
  },
  {
    name: "webpack",
    src: require("~/assets/icons/webpack.png"),
    alt: "webpack framework javascript",
    size: 100,
  },
  {
    name: "sass",
    src: require("~/assets/icons/sass.png"),
    alt: "sass framework css",
    size: 100,
  },
  {
    name: "node.js",
    src: require("~/assets/icons/node.png"),
    alt: "node plateforme logicielle libre javascript",
    size: 100,
  },
];
