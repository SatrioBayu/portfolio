import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        © {year} <strong>Satrio Bayu</strong>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
