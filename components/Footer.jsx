import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "../images/plantito-logo.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container grid grid--5-cols " id="contact">
      <div className={styles["logo-col"]}>
        <Link href="/">
          <div className={styles.logo}>
            <Logo />
            <span> Gardenia</span>
          </div>
        </Link>

        <ul className={styles["social-links"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              <BsInstagram className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              <BsFacebook className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              <BsTwitter className={styles["social-icon"]} />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          Copyright &copy; 2024 by Prabisha Consulting
          <br /> All rights reserved.
        </p>
      </div>
      <div className={styles["address-col"]}>
        <p className={styles.heading}>Contact us</p>
        <address className={styles.contacts}>
          {/* <p className={styles.address}>
            957 Roberts Dr Elgin, South Carolina(SC), 29045
          </p> */}
          <p>
            <a className={styles["footer-link"]} href="tel:401-102-7063">
              +44 7867 090363
            </a>
            <br />
            <a
              className={styles["footer-link"]}
              href="mailto:info@prabisha.com"
            >
              info@prabisha.com
            </a>
          </p>
        </address>
      </div>
      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Account</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              Create account
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              Sign in
            </a>
          </li>
        
        </ul>
      </nav>
      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Company</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              About Gardenia
            </a>
          </li>

          <li>
            <a className={styles["footer-link"]} href="#">
              Careers
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              For business
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Resources</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              Help center
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              Privacy and terms
            </a>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
