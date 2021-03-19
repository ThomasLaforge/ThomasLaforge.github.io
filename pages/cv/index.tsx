import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

interface Formation {
  title: string,
  years: string,
  address: string 
}

const formations: Formation[] = [
  {
    title: 'LICENCE PROFESSIONNELLE SYSTÈMES INFORMATIQUES ET LOGICIELS OPTION SYSTÈMES D\'INFORMATION, MÉTHODES ET OUTILS',
    years: '2013 – 2014',
    address: 'Université Pierre Mendès France – Grenoble'
  },
  {
    title: 'DUT INFORMATIQUE EN ANNÉE SPÉCIALE',
    years: '2012 – 2013',
    address: 'Université Pierre Mendès France – Grenoble'
  },
  {
    title: 'DUT STATISTIQUE ET INFORMATIQUE DÉCISIONNELLE',
    years: '2010 – 2012',
    address: 'Université Pierre Mendès France – Grenoble'
  }
]

interface Experience {
  completeTitle: {
    type: string,
    title: string
  },
  subtitle: {
    enterprise: string,
    years: string
  },
  tasks?: {
    name: string,
    details?: string[],
    tools: string[],
  }[],
}

const experiences: Experience[] = [
  // Normenjeu
  {
    completeTitle: {
      type: 'AUTO ENTREPRENEUR',
      title: 'CAPTEUR HIC'
    },
    subtitle: {
      enterprise: 'Normenjeu',
      years: '2019 - 2021'
    },
    tasks: [
      {
        name: 'Reprise de projet - Gestion de projet',
        details: [
          `analyse de l'existant et architecture globale`,
          `gestion des codes sources et documentation de la propriété intellectuelle`
        ],
        tools: [
          'Git',
          'Gitlab',
          'Milestones',
          'Gantt',
          'Markdown'
        ]
      },
      {
        name: 'Diagnostique et débogage du firmware (tête HIC)',
        tools: [
          'Arduino',
          'C++',
          'bluetooth',
          'électronique'
        ]
      },{
        name: 'Firmware Raspberry (largueur)',
        details: [
          `communication avec la tête HIC`,
          `contrôle électronique (lidar, écran, led, boutons, alarme)`,
          `système de mise à jour du système par container Docker`
        ],
        tools: [
          'Raspberry',
          'Typescript',
          'Node',
          'GPIO',
          'UART',
          'I2C',
          'Docker',
          'docker-compose',
          'bluetooth LE',
          'WebSocket',
          'Bash Linux',
          'Python'
        ]
      },
      {
        name: `Reprise et modification de l'application de contrôle`,
        tools: [
          'React',
          'Typescript',
          'Node',
          'Hapi',
          'Sass',
          'i18n',
          'WebSocket'
        ]
      },
      {
        name: 'API micro services et application back-office',
        tools: [
          'Micro services',
          'TypeORM',
          'express',
          'API gateway',
          'Postman',
          'ReactAdmin',
          'Docker',
          'Kubernetes',
          'GCP'
        ]
      }
    ]
  },
  // Aryballe Technologies
  {
    completeTitle: {
      type: 'CDI',
      title: 'DÉVELOPPEMENT D’UN NEZ ÉLECTRONIQUE'
    },
    subtitle: {
      enterprise: 'Aryballe Technologies',
      years: '2015 - 2019'
    },
    tasks: [
      {
        name: 'Prototypage d’un nez électronique (Neose)',
        details: [
          `firmware sur base de Raspberry Pi`,
          `serveur web : interaction à partir d’une page web avec l’ensemble des composants du nez
          électronique`,
          `base de données / API pour le stockage des enregistrements`
        ],
        tools: [
          'Php',
          'SQL',
          'Python',
          'C',
          'Bash',
          'Linux'
        ]
      },
      {
        name: 'Algorithmes de traitement des données et représentations graphiques adaptées',
        tools: [
          'Réseaux de neurones',
          'deep learning',
          'classifieurs',
          'ACP',
          'MDS'
        ]
      },
      {
        name: 'Application desktop de gestion du nez',
        tools: [
          'Electron',
          'JavaScript',
          'TypeScript',
          'ReactJs'
        ]
      },
      {
        name: `Transfert d’API et interface d'administration`,
        tools: [
          'FeathersJS',
          'React Admin',
          'base de données SQL'
        ]
      }
    ]
  },
  // eNovAlp
  {
    completeTitle: {
      type: 'ALTERNANCE',
      title: 'MIGRATION D’UN MIDDLEWARE EN VB.NET'
    },
    subtitle: {
      enterprise: 'eNovAlp',
      years: '2013 - 2014'
    },
  },
  // ESRF
  {
    completeTitle: {
      type: 'STAGE',
      title: 'APPLICATION DE GESTION D’EMPRUNT EN PHP'
    },
    subtitle: {
      enterprise: 'ESRF',
      years: '2013'
    },
  }
]

const Index = ({ data, title, description }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Thomas Laforge - Mon CV</title>
      </Head>
      <div className="cv">
        <h1 className="cv-title">CV de Thomas Laforge</h1>
        <div className="cv-function">Développeur Web Full Stack JS</div>

        <div className="cv-download">
          <a className="cv-download-btn button" 
            href="/Laforge_Thomas_CV.pdf" 
            target="_blank" 
            download
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="cv-presentation">
          <h2 className="cv-presentation-title">Profil personnel</h2>
          <div className="cv-presentation-content">
            Je suis un développeur professionnel et motivé, doté de
            nombreuses années d'expérience dans la création
            d'applications et services web. Je me spécialise dans
            l'environnement Javascript, me permettant de réaliser tous
            types de projets, allant d'une application web à une
            application mobile, en passant par des applications Mac /
            Windows ou même de l'électronique / IOT.
            Je suis très curieux et pratique une veille technologique très
            fréquente. Tout me passionne et j'aime apprendre en continu.
          </div>
        </div>
      
        <div className="cv-professional-experiences">
          <h2 className="professional-experiences-title">Expèriences professionnelles</h2>
          <ul className="professional-experiences-list">
            {experiences.map( (xp, k) => (
              <li className="professional-xp" key={k}>
                <div className="xp-complete-title">
                  <div className="xp-type">{xp.completeTitle.type}</div>
                  <div className="xp-title-separator">-</div>
                  <div className="xp-title">{xp.completeTitle.title}</div>
                </div>
                <div className="xp-subtitle">
                  <div className="xp-enterprise">{xp.subtitle.enterprise}</div>
                  <div className="xp-subtitle-separator">-</div>
                  <div className="xp-years">{xp.subtitle.years}</div>
                </div>
                {xp.tasks && 
                  <div className="xp-tasks">
                    {xp.tasks.map((t, i) => (
                      <div className="task" key={i}>
                        <div className="task-name">{t.name}</div>
                        {t.details && 
                          <ul className="task-details">
                            {t.details.map((detail, j) => (
                              <li className="task-detail" key={j}>{detail}</li>
                            ))}
                          </ul>
                        }
                        <div className="task-tools">Outils : {t.tools.join(', ')}</div>
                      </div>
                    ))}
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">Compétences et savoir-faire</h2>
          <ul className="skills-list">
            <li className="skill">Langages : Typescript (++), JS, Php, C#, C</li>
            <li className="skill">Front : Sass, React, Vue, HTML5, CSS, Nextjs, Electron, ReactNative</li>
            <li className="skill">Back : Node, Deno, Express, Hapi, Sqlite, MariaDB, Postgre, SQL, REST API, graphql</li>
            <li className="skill">Gestion projet : Git, GitHub, Gitlab, Gantt, Trello, Markdown</li>
            <li className="skill">Devops : GCP, Vercel, Heroku, Firebase, Micro services, API Gateway, Docker</li>
          </ul>
        </div>

        <div className="cv-formations">
          <h2>Formations</h2>
          {
            formations.map( (formation, index) => (
              <div className="formation" key={index}>
                <div className="formation-title">{formation.title}</div>
                <div className="formation-info">
                  <div className="formation-years">{formation.years}</div>
                  <div className="formation-address">{formation.address}</div>
                </div>
              </div>
            )) 
          }
        </div>

        <div className="hobbies">
          <h2 className="hobbies-title">Passions</h2>
          <ul className="hobbies-list">
            <li className="hobby">Sport : triathlon, squash, badminton, marathon, trail, etc...</li>
            <li className="hobby">Adaptation de jeux de société en application web</li>
            <li className="hobby">Electronique et projets IOT (arduino, raspberry)</li>
            <li className="hobby">Sport automobile : karting et simulateur</li>
            <li className="hobby">Impression 3D, dessin 3D</li>
            <li className="hobby">Jeux de sociétés</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;