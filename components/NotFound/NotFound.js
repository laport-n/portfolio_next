import React from 'react';
import './../../styles/NotFound.module.css';
import { Animated } from "react-animated-css";
import Header from './../../components/Header/Header';
import Head from 'next/head'

function NotFound(props) {
  return (
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo-200_200.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <title>La page que vous cherchez n'existe pas.</title>
        <meta name="description" content="La page que vous cherchez n'existe pas."/>
      </Head>
      <div className="not-found">
        <Animated animationIn="flipInX" animationOut="bounceOutRight" isVisible={true}>
        <h1 style={{textAlign:"center", fontSize:"40px"}}>OUPSI</h1>
        <h1 style={{textAlign:"center", fontSize:"54px"}}>404 NOT FOUND</h1>
        <h1 style={{textAlign:"center", fontSize:"36px"}}>La page à laquelle vous essayez d'accéder n'existe pas</h1>
        </Animated>
      </div>
    </div>
  );
}

export default NotFound;
