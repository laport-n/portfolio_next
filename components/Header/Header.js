import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './../../styles/Header.module.css';

function Header() {
  const router = useRouter()
  console.log(router);
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h4>Laporte Nicolas</h4>
      </div>
      <div className={styles.navigation}>
        <div className={styles.itemContainer}>
          <Link href="/articles">
            <a className={styles.item + " " + `${router.pathname === "/articles" | router.pathname.search('/articles/') !== -1 ? styles.active : "" }`}>
              Articles
            </a>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link href="/projects">
            <a className={styles.item + " " + `${router.pathname === "/projects" | router.pathname.search('/projects/') !== -1 ? styles.active : "" }`}>
              Projets
            </a>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link href="/about">
            <a className={styles.item + " " + `${router.pathname === "/about" ? styles.active : "" }`}>
              À propos
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
