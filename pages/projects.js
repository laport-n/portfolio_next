import React from 'react';
import styles from './../styles/Projects.module.css';
import { Animated } from "react-animated-css";

import {Helmet} from "react-helmet";

import ProjectCard from './../components/Projects/ProjectCard';
import Header from './../components/Header/Header';
import Head from 'next/head'

const cardsInfo = [
  {
    "id": 1,
    "image": "./url_render_card.png",
    "title": "Url render",
    "summary": "Une extension chrome qui comptabilise plus de 12 000 utilisateurs."
  },
  {
    "id": 2,
    "image": "./credit_agricole.jpg",
    "title": "DCP+",
    "summary": "Amélioration d'une application web en PHP/Jquery/SQL pour le crédit agricole"
  },
  {
    "id": 3,
    "image": "./meetpro.png",
    "title": "MEETPRO",
    "summary": "Amélioration des fonctionnalités du site web et création d'un système de matching entre les différentes annonces"
  },
  {
    "id": 4,
    "image": "./credit_agricole.jpg",
    "title": "NBQ",
    "summary": "Création from-scratch d'un outil permettant la génération de liasses contractuelles pour le crédit agricole"
  },
  {
    "id": 5,
    "image": "./station_design.jpg",
    "title": "Design-Station",
    "summary": "Création from-scratch d'une application web permettant de faciliter la prise de décision des architectes capgemini dans le cadre du replatforming"
  },
  {
    "id": 6,
    "image": "./search_ref.png",
    "title": "SearchRef",
    "summary": "Référent technique sur l'application, mise en place des outils de développements continue (docker/jenkins) et des différents environnements de développements"
  },
];

function Projects() {
  const items = [];

  let animationDuration = 0;

  for (let x = 0; x < cardsInfo.length; x++){
    items.push(
        <Animated key={x} animationIn="flipInX" animationInDelay={animationDuration}  animationOut="bounceOutRight" isVisible={true}>
          <ProjectCard key={x} id={cardsInfo[x].id} image={cardsInfo[x].image} title={cardsInfo[x].title} summary={cardsInfo[x].summary} animationDuration={animationDuration} />
        </Animated>
    );
    animationDuration+=120;
  }

  return (
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo-200_200.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <title>Ma carrière en tant que développeur - Laporte Nicolas</title>
        <meta name="description" content="Nicolas laporte développeur informatique depuis 6 ans. Possibilités de travailler depuis Montpellier ou en remote. Créateur de contenu, site web et maintenance."/>
      </Head>
      <Header />
      <div className={styles.projects}>
        {items}
      </div>
    </div>
  );
}

export default Projects;
