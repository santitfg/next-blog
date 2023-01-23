import React from "react";
// import "../styles/globals.css";

// import Navbar from "./navbar";
import Link from 'next/link';
import styles from './layout.module.css';

const Layout = (props) => {
  return (
    <>
    <header>
      {/* <Navbar /> */}
      <Link  href="/">index</Link>
      <Link  href="/posts/primer-post">primer post</Link>
    </header>
      <main className={styles.container}>

      {props.children}
      </main>
    </>
  );
};
export default Layout;
