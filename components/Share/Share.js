import React from 'react';
import styles from './../../styles/Share.module.css';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

import { Animated } from "react-animated-css";


function Share(props) {
  return (
    <Animated className={styles.shareButtons} animationIn="fadeInDownBig" animationOut="bounceOutRight" isVisible={true}>
    <div className={styles.shareButtons}>

        <TwitterShareButton url={props.shareUrl} title={props.title} via={"NicolasLaporteDev"} hashtags={["extension", "nicolasLaporte", "tuto", "extensionChrome"]}>
          <TwitterIcon size={50} square="true" />
        </TwitterShareButton>

        <FacebookShareButton quote={"Apprendre à créer vos propres extensions pour le navigateur chrome"} hashtag={"#NicolasLaporte"} url={props.shareUrl} title={props.title}>
          <FacebookIcon size={50} square="true" />
        </FacebookShareButton>

        <FacebookMessengerShareButton appId={"349492619697365"} url={props.shareUrl} title={props.title}>
          <FacebookMessengerIcon size={50} square="true" />
        </FacebookMessengerShareButton>

        <LinkedinShareButton url={props.shareUrl} title={props.title} summary={"Un tutoriel permettant d’apprendre à créer vos propres extensions pour le navigateur chrome"} source={props.shareUrl}>
          <LinkedinIcon size={50} square="true" />
        </LinkedinShareButton>

        <EmailShareButton url={props.shareUrl} body={"Un tutoriel permettant d’apprendre à créer vos propres extensions pour le navigateur chrome."} subject={props.title} title={props.title}>
          <EmailIcon size={50} square="true" />
        </EmailShareButton>

    </div>
  </Animated>
  );
}

export default Share;
