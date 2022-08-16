import React, { useEffect, useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import { Link } from "react-scroll";

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
            <Link to="home" className="fs-14px white weight-5 pointer">
              Home
            </Link>
            <Link
              to="aboutus"
              className="fs-14px white weight-5 pointer"
              offset={-160}
            >
              About Us
            </Link>
            <Link
              to="tokenomics"
              className="fs-14px white weight-5 pointer"
              offset={-160}
            >
              Tokenomics
            </Link>
            <Link
              to="faq"
              className="fs-14px white weight-5 pointer"
              offset={-160}
            >
              Faq
            </Link>
            <Link
              to="calculator"
              className="fs-14px white weight-5 pointer"
              offset={-160}
            >
              Calculator
            </Link>
            <Link
              to="roadmap"
              className="fs-14px white weight-5 pointer"
              offset={-160}
            >
              Roadmap
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
