import React, {useState} from 'react';
import styles from './../../styles/ProjectCard.module.css';
import Link from 'next/link'

import { Transition } from 'react-transition-group';
function ProjectCard(props) {
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
  const link = "/projects/project?id=" + props.id;
  const [inProp, setInProp] = useState(false);
  setTimeout(()=> {
    setInProp(true);
  }, 0);
    const refWrapper = React.createRef();
    return (
      <Transition  ref={refWrapper} in={inProp} timeout={duration}>
      { state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        <Link href={link}>
          <a className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={props.image} alt="my image" />
            </div>
            <div className={styles.body}>
              <h4 className={styles.titleCard + " " + styles.linkProject}>{props.title}</h4>
              <p className={styles.summary}>{props.summary}</p>
            </div>
          </a>
        </Link>
      </div>
      )}
    </Transition>
    );
}

export default ProjectCard;
