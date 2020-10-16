import React from 'react';
import styles from './../../styles/ProjectArticle.module.css';
import { Animated } from "react-animated-css";
import NotFound from './../../components/NotFound/NotFound';
import { useRouter } from 'next/router'
import Header from './../../components/Header/Header';
import Head from 'next/head'


const projects = [
  {
    "id": 1,
    "image": "./url_render_card.png",
    "title": "Url render",
    "duration" : "Juin 2016 à aujourd'hui",
    "organisation" : "Self project",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?"
    ],
    "paragraphs" : [
      "Le projet contient deux parties, la première est une extension pour navigateur qui a été réalisée avec JQuery, Javascript, CSS, HTML5 ainsi que Chrome APIs. La seconde est un site web hébergé sur une vm scaleway qui a été réalisé en NodeJs/Express et EJS.",
      "L'objectif de ce projet était essentiellement de me challenger et de réaliser un projet dans son ensemble. L'objectif de l'extension est de permettre de faciliter nos recherches sur internet.",
      "Ce projet a été réalisé seul, je me suis imposé un cadre de travail 'Agile', pour essayer d'itérer et produire des évolutions le plus rapidement possible, tout en répondant aux différentes demandes de support."
    ],
    "link" : "https://chrome.google.com/webstore/detail/url-render/flhclpkhoiajoikkabbfbinnjapaflog?hl=en",
    "meta_description" : "Url render est une extension pour navigateur que j'ai créé en 2016 et qui a plus de 12 000 utilisateurs aujourd'hui"
  },
  {
    "id": 2,
    "image": "./url_render_card.png",
    "title": "DCP+",
    "duration" : "De Mars 2018 à Avril 2019",
    "organisation" : "Capgemini",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?",
      "Mon rôle"
    ],
    "paragraphs" : [
      "Le projet avait initialement était développé en PHP, c'était une application monolithique. Nous y avons ajouté, Bootstrap et JQuery. Nous avons aussi factorisé le code afin d'y implémenter du MVC. Une API en laravel a été développé permettant de synchroniser deux bases de données (mobile/web).",
      "Ce projet avait pour but d'offrir une vision 360° aux conseillers bancaires du crédit agricole Pyrénées Gascogne.",
      "Mon premier projet chez Capgemini, nous avons travaillé en cycle en V dans une équipe de 3 à 7 personnes.",
      "J'avais pour rôle de développer de nouvelles fonctionnalités en fonction des besoins clients. J'intervenais dès l'analyse du besoin, jusqu'à la mise en production de la fonctionnalité."
    ],
    "meta_description" : "Le projet avait initialement était développé en PHP, c'était une application monolithique. Nous y avons ajouté, Bootstrap et JQuery. Nous avons aussi factorisé le code afin d'y implémenter du MVC. Une API en laravel a été développé permettant de synchroniser deux bases de données (mobile/web)."
  },
  {
    "id": 3,
    "image": "./meetpro.png",
    "title": "MEETPRO",
    "duration" : "De septembre 2017 à février 2018",
    "organisation" : "Meetpro",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?",
      "Mon rôle"
    ],
    "paragraphs" : [
      "Le projet est développé avec le framework Symfony 4.",
      "L'objectif de MEETPRO est de rassembler tous les acteurs de l'entrepreneuriat (TPE/PME). C'est un site dédié à la reprise, cession, transmission, création d'entreprise.",
      "Dans un environnement Startup, nous avons travaillé de 3 à 5 développeurs.",
      "Mon rôle principal a été de réaliser le système permettant de faire se correspondre les différentes annonces proposées sur le site web. J'ai aussi aidé à améliorer certaines fonctionnalités du site web ainsi que des correctifs d'anomalies."
    ],
    "meta_description" : "L'objectif de MEETPRO est de rassembler tous les acteurs de l'entrepreneuriat (TPE/PME). C'est un site dédié à la reprise, cession, transmission, création d'entreprise."
  },
  {
    "id": 4,
    "image": "./url_render_card.png",
    "title": "NBQ",
    "duration" : "De juin 2019 à janvier 2020",
    "organisation" : "Capgemini",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?",
      "Mon rôle"
    ],
    "paragraphs" : [
      "Le projet a été développé avec les technologies Spring boot pour la partie backend et un framework privatif du crédit agricole pour la partie frontend.",
      "L'objectif de ce projet est de permettre à des conseillers bancaires de proposer des packages d'offres bancaires. Les clients quant à eux peuvent souscrire à l'offre packagée sur différents supports.",
      "Ce projet a été réalisé chez le client, dans un cadre agile avec 2 squads de 4 à 10 personnes.",
      "En tant que backup du référent technique, mon rôle a été de réaliser différentes fonctionnalités front et back. J'ai aussi mis en place tous le système de construction de la liasse de documents contractuels à faire signer aux clients lors de la souscription."
    ],
    "meta_description" : "Le projet a été développé avec les technologies Spring boot pour la partie backend et un framework privatif du crédit agricole pour la partie frontend."
  },
  {
    "id": 5,
    "image": "./url_render_card.png",
    "title": "Design station",
    "duration" : "De Janvier 2020 à Juillet 2020",
    "organisation" : "Capgemini",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?",
      "Mon rôle"
    ],
    "paragraphs" : [
      "Le projet a été développé avec Angular8, fabricJS pour la partie fronted et spring boot pour la partie backend.",
      "Dans le cadre du replatforming pour les SI Bancaires, les architectes afin de faciliter leur prise de décision avaient besoin d'un outil permettant de visualiser/manipuler l'ensemble des applications et leurs dépendances du SI Bancaires. L'outil facilite la prise de décision et permet de traiter les différents paterns d'interopérabilités.",
      "Projet from-scratch développé dans un cadre Agile avec une équipe de 5 personnes au sein de Capgemini.",
      "Référent technique sur la partie frontend, je me suis occupé de la mise en place de toute la partie visuelle de l'application, j'ai aussi formé et aidé les différents développeurs qui ont participé à l'évolution de l'application."
    ],
    "meta_description" : "Le projet a été développé avec Angular8, fabricJS pour la partie fronted et spring boot pour la partie backend."

  },
  {
    "id": 6,
    "image": "./url_render_card.png",
    "title": "Search ref",
    "duration" : "De Juillet 2020 à Octobre 2020",
    "organisation" : "Capgemini",
    "subTitles" : [
      "Quelle(s) techno(s) ?",
      "Quel(s) besoin(s) ?",
      "Quel environnement ?",
      "Mon rôle"
    ],
    "paragraphs" : [
      "Le projet a été réalisé avec Angular8 pour la partie front, et Drupal headless pour la partie back.",
      "Ce projet a pour but de présenter un catalogue des différents projets réalisés par Capgemini. Un mode contribution est aussi mis en place afin de permettre aux différents manager de projet d'alimenter le catalogue.",
      "Projet réalisé dans un cadre Agile avec une équipe de 5 à 12 personnes.",
      "Référent technique sur le projet, ma mission a été de mettre en place les bonnes pratiques de développements. Tout en m'occupant de la mise en place de docker/jenkins pour permettre aux équipes de travailler en développements continue."
    ],
    "meta_description" : "Le projet a été réalisé avec Angular8 pour la partie front, et Drupal headless pour la partie back."
  }
];

function ProjectArticle() {
  const router = useRouter();
  const projectId = router.query["id"];
  const project = projects[projectId-1];
  if (typeof project != 'undefined'){
    return (
      <div className="App">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/logo-200_200.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          <title>{project.title}</title>
          <meta name="description" content={project.meta_description}/>
        </Head>
        <Header />
        <Animated animationIn="zoomInUp" animationOut="bounceOutRight" isVisible={true}>
        <div className={styles.contentContainer, styles.project}>
          <h1 className="titleUnderlined">{project.title}</h1>
          <div className="metaData">
            <h4 className="duration">{project.duration}</h4>
            <h4 className="organisation">{project.organisation}</h4>
            { typeof project.link !== "undefined" ? <a rel="noopener noreferrer" href={project.link} className="link" target="_blank">Accéder au projet</a> : "" }
          </div>
          { project.subTitles.map((item, index) =>
            <div key={index} className="section">
              <h3 className="subTitle">{item}</h3>
              <p className="paragraph">{project.paragraphs[index]}</p>
            </div>
          )}
        </div>
      </Animated>
    </div>
    );
  } else {
    return (
      <div className="App">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/logo-200_200.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          <title>Project not found</title>
          <meta name="description" content="Url render est une extension pour navigateur que j'ai créé en 2016 et qui a plus de 12 000 utilisateurs aujourd'hui"/>
        </Head>
        <Header />
        <NotFound></NotFound>
      </div>
    );
  }
}

export default ProjectArticle;
