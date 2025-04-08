"use client";
import { useState } from "react";
import Image from "next/image";

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
              <p>
                Jeune professionnelle passionnée par les technologies et l'innovation, je recherche un stage en informatique pour appliquer mes compétences académiques et pratiques. Enthousiaste à l'idée de contribuer au succès d'une organisation, je possède une solide capacité à résoudre des problèmes, à apprendre rapidement et à collaborer efficacement au sein d'équipes dynamiques. Engagée à développer des solutions innovantes, je suis déterminée à participer activement à la réussite des projets.
              </p>
              <div className="call-to-action">
                <a href="./requis/CV 2025 (1).pdf" className="button black">
                  Voir mon CV
                </a>
                <a href="mailto:chernieya2010@gmail.com" className="button white">
                  Contactez-moi
                </a>
              </div>
              <div className="social-links">
                <a href="http://surl.li/blmwje">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="linkedin.com/in/eya-cherni-585392142">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/5a830437abc3d121aba71238.png" alt="Eya Cherni" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
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
              </ul>
              <h3>Développement Backend</h3>
              <ul>
                <li>C</li>
                <li>JAVA</li>
                <li>PHP</li>
                <li>MYSQL</li>
                <li>BASH</li>
                <li>Assembleur</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>Quelques mots sur moi</h3>
              <p>
                Je suis Eya Cherni, une développeuse passionnée par les technologies et l'innovation. Je recherche actuellement un stage en informatique pour appliquer mes compétences académiques et pratiques.
              </p>
              <p>
                Je suis particulièrement intéressée par le développement web et les nouvelles technologies. Mon objectif est de contribuer à des projets innovants tout en continuant à apprendre et à me perfectionner.
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
              <p>Acquisition de compétences en développement logiciel, algorithmique et gestion de projets informatiques.</p>
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
              <p>Formation scientifique générale avec spécialisation en mathématiques et physique.</p>
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
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 1" width="100%" />
              <figcaption>
                <h4>Projet 1</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 2" width="100%" />
              <figcaption>
                <h4>Projet 2</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 3" width="100%" />
              <figcaption>
                <h4>Projet 3</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/gumball.webp" alt="Projet 4" width="100%" />
              <figcaption>
                <h4>Projet 4</h4>
                <div>Description du projet</div>
              </figcaption>
            </a>
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
            </a>
          </div>
        </section>
      </main>
    </>
  );
}