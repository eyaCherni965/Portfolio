"use client";
import { useState } from "react";
import Image from "next/image";
import { withRouter } from "next/router";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">E</div>
          <div className="logo-text">Portfolio Eya Cherni</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#formations">Formations</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="mailto:chernieya2010@gmail.com" className="button">Contactez-moi</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Bonjour c'est</small>
                Eya Cherni
              </h1>
              <p className= "premier">Mon parcours : de la science de la nature au cégep, puis à la deuxième année d’ingénierie à l’ETS. Bref, beaucoup de chemins tortueux, mais aucun GPS n’aurait mieux fait. Aujourd’hui, je travaille dans ma vraie passion et j’adore ça. Mon rêve ? Continuer à grandir, explorer de nouvelles technologies et faire partie de cette génération d’ingénieurs qui transforme notre société.<br /></p>
            
              <p >En peu de temps, je suis passée d’une connaissance minime en programmation à la création de sites web et au développement d’applications fonctionnelles, tout en continuant à apprendre chaque jour. Bienvenue sur mon portfolio ! Je vous invite à parcourir mes projets et à découvrir mes compétences, mes expériences…et à partager avec moi l’aventure captivante de créer, coder et innover.</p>
              <div className="call-to-action">
                <a href="/CV 2025 (1).pdf" className="button black" target="_blank">
                  Voir mon CV
                </a>
                <a href="mailto:chernieya2010@gmail.com" className="button white" target="_blank">
                  Contactez-moi
                </a>
              </div>
              <div className="social-links">
                <a href="http://surl.li/blmwje" target="_blank" >
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/eyacherni" target="_blank">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>

        {/*IMAGE DE PRÉSENTATION*/}
         {/*<div className="hero-yellow">
            <img src="./imgs/5a830437abc3d121aba71238.png" alt="Eya Cherni" width="100%" />
          </div> */}


        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">

               <img src="/nextjs-icon-dark-background.png" alt="Next.js" width="128" />
              <img src="./imgs/C_Programming_Language.png" alt="C" width="128" />
              <img src="./imgs/java.png" alt="Java" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/php.png" alt="PHP" width="128" />
              <img src="./imgs/gnu-bash.png" alt="Bash script" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/mysql.png" alt="MySQL" width="128" />
              <img src="./imgs/microsoft.png" alt="Microsoft Office Suite" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/image.png" alt="Canva" width="128" />
              <img src="./imgs/C_Programming_Language.png" alt="C" width="128" />
              <img src="./imgs/java.png" alt="Java" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/php.png" alt="PHP" width="128" />
              <img src="./imgs/gnu-bash.png" alt="Bash script" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/mysql.png" alt="MySQL" width="128" />
              <img src="./imgs/microsoft.png" alt="Microsoft Office Suite" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/image.png" alt="Canva" width="128" />
 
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>À propos de moi</small>
            Compétences
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Développement Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Canva</li>
              </ul>
              <h3>Développement Backend</h3>
              <ul>
                <li>C</li>
                <li>JAVA</li>
                <li>PHP</li>
                <li>MYSQL</li>
                <li>Azure</li>
                <li>MYSQL</li>
                <li>Microsoft Office Suite</li>
                <li>Assembleur</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>Compétences techniques et générales</h3>
              <p>
               Parallèlement à mes compétences en développement, je sais <strong>résoudre</strong> des problèmes complexes, <strong>concevoir</strong> des solutions efficaces pour des applications ou des sites web, <strong>travailler</strong> en équipe sur des projets collaboratifs, <strong>communiquer</strong> clairement des idées techniques, <strong>mener</strong> des recherches pour intégrer de nouvelles technologies, <strong>documenter</strong> et <strong>rédiger</strong> du code ou des guides utilisateurs, et <strong>gérer</strong> des projets afin de respecter les délais et atteindre les objectifs.
              </p>
              <p>
              </p>
            </div>
          </div>
        </section>
        <section id="formations" className="formation container">
          <h2>
            <small>Récent</small>
            Formations
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/ETS-7x5-150DPI.webp" alt="Formation 1 - Étude universitaire" width="100%" />
                  <figcaption>
                    Formation - Étude universitaire
                  </figcaption>
                </div>
              </figure>
              <h3>Baccalauréat en Génie logiciel</h3>
              <div>École de technologie supérieure, Montréal</div>
              <div>Août 2024 – Aujourd'hui</div>
              <p>À l'ÉTS en génie logiciel, j’ai acquis une <strong>solide base en programmation</strong> et j’ai été <strong>initiée à la gestion de projet Scrum</strong>, ce qui m’a permis de développer ma capacité à <strong>travailler efficacement en équipe</strong>. L’école, très <strong>axée sur la pratique</strong>, m’a offert l’occasion de <strong>mettre en application toutes les compétences théoriques</strong> que j’avais apprises, consolidant ainsi mon savoir-faire et ma confiance dans le développement logiciel.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/Cégep-Maisonneuve.jpg" alt="Formation 2 - Étude collégial" width="100%" />
                  <figcaption>
                    Formation - Étude collégial
                  </figcaption>
                </div>
              </figure>
              <h3>Sciences de la nature</h3>
              <div>Collège de Maisonneuve, Montréal</div>
              <div>Août 2022 – Mai 2024</div>
              <p>Au Cégep Maisonneuve, ma formation en <strong>sciences de la nature</strong> m’a permis de développer une solide <strong>capacité d’analyse</strong>, un <strong>esprit logique</strong> et une <strong>rigueur scientifique</strong> à travers des cours en <strong>mathématiques</strong>, <strong>physique</strong> et <strong>chimie</strong>. J’ai appris à <strong>résoudre des problèmes complexes</strong>, <strong>observer et interpréter des données avec précision</strong>, et <strong>approcher chaque défi avec méthode et curiosité</strong>. Ces compétences me servent aujourd’hui dans mes projets en génie et en développement informatique , en me donnant une base solide pour aborder toutes sortes de défis techniques.</p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Précédemment
            </small>
            Projets Réalisés
          </h2>
          <div className="bento-grid">
            <div  className="bento-item">
            <img src="./pomo12.png" alt="Pomodoro" width="100%" />
              <figcaption>
                <h4>Pomodoro</h4>
                <div>Site Web développé avec<strong> React</strong> et <strong>Tailwind CSS</strong>. Il permet de gérer son temps, personnaliser les sessions, et consulter ses statistiques. Hébergé sur <strong>Vercel</strong> pour un accès rapide en ligne.</div>
                <p> 
                <a href="https://pomodoro-tau-beige.vercel.app/" className="linkprojet" target="_blank"> Le site </a> / <a href="https://github.com/eyaCherni965/pomodoro" className="linkprojet" target="_blank"> GitHub </a> 

                </p>
              </figcaption>
            </div>
         
            <div  className="bento-item">
            <img src="/PFLogo.png" alt="Mon Portfolio" width="90%" />
              <figcaption>
                <h4>Mon Portfolio</h4>
                <div>Ce portfolio est développé avec <strong>Next.js</strong> et <strong>CSS</strong>, permettant de présenter mes <strong>projets</strong>, <strong>compétences</strong> et <strong>réalisations</strong>. Il est <strong>déployé sur Vercel</strong>, offrant un accès rapide.</div>
                <p> 
                <a href="https://github.com/eyaCherni965/Portfolio" className="linkprojet" target="_blank"> GitHub </a> 
                </p>
              </figcaption>
            </div>
            <div  className="bento-item">
            <img src="/proMatchLogo.png" alt="ProMatch" width="100%" />
              <figcaption>
                <h4>ProMatch App + Web </h4>
                <div>Développement d’une application et d’un site web en équipe, avec API backend sécurisée et base de données relationnelle.</div>
                <p> 
                <a href="/ProMatch1.pdf" className="linkprojet" target="_blank"> Description du projet</a> / <a href=" https://urls.fr/tpzA0J" className="linkprojet" target="_blank"> Code Web </a> / <a href="https://github.com/eyaCherni965/Projet-simulation-de-Tris/tree/main" className="linkprojet" target="_blank"> Code App </a> 
                </p>
              </figcaption>
            </div>
              <div  className="bento-item">
            <img src="/tris.png" alt="Simulation Tris" width="100%" />
              <figcaption>
                <h4>Simulation de tris</h4>
                <div>Curieuse de voir la simulation de six algorithmes de tri et de déterminer le plus efficace, j’ai décidé d’aller plus loin dans ce projet académique en <strong>simulant ces algorithmes en C</strong> sous <strong>Visual Studio</strong> avec <strong>WinBGIm</strong>.</div>
                <p> 
                <a href=" https://urls.fr/tpzA0J" className="linkprojet" target="_blank"> Démo </a> / <a href="https://github.com/eyaCherni965/Projet-simulation-de-Tris/tree/main" className="linkprojet" target="_blank"> GitHub </a> 
                </p>
              </figcaption>
            </div>
            {/*  POUR MES AUTRES PROJETS
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 5" width="100%" />
              <figcaption>
                <h4>Projet 5</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 6" width="100%" />
              <figcaption>
                <h4>Projet 6</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>*/}
          </div>
        </section>
      </main>
    </>
  );
}

  