import React, {useState} from 'react';
import styles from './../../styles/ArticleSummary.module.css';

import { Transition } from 'react-transition-group';
import Link from 'next/link'

function ArticleSummary(props) {
  const duration = props.animationDuration;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };
  const link = "/articles/article?id=" + props.id;
  const [inProp, setInProp] = useState(false);
  setTimeout(()=> {
    setInProp(true);
  }, 0);
  return (
    <Transition in={inProp} timeout={duration}>
    { state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
      <Link href={link}>
        <a className={styles.articleSummaryContainer}>
          <div className={styles.articleSummary}>
            <p className={styles.date}>{props.createdAt}</p>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.summary} >{props.summary}</p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.articleImage} src={props.image} alt="not-found"/>
          </div>
        </a>
      </Link>
    </div>
    )}
    </Transition>
  );
}

export default ArticleSummary;
