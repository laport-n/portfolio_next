import React from 'react';
import styles from './../../styles/article/1/Article.module.css';
import { Animated } from "react-animated-css";
import Share from '../../components/Share/Share';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Article(props) {

  const code1 =
`//On vérifie strictement que notre navigateur est sur la page google.com
if  (window.location.href === "https://www.google.com/") {
  //ici l'objet document et celui de la page courante google.com
  //On vient modifier son background color
  document.body.style.backgroundColor = "#FF8A65";
}`;

  const code2 =
  `//On vérifie strictement que notre navigateur est sur la page google.com
if  (window.location.href === "https://www.google.com/") {
  document.body.style.backgroundColor = "#FF8A65";
  const h1 = document.createElement("h1");
  h1.style.textAlign = "center";
  const text = document.createTextNode("Hello World");
  h1.appendChild(text);
  document.getElementById("body").appendChild(h1);
}`;

const title = "Créer sa première Extension Chrome";

const shareUrl = "https://nicolas-laporte.dev/articles/article?id=1";

  return (
    <div>
    <Share title={title} shareUrl={shareUrl} />
    <Animated animationIn="fadeInUpBig" animationOut="bounceOutRight" isVisible={true}>
      <img className={styles.imagePresentation} src={"/presentation_article_1.jpg"} alt="not-found" />
    </Animated>
    <Animated animationIn="zoomInUp" animationOut="bounceOutRight" isVisible={true}>
      <div className={styles.contentContainer, styles.article}>
        <div className="section">
          <h1 className={styles.articleTitle}>Créer sa première Extension Chrome</h1>
          <p className="paragraph">
            Nous allons créer ensemble notre première extension pour chrome.
            Cette extension permettra de modifier la couleur background de la page google.com de l'utilisateur et d'y ajouter du contenu.
            Un premier pas pour apprendre à construire ses propres extensions et découvrir ce type de développement peu répandu.
          </p>
        </div>

        <div className="section">
          <h3 className="subTitle">1 - Une extension c'est quoi ?</h3>
          <p className="paragraph">
            Avant de démarrer, il faut d'abord que l'on comprenne ce qu'est une extension.
            Une extension pour navigateur c'est une application qui permet de modifier votre interface utilisateur et d'ajouter des fonctionnalités Web à votre navigateur.
          </p>
          <p className="paragraph">
            En résumé :
          </p>
            <ul>
              <li>
                  <b style={{fontWeight:"bold", fontSize:"18px"}}>Les extensions sont des logiciels qui permettent de personnaliser le navigateur.</b>
              </li>
            </ul>
        </div>

        <div className="section">
          <h3 className="subTitle">2 - Ou se trouve les extensions ?</h3>
          <p className="paragraph">
            Ces petits logiciels ont leur propre store et chaque store est différent selon le navigateur que vous utilisez.
            Dans cet article nous allons parler des extensions qui fonctionnent sur le navigateur chrome.
            Vous pouvez retrouver toutes les extensions sur le <a className={styles.link} href="https://chrome.google.com/webstore/category/extensions" rel="noopener noreferrer" target="_blank">Chrome store</a>
          </p>
        </div>

        <div className="section">
        <h3 className="subTitle">3 - La structure</h3>
          <p className="paragraph">
            Pour démarrer, notre extension doit contenir au minium trois éléments :
          </p>
          <ul className={styles.list}>
            <li className={styles.liItem}>
              Un dossier <a className={styles.link} href="https://developer.chrome.com/apps/manifest/icons" rel="noopener noreferrer" target="_blank">icône</a> qui contient un/des icônes pour afficher notre extension dans la barre "Extensions" en haut à droite de votre navigateur.
            </li>
            <li className={styles.liItem}>
              Le fichier <a className={styles.link} href="https://developer.chrome.com/extensions/manifest" rel="noopener noreferrer" target="_blank">manifest</a> au format json qui contient toutes les informations sur l'extension (du nom de l'extension aux différentes APIs chrome que l'on souhaite utiliser)
            </li>
            <li className={styles.liItem}>
            Un <a className={styles.link} href="https://developer.chrome.com/extensions/background_pages" rel="noopener noreferrer" target="_blank">background_script</a> et/ou <a className={styles.link} href="https://developer.chrome.com/extensions/content_scripts" rel="noopener noreferrer" target="_blank">content_script</a> au format javascript qui vas permettre de réaliser des actions. Il est possible d'utiliser les deux, selon vos besoins pour l'application.
            </li>
          </ul>
          <p className={styles.liItem}>Je vous ai facilité la vie et vous pouvez démarrer en clônant le répertoire ci-dessous : <a className={styles.link} href="https://github.com/laport-n/chrome_extension" rel="noopener noreferrer" target="_blank">Github</a> </p>
        </div>

        <div className="section">
          <h3 className="subTitle">4 - Installons l'extension</h3>
          <p className="paragraph">
            Une fois que vous avez téléchargé le répertoire git du projet chrome_extension, il ne vous reste plus qu'à installer l'extension sur votre navigateur chrome. Pour ce faire, ouvrez votre navigateur, accéder à l'onglet extension.
          </p>
          <div className={styles.imagePlaces}>
            <img className={styles.image} src={"/access_extension_panel.png"} alt="not-found" />
          </div>
          <p>
            Activez le mode développeur qui va vous permettre d'installer/manager vos propres extensions.
          </p>
          <div className={styles.imagePlaces}>
            <img className={styles.image} src={"/dev_extension.png"} alt="not-found" />
          </div>
          <p>
            Cliquez sur Charger l'extension non empaquetée et sélectionner le répertoire chrome_extension.
          </p>
          <div className={styles.imagePlaces}>
            <img className={styles.image} src={"/chrome_extension_load.png"} alt="not-found" />
          </div>
          <p>
            Vous devriez voir apparaître l'extension "Hello world" en version 0.0.1 sur votre écran.
            Pour le moment cette extension ne fait qu'écrire "hello world" dans la console de debugging de chrome lorsque l'on ouvre une page internet. Nous allons y ajouter un peu de code afin de modifier la page https://google.com
          </p>
        </div>

        <div className="section">
          <h3 className="subTitle">5 - Ajoutons un peu de code</h3>
          <p className="paragraph">
            Dans un premier temps, ouvrez votre fichier content.js avec votre IDE favori. C'est ce script qui permet d'interagir avec la page courante de votre navigateur. Actuellement, il ne fait qu'écrire en console "hello world".
            Nous allons faire en sorte que notre script identifie la page https://google.com et vienne changer la couleur background de cette page.
          </p>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {code1}
          </SyntaxHighlighter>

          <p className="paragraph">
            Sauvegardez vos modifications, puis retournez sur le pannel extension et cliquez sur la flèche pour mettre à jour votre extension.
            Accéder à https://www.google.com/ et TADAM vous avez modifié le contenu de la page de google en changeant la couleur du background !
            Vous l'avez compris, en accédant à l'objet document de la page courante, vous pouvez créer/modifier toute sorte de contenu. Y ajouter des objets javascript, en supprimer etc..
            Dailleurs, nous allons y ajouter un peu de contenu.
          </p>
          <p className="paragraph">
          Retournez sur le fichier content.js et ajouter le code suivant.
          </p>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {code2}
          </SyntaxHighlighter>

          <p className="paragraph">
            Sauvegardez vos modifications, mettez à jour votre extension puis rendez-vous sur la page https://google.com.
            Vous devriez apercevoir votre titre Hello world sur la page.
            Nous avons modifié dans un premier temps le style de la page courante, puis nous y avons ajouté un élément javascript de façon dynamique.
            Vous l'avez compris, les extensions pour navigateur offrent des possibilités infini.
          </p>
        </div>

        <div className="section">
          <h3 className="subTitle">Conclusion</h3>
          <p className="paragraph">
          J'espère que cet article aura attisé votre curiosité et que vous envisagez de coder votre propre extension.
          </p>
          <p className="paragraph">
          N'hésitez surtout pas à parcourir la documentation des <a className={styles.link} href="https://developer.chrome.com/extensions/api_index" rel="noopener noreferrer" target="_blank">APIs chrome</a> permettand d'accéder à différentes fonctionnalités offertes par le navigateur.
          </p>
          <p className="paragraph">
            Dans ce petit tuto nous avons abordé une infime partie du développement des extensions. Il reste énormément de fonctionnalités à détailler (background.js, ajout de librairie externe, le pannel option etc...) que j'aborderai potentiellement dans un prochain article.
          </p>
          <p className="paragraph">
          Pour les plus curieux, voici l'extension que j'ai moi-même créée :
          </p>
          <ul className={styles.list}>
            <li className="list-item"><a className={styles.link} href="https://chrome.google.com/webstore/detail/url-render/flhclpkhoiajoikkabbfbinnjapaflog?hl=fr" rel="noopener noreferrer" target="_blank">url-render</a></li>
          </ul>
        </div>
      </div>
    </Animated>
    </div>
  );
}

export default Article;
