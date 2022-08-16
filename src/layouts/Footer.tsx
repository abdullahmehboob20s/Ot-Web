import React from "react";
import styles from "scss/layout/Footer.module.scss";
import logo from "assets/images/logo.png";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2">
        <div className={styles.footer}>
          <main>
            <div>
              <img src={logo} alt="" />
            </div>
            <ul>
              <li className="fs-16px white weight-7 mb-40px">Quick Links</li>
              <li>
                <a
                  href="#"
                  className="fs-14px white opacity-0_8 pointer mb-40px block w-fit-content"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="fs-14px white opacity-0_8 pointer mb-40px block w-fit-content"
                >
                  About Us
                </a>
              </li>
            </ul>
            <ul>
              <li className="fs-16px white weight-7 mb-40px">Links</li>
              <li>
                <a
                  href="#"
                  className="fs-14px white opacity-0_8 pointer mb-40px block w-fit-content"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="fs-14px white opacity-0_8 pointer mb-40px block w-fit-content"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="fs-14px white opacity-0_8 pointer mb-40px block w-fit-content"
                >
                  Socials
                </a>
              </li>
            </ul>
          </main>
          <footer>
            <div className={styles.socialIcons}>
              <a href="#" className="fs-20px">
                <FaTwitter />
              </a>
              <a href="#" className="fs-20px">
                <FaLinkedinIn />
              </a>
              <a href="#" className="fs-20px">
                <FaFacebookF />
              </a>
            </div>

            <a href="#" className="white opacity-0_8 pointer fs-14px weight-4">
              Termas and Conditions
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
