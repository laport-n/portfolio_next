import React from 'react';
import styles from './../styles/About.module.css';
import { Animated } from "react-animated-css";

import Header from './../components/Header/Header';
import Head from 'next/head'

function About() {
  return (
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo-200_200.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <title>Laporte Nicolas développeur, Montpellier</title>
        <meta name="description" content="Je m'appelle Nicolas Laporte, j'ai 29 ans, j'habite à Montpellier et je suis développeur depuis maintenant 6 ans. Actuellement chez Capgemini depuis 3ans. Ouvert à de nouvelles opportunités."/>
        <link rel="canonical" href="http://nicolas-laporte.dev/about"/>
      </Head>
      <Header />
      <Animated animationIn="zoomInUp" animationOut="bounceOutRight" isVisible={true}>
      <div className="contentContainer about" style={{marginBottom: "60px"}}>
        <h1 className="titleUnderlined">Contact</h1>
        <div className="metaData">
          <h4 className="organisation">06.76.13.96.59</h4>
          <h4 className="organisation">nicolas-1301@live.fr</h4>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nicolas-laporte-5b9929147/" className="link" target="_blank">Linkedin</a>
        </div>
        <div className="section">
          <h3 className="subTitle">A propos de moi</h3>
          <p className="paragraph">
            Je m'appelle Nicolas Laporte, j'ai 29 ans, j'habite à Montpellier et je suis développeur depuis maintenant 6 ans.
            J'ai été diplômé en 2018 de l'école Epitech.
          </p>
          <p className="paragraph">
            Ça fait maintenant 3 ans que je travaille chez Capgemini FSBU à Montpellier.
            J'ai commencé en tant que stagiaire et je suis aujourd'hui développeur logiciel Grade B avec pour rôle principal d'être référent technique sur les projets que je rejoins.
          </p>
        </div>
        <div className="section">
          <h3 className="subTitle">Mes forces</h3>
          <p className="paragraph">
            Je suis une personne créative, polyvalente, qui aime les challenges techniques et acquérir de nouvelles compétences.
          </p>
          <p className="paragraph">
            De nature très humaine et ayant un bon relationnel, je m'intègre facilement dans les équipes projets.
          </p>
          <p className="paragraph">
            J'ai durant ces 3 années travaillait sur un grand nombre de technologies, de projets et de méthodologies. J'ai appris à apprendre et à mettre en oeuvre mes connaissances transverses.
          </p>
        </div>
        <div className="section">
          <h3 className="subTitle">Mes envies</h3>
          <p className="paragraph">
            Après maintenant 3 ans à travailler dans le domaine de l'IT sur différentes technologies, je cherche à étendre mes connaissances sur les frameworks/librairies associés au Javascript.
          </p>
          <p className="paragraph">
            Des technologies que j'utilise sur mes projets personnels, mais que je n'ai pour le moment pas eu la chance d'utiliser dans le cadre de projets professionnels.
          </p>
        </div>
      </div>
    </Animated>
  </div>
  );
}

export default About;
