import React, { Fragment } from 'react';
import Link from 'next/link';

import styles from './Header.module.css'

function Header(props) {
  return (<Fragment>
    <nav className={styles.header}>
      <div>
        <h2>
          Next.js Meetups App
        </h2>
      </div>
      <div className={styles.navigation}>
        <Link href='/'>All Meetups</Link>
        <Link href='/add-meetup'>Add a meetup</Link>
      </div>
    </nav>
  </Fragment>)
}

export default Header
