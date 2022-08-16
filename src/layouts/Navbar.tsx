import React, { useEffect, useState } from "react";
import styles from "scss/layout/Navbar.module.scss";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  });

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : null}`}>
      <div className="container-wrapper-2">
        <main>
          <p className="fs-14px white weight-5">logo placeholder</p>

          <div className={styles.links}>
            <a href="#" className="fs-14px white weight-5">
              Home
            </a>
            <a href="#" className="fs-14px white weight-5">
              About Us
            </a>
            <a href="#" className="fs-14px white weight-5">
              Tokenomics
            </a>
            <a href="#" className="fs-14px white weight-5">
              Faq
            </a>
            <a href="#" className="fs-14px white weight-5">
              Calculator
            </a>
            <a href="#" className="fs-14px white weight-5">
              Roadmap
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
