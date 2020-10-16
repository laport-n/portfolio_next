import React from 'react';
import styles from  './../styles/Articles.module.css';
import { Animated } from "react-animated-css";

import ArticleSummary from './../components/Articles/ArticleSummary';
import Header from './../components/Header/Header';
import Head from 'next/head'

const articlesInfo = [
  {
    "id": 1,
    "createdAt": "Le 10/12/2020",
    "image": "./chrome_extension.png",
    "title": "Créer sa première extension chrome",
    "summary": "Nous allons créer notre première extension pour chrome. Cette extension permettra de modifier la page courante de l'utilisateur pour y ajouter des messages."
  }
];

function Articles() {
  const items = [];

  let animationDuration = 0;

  for (let x = 0; x < articlesInfo.length; x++){
    items.push(
      <Animated key={x} animationIn="flipInX" animationOut="bounceOutRight" animationInDelay={animationDuration} isVisible={true}>
        <ArticleSummary key={x} id={articlesInfo[x].id} createdAt={articlesInfo[x].createdAt} image={articlesInfo[x].image} title={articlesInfo[x].title} summary={articlesInfo[x].summary}  animationDuration={animationDuration} />
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
        <title>Des tutoriels, de quoi apprendre à programmer - Nicolas Laporte</title>
        <meta name="description" content="Venez découvrir des tutoriels pour apprendre à programmer sur différentes technologies (Chrome extension, react, javascript etc..). Vous trouverez aussi des articles concernant le métier de développeur."/>
      </Head>
      <Header />
      <div  className={styles.articles}>
        {items}
      </div>
    </div>
  );
}

export default Articles;
