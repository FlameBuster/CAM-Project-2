import React from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  return (
    <ul className={styles.navContainer}>
      <Link href="/">
        <a>
          <li>About Us</li>
        </a>
      </Link>
      <Link href="/campaigns">
        <a>
          <li>Campaigns</li>
        </a>
      </Link>
      <Link href="/gallery">
        <a>
          <li>Gallery</li>
        </a>
      </Link>
      <Link href="/contribute">
      <a>
        <li>Contribute</li>
      </a>
      </Link>
      <Link href="/contact_us">
        <a>
          <li>Contact Us</li>
        </a>
      </Link>
    </ul>
  );
}

export default MobileMenu;
