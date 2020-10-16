import React, { Suspense } from 'react';
import ErrorLazyLoading  from '../../components/Utils/ErrorLazyLoading';
import Share from '../../components/Share/Share';
import styles from './../../styles/ArticleManager.module.css';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import NotFound from '../../components/NotFound/NotFound';
import Header from './../../components/Header/Header';
import Head from 'next/head'

const titles = [
  "Créer sa première extension chrome"
];

const metaDescriptions = [
  "Venez apprendre à créer votre première extension chrome dans ce tutoriel. Nous allons créer une extension pour chrome qui modifiera du contenu de la page courante."
]

function ArticleManager(props) {
  const router = useRouter();
  const articleId = router.query["id"];
  const title = titles[articleId - 1];
  const metaDescription = metaDescriptions[articleId -1];
  const Article = dynamic(
    () => import('./../../articles/'+articleId+'/Article').then(article => article).catch(error => import('../../components/NotFound/NotFound')),
    {
      loading: () => <h1 style={{textAlign:"center"}}>Loading article...</h1>
    }
  );
  const shareUrl = "https://nicolas-laporte.dev/#/article/" + articleId;

  return (
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo-200_200.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <title>{title}</title>
        <meta name="description" content={metaDescription}/>
      </Head>
      <Header />
      <Article />
    </div>
  );
}

export default ArticleManager;
